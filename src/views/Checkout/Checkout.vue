<template>
    <div>
        <v-container>
            <v-row>
                <v-col md="7" lg="7" sm="12">
                    <div class="block-header">
                        <h3 class="block-header__title">Tus Productos</h3>
                        <div class="block-header__divider"></div>
                    </div>
                    <v-data-table :headers="headers" :items="carrito" class="elevation 1" :calculate-widths="true">
                        <template v-slot:item.image="{ item }">
                            <img :src="'http://app.soldarco.com/Doom/Bootstrap/servicios/ShowImage.ashx?ID='+ item.REFERENCIA +'&TIPO=FRENTE&COLOR=*&EMPRESA=02'" class="img-checkout" style="max-width: auto; height: 72px; margin-top: 6px;" alt="">
                        </template>
                       <template v-slot:item.CANTIDAD="{item}">
                            <h5>{{ parseInt(item.CANTIDAD) }}</h5>
                        </template> 
                        <template v-slot:item.VALOR="{item}">
                            <h5 class="product_price">{{ new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(item.VALOR) }}</h5>
                        </template>
                    </v-data-table>
                </v-col>
                <v-col md="5" lg="5" sm="12">
                    <form id="formcheckout" method="post" action="https://checkout.payulatam.com/ppp-web-gateway-payu">
                        <div class="block-header">
                            <h3 class="block-header__title">Tu Información</h3>
                            <div class="block-header__divider"></div>
                        </div>
                        <span><b>Cliente: </b> {{ users.NOMBRES + ' ' + users.APELLIDOS }}</span><br>
                        <span><b>Documento: </b> {{ users.IDENTIFICACION }}</span><br>
                        <span><b>Telefono: </b> {{ users.TELEFONO }}</span><br>
                        <span><b>Correo Electronico</b> {{ users.CORREO }}</span><br>
                        <span><b>Departamento: </b> {{ users.DEPARTAMENTO }}</span><br>
                        <span><b>Ciudad: </b>{{ users.CIUDAD }}</span><br>
                        <span><b>Codigo Postal</b> {{ users.CODIGO_POSTAL }}</span>
                        <div class="block-header">
                            <h3 class="block-header__title">Informacion Del Pedido</h3>
                            <div class="block-header__divider"></div>
                        </div>
                        <span><b>Subtotal: </b>{{ new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(base) }}</span><br>
                        <span><b>Valor Del Envio:</b> {{ new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(flete + 0) }}</span><br>
                        <span><b>Descuento:</b> {{ new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(descuento + 0) }}</span><br>
                        <span><b>Iva:</b> {{ new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(iva + 0) }}</span><br>
                        <h2><b>Total:</b> {{ new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(total + 0) }}</h2>
                        <div class="block-header">
                            <h3 class="block-header__title">Acciones</h3>
                            <div class="block-header__divider"></div>
                        </div>
                        <a @click="deleteBandera" href="/shop" >
                            <v-btn min-width="100%" color="primary">Seguir Comprando</v-btn>
                        </a><br>
                        <v-btn v-if="totalCarrito >= 10300" type="submit" @click.prevent="checkout()" min-width="100%" style="margin-top: 10px" color="primary">Realizar Pedido</v-btn>
                        <!-- <input name="51"         id="51"          type="hidden"     value="1.0000"  > -->
                        <input name="merchantId"         id="merchantId"          type="hidden"     value="839670"  >
                        <input name="ApiKey"             id="ApiKey"              type="hidden"     value="3689YQ4Gkj0Gzymz8Fjub2RQV3"  >
                        <input name="accountId"          id="accountId"           type="hidden"     value="847130" >
                        <input name="description"        id="description"         type="hidden"     value="Test PAYU"  >
                        <input name="referenceCode"      id="referenceCode"       type="hidden"     v-model="referenciaCodigo">
                        <input name="amount"             id="amount"              type="hidden"     v-model="totalCarrito">
                        <input name="tax"                id="tax"                 type="hidden"     value="0" >
                        <input name="taxReturnBase"      id="taxReturnBase"       type="hidden"     value="0" >
                        <input name="currency"           id="currency"            type="hidden"     value="COP" >
                        <input name="signature"          id="signature"           type="hidden"     v-model="md5cadena"  >
                        <input name="test"               id="test"                type="hidden"     value="0" >
                        <input name="extra1"             id="extra1"              type="hidden"     value="02" >
                        <input name="buyerEmail"         id="buyerEmail"          type="hidden"     v-model="user.CORREO" >
                        <input name="responseUrl"        id="responseUrl"         type="hidden"     value="http://www.soldarco.com/newecommerce/respuesta.html">
                        <input name="confirmationUrl"    id="confirmationUrl"     type="hidden"     value="https://3dev.com.co/Doom/Bootstrap/Servicios/eco_pagos.ashx">
                        <input name="shippingAddress"    id="shippingAddress"     type="hidden"     value="Carrera 4# 21-73 Cali, Colombia" > 
                        <input name="shippingCity"       id="shippingCity"        type="hidden"     value="Cali" > 
                        <input name="shippingCountry"    id="shippingCountry"     type="hidden"     value="CO" >
                    </form>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
import axios from 'axios';
const md5Hex = require('md5-hex')
// import md5Hex from 'md5-hex';
export default {
    data:() => ({
        cart: [],
        headers: [
            { text: 'Imagen', value: 'image' },
            { text: 'Cantidad', value: 'CANTIDAD' },
            { text: 'Precio', value: 'VALOR'},
        ],
        user: [],
        referenciaCodigo:'00000000',
        md5cadena: '', 
        screen: 0,
        carrito: [],
        totalCarrito: '',
        regCarrito: {},
        descuento: '',
        iva: '',
        base: '',
        flete: '',
        total: '',
        carritoApi: []
    }),
    created() {
        var user = JSON.parse(localStorage.getItem('user'))
        var cart = JSON.parse(localStorage.getItem('carrito api'))
            this.user = user
        if(!cart){
            this.$router.push('/shop')
        // }else{
            // if(cart.Datos.length >= 2){
            //     this.carritoApi = cart.Datos
            // }else{
            //     this.carritoApi.push(cart.Datos)
            // }
        }
        console.log(this.carritoApi)
        this.getCarrito()
        this.fleteCost();
        this.getLocalProducts();
        this.getLocalUser();
        this.screen = screen.width;
    },
    methods: {
        deleteBandera(){
            // console.log('hola')
            localStorage.removeItem("bandera");
        },

        fleteCost(id){
            console.log('flete')
            var Codigo = "CODIGO = " + this.user.DEPARTAMENTO;
            var consulta = ""
                consulta = consulta + "<PagXml>                                ";
                consulta = consulta + "   <CorXml>                             ";
                consulta = consulta + "      <TIPO>PARAMETRO</TIPO>            ";
                consulta = consulta + "      <CODIGO>0143</CODIGO>             ";
                consulta = consulta + "      <PAGINA>" + this.subtotal + "</PAGINA>             ";
                consulta = consulta + "      <PAGINAS>0</PAGINAS>           ";
                consulta = consulta + "      <NOMBRE>PROCESO</NOMBRE>          ";
                consulta = consulta + "      <ORDEN>1</ORDEN>                  ";
                consulta = consulta + "      <VALOR><![CDATA[EMPRESA.CONTACTOS]]></VALOR>   ";
                consulta = consulta + "      <FILTRO><![CDATA[" + Codigo + "]]></FILTRO>     ";
                consulta = consulta + "   </CorXml>                             ";
                consulta = consulta + "</PagXml>                               ";
                axios.post('http://app.soldarco.com/Doom/Bootstrap/Servicios/sweb_carrito.asmx/FiltroBusquedaJson', "Parametros=" + consulta + "")
                .then(response => {
                    var cadenainicio = response.data,        
                    inicio = 90,
                    subCadenainicio = cadenainicio.substring(inicio);                              
                    var cadena = subCadenainicio,
                    patron = "}</string>",
                    nuevoValor    = "",
                    nuevaCadena = cadena.replace(patron, nuevoValor);            
                    var pedidocarrito = JSON.parse(nuevaCadena); 
                    this.total = parseInt(pedidocarrito.Datos.TOTAL)
                    this.descuento = pedidocarrito.Datos.DESCUENTO
                    this.base = pedidocarrito.Datos.SUBTOTAL
                    this.iva = pedidocarrito.Datos.IVA
                    this.flete = pedidocarrito.Datos.FLETE
                    this.generateOrder(this.total);
                    if(id == 1){
                        this.finishCheckout()
                    }
                })
        },

        getCarrito(){
            var user = JSON.parse(localStorage.getItem('user'));
            var consulpedido = ""
                consulpedido = consulpedido + "<PagXml>                                                          ";
                consulpedido = consulpedido + "   <CorXml>                                                       ";
                consulpedido = consulpedido + "      <TIPO>PARAMETRO</TIPO>                                      ";
                consulpedido = consulpedido + "      <PROCESO>0119</PROCESO>                                     "; //registro de usuario
                consulpedido = consulpedido + "      <SUCURSAL>02</SUCURSAL>                                  ";
                consulpedido = consulpedido + "      <TIPODOC>PEW</TIPODOC>                                      ";
                consulpedido = consulpedido + "      <DOCUMENTO>@@TT1@@</DOCUMENTO>                              ";         
                consulpedido = consulpedido + "      <USERID>"+user.CORREO+"</USERID>                     ";
                consulpedido = consulpedido + "      <PASSWORD>"+user.CLAVE+"</PASSWORD>                  ";    
                consulpedido = consulpedido + "   </CorXml>                                                      ";
                consulpedido = consulpedido + "</PagXml>                                                         ";
            axios({
                method: 'post',
                url: 'http://app.soldarco.com/Doom/Bootstrap/Servicios/sweb_carrito.asmx/SetPedido',
                data: "Parametros=" + consulpedido + "",
                config: { headers: {'Content-Type': 'multipart/form-data' }}
            }).then(response => {
                var cadenainicio = response.data,        
                inicio = 90,
                subCadenainicio = cadenainicio.substring(inicio);                              
                var cadena = subCadenainicio,
                patron = "}</string>",
                nuevoValor    = "",
                nuevaCadena = cadena.replace(patron, nuevoValor);            
                var pedidocarrito = JSON.parse(nuevaCadena); 
                console.log(pedidocarrito)
            })
        },

        generateOrder: function(total){
            var user = JSON.parse(localStorage.getItem('user'));
            if(user != null){
                var consulpedido = ""
                consulpedido = consulpedido + "<PagXml>                                                          ";
                consulpedido = consulpedido + "   <CorXml>                                                       ";
                consulpedido = consulpedido + "      <TIPO>PARAMETRO</TIPO>                                      ";
                consulpedido = consulpedido + "      <PROCESO>0119</PROCESO>                                     "; //registro de usuario
                consulpedido = consulpedido + "      <SUCURSAL>02</SUCURSAL>                                  ";
                consulpedido = consulpedido + "      <TIPODOC>PEW</TIPODOC>                                      ";
                consulpedido = consulpedido + "      <DOCUMENTO>@@TT1@@</DOCUMENTO>                              ";         
                consulpedido = consulpedido + "      <USERID>"+user.CORREO+"</USERID>                     ";
                consulpedido = consulpedido + "      <PASSWORD>"+user.CLAVE+"</PASSWORD>                  ";    
                consulpedido = consulpedido + "   </CorXml>                                                      ";
                consulpedido = consulpedido + "</PagXml>                                                         ";
                axios({
                    method: 'post',
                    url: 'http://app.soldarco.com/Doom/Bootstrap/Servicios/sweb_carrito.asmx/SetPedido',
                    data: "Parametros=" + consulpedido + "",
                    config: { headers: {'Content-Type': 'multipart/form-data' }}
                }).then(response => {
                    var cadenainicio = response.data,        
                    inicio = 90,
                    subCadenainicio = cadenainicio.substring(inicio);                              
                    var cadena = subCadenainicio,
                    patron = "}</string>",
                    nuevoValor    = "",
                    nuevaCadena = cadena.replace(patron, nuevoValor);            
                    var pedidocarrito = JSON.parse(nuevaCadena); 
                    console.log(pedidocarrito)

                    if(pedidocarrito.Estado.Registros >= 2){
                        this.carrito = pedidocarrito.Datos;
                        this.referenciaCodigo = this.carrito[0].DOCUMENTO;
                        this.cantidadProductos = this.products.length;
                        this.totalCarrito = total

                        this.md5cadena = md5Hex("3689YQ4Gkj0Gzymz8Fjub2RQV3~839670~"+this.referenciaCodigo+"~"+total+"~COP");
                    }else if(pedidocarrito.Estado.Registros == 1){
                        var found = Object.values(pedidocarrito);
                        this.carrito = found.slice(0,1);
                        this.referenciaCodigo = this.carrito[0].DOCUMENTO
                        var contadorProductos = 1;
                        this.cantidadProductos = contadorProductos;
                        this.totalCarrito = total
                        this.md5cadena = md5Hex("3689YQ4Gkj0Gzymz8Fjub2RQV3~839670~"+this.referenciaCodigo+"~"+total+"~COP");
                    }
                }).catch(err => {
                    console.log(err)
                })
            }
        },

        checkout: function(){
           if(this.totalCarrito >= 10300) {

               this.$swal({
                    text: '¿Estas seguro de realizar el pago de la compra?',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#1976D2',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Si, realicemos el pago!',
                    cancelButtonText: 'No'
                }).then((result) => {
                    if(result.value){
                        this.fleteCost(1);

                        
                    }
                });
            
            }else{
                this.$swal({
                    icon: 'error',
                    text: 'El pedido minimo es de 10.300 COP'
                })
            }
        },

        finishCheckout(){
            localStorage.removeItem('cart')
            localStorage.removeItem('carrito api')
            var user = JSON.parse(localStorage.getItem('user'))
            document.getElementById('formcheckout').submit();
            var checkout = ""
                checkout = checkout + "<PagXml>                                                          ";
                checkout = checkout + "   <CorXml>                                                       ";
                checkout = checkout + "      <TIPO>PARAMETRO</TIPO>                                      ";
                checkout = checkout + "      <PROCESO>0120</PROCESO>                                     "; //registro de usuario
                checkout = checkout + "      <SUCURSAL>02</SUCURSAL>                                  ";
                checkout = checkout + "      <TIPODOC>PEW</TIPODOC>                                      ";
                checkout = checkout + "      <DOCUMENTO>"+this.referenciaCodigo+"</DOCUMENTO>            ";            
                checkout = checkout + "      <USERID>"+user.CORREO+"</USERID>                     ";
                checkout = checkout + "      <PASSWORD>"+user.CLAVE+"</PASSWORD>                  ";    
                checkout = checkout + "      <ESTADO>checkout</ESTADO>                                ";    
                checkout = checkout + "   </CorXml>                                                      ";
                checkout = checkout + "</PagXml>                                                         ";
            axios({
                method: 'post',
                url: 'http://app.soldarco.com/Doom/Bootstrap/Servicios/sweb_carrito.asmx/SetPedido',
                data: "Parametros=" + checkout + "",
                config: { headers: {'Content-Type': 'multipart/form-data' }}
            }).then(response => {
                console.log(response);
            }).catch(error => {
                console.log(error)
            })
        },

        getLocalUser(){
            let data = (localStorage.getItem('user'))
            if(data){
                this.$store.commit('login/getUser', JSON.parse(data));
            }else{
                let data = {}
                localStorage.setItem('user', JSON.stringify(data))
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
    },
    computed: {
        products: {
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

        users: function(){
            if(this.$store.state.login.user){
                return this.$store.state.login.user
            }else{
                return {}
            }
        },

        subtotal: function(){
            let subtotal = 0
            if(this.products != null){
                for(let i = 0; i < this.products.length; i++){
                    subtotal += (parseInt(this.products[i].PRECIO.replace(',', '')) * parseInt(this.products[i].quantity))
                }
                return subtotal;
            }else{
                return subtotal;
            }
        },
    },
}
</script>