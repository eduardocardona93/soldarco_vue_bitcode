<template>
    <div>
        <v-container v-if="cases != null">
            <div class="block-header">
                <h3 class="block-header__title">Casos de exito</h3>
                <div class="block-header__divider"></div>
            </div>
            <v-card>
                <v-carousel :hide-delimiters="true" :show-arrows="false" >
                    <v-carousel-item v-for="(image, i ) in JSON.parse(cases.IMG_ARCHIVOS)" :key="i" :src="'http://app.soldarco.com/Doom/Bootstrap/Servicios/sweb_blog_imagen.ashx?reg='+ image">
                    </v-carousel-item>
                </v-carousel>
                <v-card-title class="parafo">{{ cases.TITULO }}</v-card-title>
                <v-card-text class="voletin">{{ cases.NOM_USUARIO }} - {{ cases.FECHA }}</v-card-text>
                <v-card-subtitle class="seguro" v-html="decodeHtml(cases.TEXTO)"></v-card-subtitle>
                <v-card-actions>
                    <v-btn class="tobo" @click="redirectPdf(cases.AD_ARCHIVO)" style="color: #fff !important;"   width="100" color="red"><v-icon :light="true">mdi-file</v-icon>pdf</v-btn>
                </v-card-actions>
            </v-card>
        </v-container>
        <v-container v-else>
            <no-data></no-data>
        </v-container>
    </div>
</template>
<script>
import Axios from 'axios';
export default {
    data:() => ({
        filtro: '',
        param: '',
        cases: []
    }),
    mounted(){
        let param = this.$route.params.id
        this.param = param
        this.getCases();
    },
    methods: {
        getCases(){
            this.filtro = "REG="+this.param
            var consulta = ""
            consulta = consulta + "<PagXml>                                            ";
            consulta = consulta + "   <CorXml>                                         ";
            consulta = consulta + "      <TIPO>PARAMETRO</TIPO>                        ";
            consulta = consulta + "      <CODIGO>0134</CODIGO>                         ";  /*ARCHIVO EN XML DENTRO DEL SISTEMA SOLDARCO*/
            consulta = consulta + "      <PAGINA>0</PAGINA>                            ";
            consulta = consulta + "      <REG>"+ this.param +"</REG>                  ";
            consulta = consulta + "      <PAGINAS>0</PAGINAS>                          ";
            consulta = consulta + "      <NOMBRE>PROCESO</NOMBRE>                      ";
            consulta = consulta + "      <ORDEN>1</ORDEN>                              ";
            consulta = consulta + "      <VALOR><![CDATA[]]></VALOR>                   ";  
            consulta = consulta + "      <FILTRO><![CDATA[" + this.filtro + "]]></FILTRO>   "; /*FILTRO EN EJEMPLO SE ESTA PASANDO CATEGORIA NO TIENE MAS OPCIONES PASE VACIO SI NO QUIERE FILTRO*/
            consulta = consulta + "   </CorXml>                                        ";
            consulta = consulta + "</PagXml>                                           ";

            Axios.get('http://app.soldarco.com/Doom/Bootstrap/Servicios/sweb_carrito.asmx/FiltroBusquedaJson', { params: { Parametros: consulta } })
            .then(response => {
                var cadenaInicio = response.data;
                var inicio = 90;
                var subCadenainicio = cadenaInicio.substring(inicio);
                var cadena = subCadenainicio;
                var patron = "}</string>";
                var nuevoValor = "";
                var nuevaCadena = cadena.replace(patron,nuevoValor);
                var aux = JSON.parse(nuevaCadena);
                this.cases = aux.Datos
            }).catch(error => {
                console.log(error)
            })
        },

        decodeHtml(html){
            var txt = document.createElement("textarea");
            txt.innerHTML = html;
            console.log(txt.value)
            
            return txt.value
        },

        redirectPdf(archivo){
            window.location = 'http://app.soldarco.com/Doom/Bootstrap/Servicios/sweb_blog_imagen.ashx?reg='+archivo
        }
    }
}
</script>