<template>
    <div>
        <v-container align="center" justify="center">
            <div class="block-header">
                <h3 class="block-header__title">Detalle de producto</h3>
                <div class="block-header__divider"></div>
            </div>   
            <v-card max-width="100%">
                <v-row>
                    <v-col md="5" align="center" justify="center">
                        
                        <img :src="'http://app.soldarco.com/Doom/Bootstrap/servicios/ShowImage.ashx?ID='+ product.REFERENCIA +'&TIPO=FRENTE&COLOR=*&EMPRESA=02'" alt="" style="max-width: auto; height: 333px; margin-left: 20px">
                    </v-col>
                    
                    <v-col md="7">
                        <h1 class="product-title1">{{ product.NOMBRE }}</h1>
                        <h3 class="product-reference1"> Referencia: {{ product.REFERENCIA }}</h3>
                        <h3 class="product-brand1"> Marca: {{ product.MARCA }}</h3>
                        <span class="product-design"><b>Diseño: </b> {{ product.DISEÑO }}</span>
                        <h1 class="product-price1" v-if="quantity == 0">{{ new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(product.PRECIO.replace(',', '') * 1) }} /UND</h1>
                        <h1 class="product-price1" v-else>{{ new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(parseInt(product.PRECIO.replace(',', '')) * parseInt(quantity)) }}</h1>
                        <v-row style="margin-left: 0" class="quantity-buttons">
                            <v-btn small class="buttonMinus1" @click="deleteQuantity(product)"><v-icon>mdi-minus</v-icon></v-btn>
                            <div class="counter" v-if="quantity == 0">1 UND</div>
                            <div class="counter" v-else>{{ quantity }} UND</div>
                            <v-btn small class="buttonPlus" @click="addQuantity(product.REFERENCIA)"><v-icon>mdi-plus</v-icon></v-btn>
                        </v-row>
                        <v-row style="margin-left: 0; margin-right: 10px" class="product-button">
                            <v-col md="6" style="padding: 12px 12px 12px 0px">
                                <v-btn x-large color="primary" style="margin-top: 10px;" @click="addToCart(product)"><v-icon>mdi-cart</v-icon> Agregar</v-btn>
                            </v-col>
                            <v-col md="6" align="end" justify="end">
                                <v-btn v-if="product.DOC != null" x-large color="red" style="margin-top: 10px;"><v-icon>mdi-file</v-icon> Ficha Tecnica</v-btn>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-card>
            <div class="products-des">
                <div class="block-header">
                    <h3 class="block-header__title">Productos destacados...</h3>
                    <div class="block-header__divider"></div>
                </div>   
                <v-slide-group class="pa-4" prev-icon="mdi-chevron-left" next-icon="mdi-chevron-right" :multiple="true" :show-arrows="true" :center-active="true">
                    <v-slide-item v-for="(item, i) in products" :key="i">
                        <div class="product-card-sugery" style="width: 25%">
                            <div class="product-img">
                                <router-link :to="'/product-detail/'+ item.REFERENCIA">
                            
                                    <img :src="'http://app.soldarco.com/Doom/Bootstrap/servicios/ShowImage.ashx?ID='+item.REFERENCIA+'&TIPO=FRENTE&COLOR=*&EMPRESA=02'" alt="" style="max-width: auto; height: 200px" @click="goToProduct(item.REFERENCIA)">
                                </router-link>
                            </div>
                            <div class="product-info">
                                <p class="product-price1">{{ new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(item.PRECIO.replace(',', '')) }}</p>
                                <p class="product-name1" style="text-overflow: ellipsis; width: 219px; white-space: break-spaces;">{{ item.NOMBRE }}</p>
                                <p class="product-brand1">Marca: {{ item.MARCA }}</p>
                            </div>
                        </div>
                    </v-slide-item>
                </v-slide-group>
            </div>
            <v-snackbar v-model="notification" :multi-line="true" :top="true" :right="true" color="success" :auto-height="true">
                <v-row>
                    <h3>Se agrego el producto existosamente al carrito</h3>
                </v-row>
                <template v-slot:action="{ attrs }">
                <v-btn
                    color="black"
                    text
                    v-bind="attrs"
                    @click="notification = false"
                >
                    x
                </v-btn>
                </template>
            </v-snackbar>
        </v-container>
    </div>
</template>   
<script>
import axios from 'axios';
export default {
    data: () => ({
        products: [],
        param: '',
        filtroCategoria: '',
        notification: false,
        user: {},
        refDownQuantity: '',
        quantityDown: '',
        refDown: '',
        refUpQuantity: '',
        quantityUp: '',
        refUp: ''
    }),
    created() {

        this.param = this.$route.params.id
        this.getProducts();
        this.getLocalProducts();
        this.user = JSON.parse(localStorage.getItem('user'))
        let carrito = JSON.parse(localStorage.getItem('carrito api'))
        this.regCarrito = carrito.Datos
    },
    methods: {
        getProducts: function(){
            var consulta = ""
            consulta = consulta + "<PagXml>                                ";
            consulta = consulta + "   <CorXml>                             ";
            consulta = consulta + "      <TIPO>PARAMETRO</TIPO>            ";
            consulta = consulta + "      <CODIGO>0111</CODIGO>             ";
            consulta = consulta + "      <PAGINA>1</PAGINA>             ";
            consulta = consulta + "      <PAGINAS>20</PAGINAS>           ";
            consulta = consulta + "      <NOMBRE>PROCESO</NOMBRE>          ";
            consulta = consulta + "      <ORDEN>1</ORDEN>                  ";
            consulta = consulta + "      <VALOR><![CDATA[EMPRESA.CONTACTOS]]></VALOR>   ";
            consulta = consulta + "      <FILTRO><![CDATA[" + this.filtroCategoria + "]]></FILTRO>     ";
            consulta = consulta + "   </CorXml>                                               ";
            consulta = consulta + "</PagXml>                                                  ";
            axios({
                method: 'post',
                url: 'http://app.soldarco.com/Doom/Bootstrap/Servicios/sweb_carrito.asmx/FiltroBusquedaJson',
                data: "Parametros=" + consulta + ""
            }).then(response => {
                var startString = response.data;
                var inicio = 90,
                SubCadenaInicio = startString.substring(inicio);
    
                var cadena = SubCadenaInicio;
                var patron = "}</string>";
                var nuevoValor = "";
                var newString = cadena.replace(patron,nuevoValor);
                var aux = JSON.parse(newString);
                this.products = aux.Datos
            })
        },

        addToCart(data){
            if(Object.keys(this.user).length > 0){
                let filter = this.productsCart.filter(item => item.REFERENCIA == data.REFERENCIA)
                if(filter.length > 0){
                    this.$swal({
                        icon: 'warning',
                        text: 'Ésta referencia ya esta incluida en el carrito',
                    });
                }else{
                    if(this.productsCart.length > 0){
                        data.quantity = 1
                        

                        var pedido = ""
                            pedido = pedido + "<PagXml>                                                         ";
                            pedido = pedido + "   <CorXml>                                                      ";
                            pedido = pedido + "      <TIPO>PARAMETRO</TIPO>                                     ";
                            pedido = pedido + "      <PROCESO>0117</PROCESO>                                    "; 
                            pedido = pedido + "      <SUCURSAL>02</SUCURSAL>                                    ";
                            pedido = pedido + "      <TIPODOC>PEW</TIPODOC>                                     ";  //FIJO     
                            pedido = pedido + "      <DOCUMENTO>@@TT1@@</DOCUMENTO>                             ";  //FIJO     
                            pedido = pedido + "      <USERID>"+this.user.CORREO+"</USERID>                    ";
                            pedido = pedido + "      <PASSWORD>"+this.user.CLAVE+"</PASSWORD>                 ";      
                            pedido = pedido + "      <ITEMS>"+data.REFERENCIA+"</ITEMS>                                     ";
                            pedido = pedido + "      <COLOR>*</COLOR>                                           ";
                            pedido = pedido + "      <TALLA>*</TALLA>                                           ";
                            pedido = pedido + "      <CANTIDAD>"+data.quantity+"</CANTIDAD>                    ";
                            pedido = pedido + "      <REG>0</REG>                                             "; //si llega registro actualia       
                            pedido = pedido + "   </CorXml>                                                     ";
                            pedido = pedido + "</PagXml>                                                        ";
                            axios({
                                method: 'post',
                                url: 'http://app.soldarco.com/Doom/Bootstrap/Servicios/sweb_carrito.asmx/SetPedido',                    
                                data: "Parametros=" + pedido + "",
                                config: { headers: {'Content-Type': 'multipart/form-data' }}
                            })
                            .then(response => {
                            // console.log(response.data);
                            var cadenainicio = response.data,        
                            inicio = 90,
                            subCadenainicio = cadenainicio.substring(inicio);                              
                            var cadena = subCadenainicio,
                            patron = "}</string>",
                            nuevoValor    = "",
                            nuevaCadena = cadena.replace(patron, nuevoValor);            
                            var pedidocarrito = JSON.parse(nuevaCadena);
                            localStorage.setItem('carrito api', JSON.stringify(pedidocarrito))
                            this.data_pedido = pedidocarrito
                        })
                        .catch(error => {
                            console.log(error);
                        });

                        
                        this.$store.commit('cart/addToCartLocal', data);
                        this.notification = true
                        this.message = 'Se agrego producto exitosamente al carrito',
                        this.color = 'success'
                    }else{
                        data.quantity = 1
                        let pedido = ""
                            pedido = pedido + "<PagXml>                                                         ";
                            pedido = pedido + "   <CorXml>                                                      ";
                            pedido = pedido + "      <TIPO>PARAMETRO</TIPO>                                     ";
                            pedido = pedido + "      <PROCESO>0117</PROCESO>                                    "; 
                            pedido = pedido + "      <SUCURSAL>02</SUCURSAL>                                    ";
                            pedido = pedido + "      <TIPODOC>PEW</TIPODOC>                                     ";  //FIJO     
                            pedido = pedido + "      <DOCUMENTO>@@TT1@@</DOCUMENTO>                             ";  //FIJO     
                            pedido = pedido + "      <USERID>"+this.user.CORREO+"</USERID>                    ";
                            pedido = pedido + "      <PASSWORD>"+this.user.CLAVE+"</PASSWORD>                 ";      
                            pedido = pedido + "      <ITEMS>"+data.REFERENCIA+"</ITEMS>                                     ";
                            pedido = pedido + "      <COLOR>*</COLOR>                                           ";
                            pedido = pedido + "      <TALLA>*</TALLA>                                           ";
                            pedido = pedido + "      <CANTIDAD>"+data.quantity+"</CANTIDAD>                    ";
                            pedido = pedido + "      <REG>186</REG>                                             "; //si llega registro actualia       
                            pedido = pedido + "   </CorXml>                                                     ";
                            pedido = pedido + "</PagXml>                                                        ";
                            console.log(pedido)
                            axios({
                                method: 'post',
                                url: 'http://app.soldarco.com/Doom/Bootstrap/Servicios/sweb_carrito.asmx/SetPedido',                    
                                data: "Parametros=" + pedido + "",
                                config: { headers: {'Content-Type': 'multipart/form-data' }}
                            })
                            .then(response => {
                            // console.log(response.data);
                            var cadenainicio = response.data,        
                            inicio = 90,
                            subCadenainicio = cadenainicio.substring(inicio);                              
                            var cadena = subCadenainicio,
                            patron = "}</string>",
                            nuevoValor    = "",
                            nuevaCadena = cadena.replace(patron, nuevoValor);            
                            var pedidocarrito = JSON.parse(nuevaCadena);
                            localStorage.setItem('carrito api', JSON.stringify(pedidocarrito))
                            var cart = JSON.parse(localStorage.getItem('carrito api'))
                            this.REG = cart.Datos.REG
                            this.data_pedido = pedidocarrito
                        })
                        .catch(error => {
                            console.log(error);
                        });     
                        this.$store.commit('cart/addToCartLocal', data);
                        this.notification = true
                        this.message = 'Se agrego producto exitosamente al carrito',
                        this.color = 'success'
                    }
                } 
            }else{
                this.$router.push('/login');
            }
        },

        getLocalProducts(){
            let data = (localStorage.getItem('cart'))
            if(data){
                this.$store.commit('cart/getCartLocal', JSON.parse(data));
            }else{
                let data = []
                localStorage.setItem('cart', JSON.stringify(data))
            }
        },

        addQuantity: function(reference) {
            let carrito = JSON.parse(localStorage.getItem('carrito api'))
        this.regCarrito = carrito.Datos
            let details = []
            var reg = ''
            var quantity = ''
            this.productsCart.map((item) => {
                if(item.REFERENCIA == reference){
                    reg = item.REFERENCIA
                    item.quantity++
                    quantity = item.quantity
                }

                if(this.regCarrito.length >= 2){
                    this.regCarrito.filter(element => {
                        if(element.REFERENCIA == reg){
                            this.refUpQuantity = element.REG
                            this.quantityUp = quantity
                            this.refUp = reg
                        }
                    })
                }else{
                    this.refUpQuantity = this.regCarrito.REG
                    this.quantityUp = quantity
                    this.refUp = reg
                }
                details.push(item)
            });
            var updatepedido = ""
                    updatepedido = updatepedido + "<PagXml>                                                         ";
                    updatepedido = updatepedido + "   <CorXml>                                                      ";
                    updatepedido = updatepedido + "      <TIPO>PARAMETRO</TIPO>                                     ";
                    updatepedido = updatepedido + "      <PROCESO>0117</PROCESO>                                    "; 
                    updatepedido = updatepedido + "      <SUCURSAL>02</SUCURSAL>                                 ";
                    updatepedido = updatepedido + "      <TIPODOC>PEW</TIPODOC>                                     ";  //FIJO     
                    updatepedido = updatepedido + "      <DOCUMENTO>@@TT1@@</DOCUMENTO>                             ";  //FIJO     
                    updatepedido = updatepedido + "      <USERID>"+this.user.CORREO+"</USERID>                    ";
                    updatepedido = updatepedido + "      <PASSWORD>"+this.user.CLAVE+"</PASSWORD>                 ";      
                    updatepedido = updatepedido + "      <ITEMS>"+this.refUp+"</ITEMS>                              ";
                    updatepedido = updatepedido + "      <COLOR>*</COLOR>                                           ";
                    updatepedido = updatepedido + "      <TALLA>*</TALLA>                                           ";
                    updatepedido = updatepedido + "      <CANTIDAD>"+this.quantityUp+"</CANTIDAD>                          ";
                    updatepedido = updatepedido + "      <REG>"+this.refUpQuantity+"</REG>                                         "; //si llega registro actualia       
                    updatepedido = updatepedido + "   </CorXml>                                                     ";
                    updatepedido = updatepedido + "</PagXml>                                                        ";
                    axios({
                        method: 'post',
                        url: 'http://app.soldarco.com/Doom/Bootstrap/Servicios/sweb_carrito.asmx/SetPedido',
                        data: "Parametros=" + updatepedido + "",
                        config: { headers: {'Content-Type': 'multipart/form-data' }}
                    })
                    .then(response => {
                        var cadenainicio = response.data,                            
                        inicio = 90,
                        subCadenainicio = cadenainicio.substring(inicio);

                        // console.log(subCadenainicio);

                        var cadena = subCadenainicio,
                        patron = "}</string>",
                        nuevoValor    = "",
                        nuevaCadena = cadena.replace(patron, nuevoValor);            
                        var pedidocarrito = JSON.parse(nuevaCadena);
                        localStorage.setItem('carrito api', JSON.stringify(pedidocarrito))
                    })
                    .catch(error => {
                        console.log(error);
                    });       
            this.productsCart = details
        },

        deleteQuantity: function(product){
            let details = []
            let index_quantity = ''
            this.productsCart.map((item, index) => {
                if(item.REFERENCIA == product.REFERENCIA){
                    index_quantity += index
                }
            })
            let new_quantity = this.productsCart[index_quantity].quantity - 1
            if(new_quantity < 1){
                this.$swal({
                    text: '¿Estas seguro de eliminar este producto del carrito?',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#1976D2',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Si, eliminar!',
                    cancelButtonText: 'No'
                }).then((result) => {
                    if(result.value){
                        var reg = ''
                        let carrito = JSON.parse(localStorage.getItem('carrito api'))
                        this.regCarrito = carrito.Datos
                        this.productsCart.map((item, key) => {
                            if(key == index_quantity){
                                reg = item.REFERENCIA
                            }

                            if(this.regCarrito.length >= 2){
                                this.regCarrito.filter(element => {
                                    if(element.REFERENCIA == reg){
                                        this.refDelete = element.REG
                                    }
                                })
                                
                            }else{
                                this.refDelete = this.regCarrito.REG
                            }
                            
                        });

                        var delitem = ""
                            delitem = delitem + "<PagXml>                                                          ";
                            delitem = delitem + "   <CorXml>                                                       ";
                            delitem = delitem + "      <TIPO>PARAMETRO</TIPO>                                      ";
                            delitem = delitem + "      <PROCESO>0118</PROCESO>                                     ";
                            delitem = delitem + "      <SUCURSAL>02</SUCURSAL>                                  ";
                            delitem = delitem + "      <TIPODOC>PEW</TIPODOC>                                      ";
                            delitem = delitem + "      <DOCUMENTO>@@TT1@@</DOCUMENTO>                              ";
                            delitem = delitem + "      <USERID>"+this.user.CORREO+"</USERID>                     ";
                            delitem = delitem + "      <PASSWORD>"+this.user.CLAVE+"</PASSWORD>                  ";
                            delitem = delitem + "      <REG>"+this.refDelete+"</REG>                                                ";
                            delitem = delitem + "   </CorXml>                                                      ";
                            delitem = delitem + "</PagXml>                                                         ";
                            axios({
                                method: 'post',
                                url: 'http://app.soldarco.com/Doom/Bootstrap/Servicios/sweb_carrito.asmx/SetPedido',
                                data: "Parametros=" + delitem + "",
                                config: { headers: {'Content-Type': 'multipart/form-data' }}
                            })
                            .then(response => {
                                var cadenainicio = response.data,
                                inicio = 90,
                                subCadenainicio = cadenainicio.substring(inicio);
                                var cadena = subCadenainicio,
                                patron = "}</string>",
                                nuevoValor    = "",
                                nuevaCadena = cadena.replace(patron, nuevoValor);
                                var pedidocarrito = JSON.parse(nuevaCadena);
                                localStorage.setItem('carrito api', JSON.stringify(pedidocarrito))
                                location.reload();

                                this.banderapedido = pedidocarrito.Estado.Registros;
                                if (this.banderapedido == 0) {
                                    location.reload();
                                }

                            })
                            .catch(error => {
                                console.log(error);
                            });
                        this.productsCart.splice(index_quantity, 1)
                        localStorage.setItem('cart', JSON.stringify(this.productsCart));
                    }
                });
            }else{
                var reg = ''
                var quantity = ''
                this.productsCart.map((item, key) => {
                    if(key == index_quantity){
                        reg = item.REFERENCIA
                        item.quantity--
                        quantity = item.quantity
                    }

                    if(this.regCarrito.length >= 2){
                        this.regCarrito.filter(element => {
                            if(element.REFERENCIA == reg){
                                this.refDownQuantity = element.REG
                                this.quantityDown = quantity
                                this.refDown = reg
                            }
                        })
                    }else{
                        this.refDownQuantity = this.regCarrito.REG
                        this.quantityDown = quantity
                        this.refDown = reg
                    }
                    details.push(item)
                });
                var updatepedido = ""
                    updatepedido = updatepedido + "<PagXml>                                                         ";
                    updatepedido = updatepedido + "   <CorXml>                                                      ";
                    updatepedido = updatepedido + "      <TIPO>PARAMETRO</TIPO>                                     ";
                    updatepedido = updatepedido + "      <PROCESO>0117</PROCESO>                                    "; 
                    updatepedido = updatepedido + "      <SUCURSAL>02</SUCURSAL>                                 ";
                    updatepedido = updatepedido + "      <TIPODOC>PEW</TIPODOC>                                     ";  //FIJO     
                    updatepedido = updatepedido + "      <DOCUMENTO>@@TT1@@</DOCUMENTO>                             ";  //FIJO     
                    updatepedido = updatepedido + "      <USERID>"+this.user.CORREO+"</USERID>                    ";
                    updatepedido = updatepedido + "      <PASSWORD>"+this.user.CLAVE+"</PASSWORD>                 ";      
                    updatepedido = updatepedido + "      <ITEMS>"+this.refDown+"</ITEMS>                              ";
                    updatepedido = updatepedido + "      <COLOR>*</COLOR>                                           ";
                    updatepedido = updatepedido + "      <TALLA>*</TALLA>                                           ";
                    updatepedido = updatepedido + "      <CANTIDAD>"+this.quantityDown+"</CANTIDAD>                          ";
                    updatepedido = updatepedido + "      <REG>"+this.refDownQuantity+"</REG>                                         "; //si llega registro actualia       
                    updatepedido = updatepedido + "   </CorXml>                                                     ";
                    updatepedido = updatepedido + "</PagXml>                                                        ";
                    axios({
                        method: 'post',
                        url: 'http://app.soldarco.com/Doom/Bootstrap/Servicios/sweb_carrito.asmx/SetPedido',
                        data: "Parametros=" + updatepedido + "",
                        config: { headers: {'Content-Type': 'multipart/form-data' }}
                    })
                    .then(response => {
                        var cadenainicio = response.data,                            
                        inicio = 90,
                        subCadenainicio = cadenainicio.substring(inicio);

                        // console.log(subCadenainicio);

                        var cadena = subCadenainicio,
                        patron = "}</string>",
                        nuevoValor    = "",
                        nuevaCadena = cadena.replace(patron, nuevoValor);            
                        var pedidocarrito = JSON.parse(nuevaCadena);
                        localStorage.setItem('carrito api', JSON.stringify(pedidocarrito))
                    })
                    .catch(error => {
                        console.log(error);
                    });         
                this.productsCart = details
            }
        },
    },
    computed: {
        product: function(){
            this.$route.params.id
            let product = {}
            this.products.map(item => {
                if(item.REFERENCIA == this.$route.params.id){
                    product = item
                }
            })
            return product
        },

        productsCart: {
            get(){
                if(this.$store.state.cart.cartProducts.length > 0){
                    return this.$store.state.cart.cartProducts;
                }else{
                    return [];
                }
            },

            set(val){
                this.$store.commit('cart/updateCart', val)
            }
            
        },

        quantity: function(){
            let quantity = 0
            this.productsCart.map(item => { 
                if(item.REFERENCIA == this.product.REFERENCIA){ 
                    quantity += item.quantity
                }else{
                    quantity = 0
                }
            })
            return quantity;
        }
    },
}
</script>