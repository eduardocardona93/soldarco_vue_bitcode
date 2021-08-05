<template>
    <div>
        <v-container v-if="successCases != null">
            <v-breadcrumbs :items="items">
                <template v-slot:divider>
                    <v-icon>mdi-chevron-right</v-icon>
                </template>
            </v-breadcrumbs>
            <div class="block-header">
                <h3 class="block-header__title">Casos de exito</h3>
                <div class="block-header__divider"></div>
            </div>
            <v-row>
                <v-col md="3">
                    <reference-news></reference-news>
                </v-col>
                <v-col md="9">
                    <card-success-cases :successCases="successCases"></card-success-cases>
                </v-col>
            </v-row>
        </v-container>
        <v-container v-else>
            <no-data></no-data>
        </v-container>
    </div>
</template>
<script>
import CardSuccessCases from './Components/CardSuccessCases';
import ReferenceNews from '../News/components/ReferenceNews';
import axios from 'axios';
export default {
    components: { CardSuccessCases, ReferenceNews }, 
    data: () => ({
        items: [
            { text: 'inicio', disabled: false, href: '/' },
            { text: 'Noticias recientes', disable: true }
        ],
        successCases: []
    }),
    mounted(){
        this.getSuccessCases();
    },
    methods: {

        getSuccessCases(){
            this.Filtro = "CATEGORIA=00003";   
        var consulta = ""
            consulta = consulta + "<PagXml>                                            ";
            consulta = consulta + "   <CorXml>                                         ";
            consulta = consulta + "      <TIPO>PARAMETRO</TIPO>                        ";
            consulta = consulta + "      <CODIGO>0134</CODIGO>                         ";  /*ARCHIVO EN XML DENTRO DEL SISTEMA SOLDARCO*/
            consulta = consulta + "      <PAGINA>0</PAGINA>                            ";
            consulta = consulta + "      <CATEGORIA>00003</CATEGORIA>                  ";
            consulta = consulta + "      <PAGINAS>0</PAGINAS>                          ";
            consulta = consulta + "      <NOMBRE>PROCESO</NOMBRE>                      ";
            consulta = consulta + "      <ORDEN>1</ORDEN>                              ";
            consulta = consulta + "      <VALOR><![CDATA[]]></VALOR>                   ";  
            consulta = consulta + "      <FILTRO><![CDATA[" + this.Filtro + "]]></FILTRO>   "; /*FILTRO EN EJEMPLO SE ESTA PASANDO CATEGORIA NO TIENE MAS OPCIONES PASE VACIO SI NO QUIERE FILTRO*/
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
                this.successCases = aux.Datos
            }).catch(error => {
                console.log(error)
            })
        }
        
    }
}
</script>