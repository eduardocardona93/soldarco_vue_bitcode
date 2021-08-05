<template>
    <div style="background: #f9f9f9; padding-top: 50px; padding-bottom: 60px;">
        <v-container v-if="po">
            <div class="block-header">
                <h3 class="block-header__title">Productos</h3>
                <div class="block-header__divider"></div>
            </div>
            <v-col cols="12">
                <v-row align="center" justify="center">
                    <v-card v-for="(item, index) in po" :key="index" max-width="30%" class="shope" height="100%">
                        <img :src="'http://app.soldarco.com/Doom/Bootstrap/Servicios/sweb_blog_imagen.ashx?reg=' + item.registros" alt="" style="max-width: 100%">
                        <v-card-title>{{ item.NOMBRE }}</v-card-title>
                        <v-card-subtitle>Inventario: Disponible</v-card-subtitle>
                        <v-card-actions class="cal">
                            <a :href="'http://app.soldarco.com/Doom/Bootstrap/Servicios/sweb_blog_pdf.ashx?reg='+item.registros" target="_blank" download="Ficha_tecnica_cnc"><v-btn color="primary" x-large><v-icon >mdi-file</v-icon>Ficha Tecnica</v-btn></a>
                        </v-card-actions>
                    </v-card>
                </v-row>
            </v-col>
        </v-container>
        <v-container v-else>
            <no-data></no-data>
        </v-container>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data: () => ({
        po: [],
        param: '',
        poput: false
    }),
    mounted(){
        this.param = this.$route.params.id
        this.getProduct();

    },
    methods:{
        getProduct() {
            //================    MOSTRAR TODOS LOS PRODUCTOS EN LA TIENDA   ===============//    
            var Filtro = "COD_CATEGORIA=00033";
             var consulta = ""
                consulta = consulta + "<PagXml>                                                          ";
                consulta = consulta + "   <CorXml>                                                       ";
                consulta = consulta + "      <TIPO>PARAMETRO</TIPO>                                      ";
                consulta = consulta + "      <SUCURSAL>02</SUCURSAL>                                     ";
                consulta = consulta + "      <CODIGO>0137</CODIGO>                                      ";
                consulta = consulta + "      <REG>00001</REG>                                            ";
                consulta = consulta + "      <PAGINA>0</PAGINA>                            ";
                consulta = consulta + "      <PAGINAS>0</PAGINAS>                          ";
                consulta = consulta + "      <NOMBRE>PROCESO</NOMBRE>                      ";
                consulta = consulta + "      <FILTRO><![CDATA[" + Filtro + "]]></FILTRO>                 ";
                consulta = consulta + "   </CorXml>                                                      ";
                consulta = consulta + "</PagXml>                                                         ";
                
            axios.get('http://app.soldarco.com/Doom/Bootstrap/Servicios/sweb_carrito.asmx/FiltroBusquedaJson', { params: { Parametros: consulta } })
            .then(response => {
                var cadenaInicio = response.data;
                var inicio = 90;
                var subCadenainicio = cadenaInicio.substring(inicio);
                var cadena = subCadenainicio;
                var patron = "}</string>";
                var nuevoValor = "";
                var nuevaCadena = cadena.replace(patron,nuevoValor);
                var aux = JSON.parse(nuevaCadena);
                this.po = aux.Datos
                console.log(this.po)
            }).catch(error => {
                console.log(error)
            })   
            //================    MOSTRAR TODOS LOS PRODUCTOS EN LA TIENDA   ===============//  
        },
    }
}
</script>