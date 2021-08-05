<template>
    <div style="background: #f9f9f9; padding-top: 50px; padding-bottom: 60px;">
        <v-container v-if="po">
            <div class="block-header">
                <h3 class="block-header__title">Productos</h3>
                <div class="block-header__divider"></div>
            </div>
            <v-col cols="12">
                <div>
                    {{ po }}
                </div>
                <!-- <v-row align="center" justify="center">
                    <v-card v-for="(item, index) in po" :key="index" max-width="30%" class="shope" height="100%">
                        <img :src="'http://app.soldarco.com/Doom/Bootstrap/Servicios/sweb_blog_imagen.ashx?reg=' + item.registros" alt="" style="max-width: 100%">
                        <v-card-title>{{ item.NOMBRE }}</v-card-title>
                        <v-card-subtitle>Inventario: Disponible</v-card-subtitle>
                        <v-card-actions class="cal">
                            <a v-if="item.RELACION > 0" :href="'http://app.soldarco.com/Doom/Bootstrap/Servicios/sweb_blog_pdf.ashx?reg='+item.RELACION" target="_blank" download="Ficha_tecnica_cnc"><v-btn color="primary" x-large><v-icon >mdi-file</v-icon>Ficha Tecnica</v-btn></a>
                        </v-card-actions>
                    </v-card>
                </v-row> -->
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
    created(){
        this.param = this.$route.params.id
        this.getProduct();

    },
    methods:{
        getProduct() {
            //================    MOSTRAR TODOS LOS PRODUCTOS EN LA TIENDA   ===============//    
            var consulta = ""
                consulta = consulta + "<PagXml>                                ";
                consulta = consulta + "   <CorXml>                             ";
                consulta = consulta + "      <TIPO>PARAMETRO</TIPO>            ";
                consulta = consulta + "      <CODIGO>0162</CODIGO>             ";
                consulta = consulta + "      <NOMBRE>PROCESO</NOMBRE>          ";
                consulta = consulta + "      <ORDEN>1</ORDEN>                  ";
                consulta = consulta + "      <VALOR><![CDATA[]]></VALOR>   ";
                consulta = consulta + "      <FILTRO><![CDATA[BLOG_CODIGO=" +  this.param +"]]></FILTRO>     ";
                consulta = consulta + "   </CorXml>                             ";
                consulta = consulta + "</PagXml>                               ";
            const params = new URLSearchParams()
            params.append('Parametros', consulta)


            const config = {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Accept' : '*/*'
                }
            }
            const url = 'http://app.soldarco.com/Doom/Bootstrap/Datos/WebDatos.asmx/FiltroBusqueda'
            // const url = 'http://localhost:47646/GestionMovil/Datos/WebDatos.asmx/FiltroBusqueda'
            console.log(consulta)
            axios.post(url, params.toString(),config)
            .then(response => {
                var cadenaInicio = response.data;
                var nuevaCadena = cadenaInicio.replace(/<\?xml version="1.0" encoding="utf-8"\?>/,"")
                                              .replace(/<string xmlns="http:\/\/tempuri.org\/>/,"")
                                              .replace(/<\/string>/,"");

                var doc = new DOMParser().parseFromString(nuevaCadena, "text/html").documentElement.textContent.toString();
                                

                this.po = new DOMParser().parseFromString(doc, "text/html").documentElement.textContent 
                console.log(this.po)
            }).catch(error => {
                console.log(error)
            })   
            //================    MOSTRAR TODOS LOS PRODUCTOS EN LA TIENDA   ===============//  
        },
    }
}
</script>