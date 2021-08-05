<template>
    <div>
        <v-list class="product-market">
            <v-list-item class="products-list__item" v-for="(item, index) in pages" :key="index">
                <div class="product">
                    <div class="product-card">
                        <div class="product-img">
                            <router-link :to="'/product-detail/' + item.REFERENCIA">
                                <img :src="'http://app.soldarco.com/Doom/Bootstrap/servicios/ShowImage.ashx?ID='+item.REFERENCIA+'&TIPO=FRENTE&COLOR=*&EMPRESA=02'" alt="">
                            </router-link>
                        </div>
                        <div class="product-info">
                            <p class="product-price">{{ new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(item.PRECIO.replace(',', '')) }} / Iva Incluido</p>
                            <p class="product-price">Precio Unitario</p>
                            <p class="product-name">{{ item.NOMBRE }}</p>
                            <p class="product-brand"><b>Marca:</b>  {{ item.MARCA }}</p>
                            <p class="product-brand"><b>Categoria:</b>  {{ item.GRUPO }}</p>
                            <p class="product-brand"><b>Ref soldarco:</b>  {{ item.REFERENCIA }}</p>
                            <p class="product-brand"><b>Ref Fabricante:</b>  {{ item.REFERENCIA1 }}</p>
                        </div>
                        <div class="product-action">
                            <v-btn color="primary" style="min-width: 100%" @click="addToCart(item)">Agregar</v-btn>
                        </div>
                    </div>
                </div>
            </v-list-item>
        </v-list>
        <v-snackbar v-model="notification" :color="color" :right="x === 'right'" :timeout="timeout" :top="y === 'top'">
            {{ message }}
        <template v-slot:action="{ attrs }">
            <v-btn dark text v-bind="attrs" @click="notification = false">
            x
            </v-btn>
      </template>
    </v-snackbar>
        <v-pagination  v-model="page" :length="lenght" circle></v-pagination>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    props: ['products'],
    data: () => ({
        page: 1,
        perPage: 12,
        notification: false,
        message: '',
        color: '',
        y: 'top',
        timeout: 3000,
        x: 'right',
        productDetail: false,
        user: {},
        data_pedido: {},
        REG: ''
    }),
    created() {
        this.getLocalProducts();
        this.user = JSON.parse(localStorage.getItem('user'))
    },
    methods: {
        getLocalProducts(){
            let data = (localStorage.getItem('cart'))
            if(data){
                this.$store.commit('cart/getCartLocal', JSON.parse(data));
            }else{
                let data = []
                localStorage.setItem('cart', JSON.stringify(data))
            }
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
    },
    computed: {
        productsCart: function(){
            if(this.$store.state.cart.cartProducts.length > 0){
                return this.$store.state.cart.cartProducts;
            }else{
                return [];
            }
        },
        
        pages: function(){
            if(this.products != null){
                return this.products.slice((this.page - 1) * this.perPage, this.page * this.perPage)
            }else{
                return 0;
            }
        },

        lenght: function(){
            if(this.products != null){
                return Math.ceil(this.products.length / this.perPage);
            }else{
                return 0;
            }
        }
    },
}
</script>