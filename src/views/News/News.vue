<template>
    <div>
        <v-container v-if="news != null">
            <v-breadcrumbs :items="items">
                <template v-slot:divider>
                    <v-icon>mdi-chevron-right</v-icon>
                </template>
            </v-breadcrumbs>
            <div class="block-header">
                <h3 class="block-header__title">Noticias</h3>
                <div class="block-header__divider"></div>
            </div>
            <v-row>
                <v-col md="3">
                    <reference-news></reference-news>
                </v-col>
                <v-col md="9">
                    <card-news :news="news"></card-news>
                </v-col>
            </v-row>
        </v-container> 
        <v-container v-else>
            <no-data></no-data>
        </v-container>
    </div>
</template>
<script>
import CardNews from './components/CardNews';
import ReferenceNews from './components/ReferenceNews';
import axios from 'axios';
export default {
    components: { CardNews, ReferenceNews },
    data: () => ({
        news: [],
        items: [
            { text: 'Inicio', disabled: false, href: '/' },
            { text: 'Blog', disabled: true }
        ],
        Filtro: ''
    }),
    mounted(){
        this.getNews();
    },
    methods: {
        getNews(){
            this.Filtro = "CATEGORIA=00002";   
        var consulta = ""
            consulta = consulta + "<PagXml>                                            ";
            consulta = consulta + "   <CorXml>                                         ";
            consulta = consulta + "      <TIPO>PARAMETRO</TIPO>                        ";
            consulta = consulta + "      <CODIGO>0134</CODIGO>                         "; 
            consulta = consulta + "      <PAGINA>0</PAGINA>                            ";
            consulta = consulta + "      <CATEGORIA>00002</CATEGORIA>                  ";
            consulta = consulta + "      <PAGINAS>0</PAGINAS>                          ";
            consulta = consulta + "      <NOMBRE>PROCESO</NOMBRE>                      ";
            consulta = consulta + "      <ORDEN>1</ORDEN>                              ";
            consulta = consulta + "      <VALOR><![CDATA[]]></VALOR>                   ";  
            consulta = consulta + "      <FILTRO><![CDATA[" + this.Filtro + "]]></FILTRO>   ";
            consulta = consulta + "   </CorXml>                                        ";
            consulta = consulta + "</PagXml>                                           ";
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
                this.news = aux.Datos
                console.log(this.news)
            }).catch(error => {
                console.log(error)
            })
        }
    }
}
</script>