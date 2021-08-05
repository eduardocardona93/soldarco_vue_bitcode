<template>
    <div>
        <v-footer class="site__footer"> 
            <v-container>
                <div class="site-footer__widgets">
                    <v-row>
                        <v-col col="12" md="4" lg="5">
                            <div class="site-footer__widget footer-contacts">
                                <v-list class="widgetFooter" rounded>
                                    <v-subheader>Contáctanos</v-subheader>
                                    <v-list-item-icon>
                                        <v-icon style="margin-right: 10px">mdi-web</v-icon>
                                        <span>Carrera 4# 21-73 Cali, Colombia</span>
                                    </v-list-item-icon>
                                    <v-list-item-icon>
                                        <v-icon style="margin-right: 10px">mdi-web</v-icon>
                                        <span>Carrera 66a # 10-84 Bogotá, Colombia</span>
                                    </v-list-item-icon>
                                    <v-list-item-icon>
                                        <v-icon style="margin-right: 10px">mdi-email</v-icon>
                                        <a href="mailto:soporteventas1@soldarco.com">soporteventas1@soldarco.com</a>
                                    </v-list-item-icon>
                                    <v-list-item-icon>
                                        <v-icon style="margin-right: 10px">mdi-phone</v-icon>
                                        Cali: <a href="tel:+5728894597"> (572) 8894597</a>-
                                        Bogota: <a href="tel:+5714059680">(571) 4059680</a>
                                    </v-list-item-icon>
                                    <v-list-item-icon>
                                        <v-icon style="margin-right: 10px">mdi-clock</v-icon>
                                        Lunes a Viernes de 7:30am a 12:30pm  -  1:30pm a 6:00pm
                                    </v-list-item-icon>
                                </v-list>
                            </div>
                        </v-col>
                        <v-col col="12" md="4" lg="3">
                            <div class="site-footer__widget footer-links">
                                <v-list class="widgetFooter" rounded>
                                    <v-subheader>Información</v-subheader>
                                    <v-list-item-icon>
                                        <router-link to="/business" class="footer-links__link">                                                
                                            Empresa
                                        </router-link>
                                    </v-list-item-icon><br>
                                   <v-list-item-icon>
                                        <a href="documentos/Informacion_de_envios.pdf" target="_blank">Información Envíos</a>
                                    </v-list-item-icon><br>
                                    <v-list-item-icon>
                                        <a href="documentos/Politicas_de_privacidad.pdf" target="_blank">Políticas de Privacidad</a>
                                    </v-list-item-icon><br>
                                    <v-list-item-icon>
                                        <router-link to="/contact-us" class="footer-links__link">                                                
                                            Contáctanos
                                        </router-link>
                                    </v-list-item-icon>
                                </v-list>
                            </div>
                        </v-col>
                        <v-col col="12" md="4" lg="4">
                            <div class="site-footer__widget footer-newsletter">
                                <v-list rounded class="widgetFooter">
                                    <v-subheader>Noticias</v-subheader>
                                        <div class="footer-newsletter__text">Queremos informarte de lo ultimo en tecnología y todas las novedades del mercado, inscríbete para estar al tanto de toda la información.</div>
                                            <form class="footer-newsletter__form"> 
                                                <v-text-field label="Ingresa Tu Email" v-model="email.registerFormEmail" color="primary"></v-text-field>
                                                <v-btn @click="ReciveEnvioContacto()">Suscríbete</v-btn>
                                            </form>
                                            <br>
                                            <div class="footer-newsletter__text footer-newsletter__text--social">Síguenos en nuestras redes sociales</div>
                                            <v-list class="footer-newsletter__social-links widgetFooter">
                                                <v-list-item class="footer-newsletter__social-link footer-newsletter__social-link--facebook">
                                                    <a href="https://www.facebook.com/soldarcooficial" target="_blank">
                                                        <v-icon>mdi-facebook</v-icon>
                                                    </a>
                                                </v-list-item>
                                                <v-list-item class="footer-newsletter__social-link footer-newsletter__social-link--linkedin">
                                                    <a href="https://www.linkedin.com/company/soldarco/" target="_blank">
                                                        <v-icon>mdi-linkedin</v-icon>

                                                    </a>
                                                </v-list-item>
                                                <v-list-item class="footer-newsletter__social-link footer-newsletter__social-link--youtube">
                                                    <a href="https://www.youtube.com/channel/UC_PeRcRi2sf2R1_gahX3xtg/featured?view_as=subscriber" target="_blank">
                                                        <v-icon>mdi-youtube</v-icon>
                                                    </a>
                                                </v-list-item>
                                                <v-list-item class="footer-newsletter__social-link footer-newsletter__social-link--instagram">
                                                    <a href="https://www.instagram.com/soldarcooficial/" target="_blank">
                                                        <v-icon>mdi-instagram</v-icon>
                                                    </a>
                                                </v-list-item>
                                        </v-list>
                                </v-list>
                            </div>
                        </v-col>
                    </v-row>
                </div>
            </v-container>
        </v-footer>
        <v-bottom-navigation color="indigo" class="justify-end">
            <img src="../../assets/img/payments.png" class="metodos_de_pago">
        </v-bottom-navigation>
    </div>
</template>
<script>
import axios from "axios";
export default {
    name: 'FooterComponent',
    data: () => ({
        email: {  registerFormEmail: '' },
        emailRegex: /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,           
    }),
        
    methods: {   
        ReciveEnvioContacto() {
            if(!this.validateEmail){
                this.$swal({
                    icon: 'warning',
                    text: 'Por favor indicanos un correo valido',
                });
            }else{
                this.EviarContacto(
                    this.email.registerFormEmail  );
            }
        },
        
        EviarContacto(correo) {
            var consulta = ""
            consulta = consulta + "<PagXml>                                             ";
            consulta = consulta + "   <Param>                                           ";
            consulta = consulta + "      <CAMPO>CORREO</CAMPO>                          ";
            consulta = consulta + "      <VALOR><![CDATA[" +  correo + "]]></VALOR>     ";
            consulta = consulta + "   </Param>                                          ";
            consulta = consulta + "   <Param>                                           ";
            consulta = consulta + "      <CAMPO>PROCESO</CAMPO>                         ";
            consulta = consulta + "      <VALOR><![CDATA[0039]]></VALOR>                ";
            consulta = consulta + "   </Param>                                          ";     
            consulta = consulta + "   <Param>                                           ";
            consulta = consulta + "      <CAMPO>RESPONDER</CAMPO>                       ";
            consulta = consulta + "      <VALOR><![CDATA[0057]]></VALOR>                ";
            consulta = consulta + "   </Param>                                          ";        
            consulta = consulta + "   <Param>                                           ";
            consulta = consulta + "      <CAMPO>MENSAJE</CAMPO>                         ";
            consulta = consulta + "      <VALOR><![CDATA[ " + " requiero informacion de productos en mi correo electronico" + " ]]></VALOR>     ";
            consulta = consulta + "   </Param>                                          ";
            consulta = consulta + "   <Param>                                           ";
            consulta = consulta + "      <CAMPO>PROYECTO</CAMPO>                        ";
            consulta = consulta + "      <VALOR><![CDATA[" + "SOLDARCO" + "]]></VALOR>  ";
            consulta = consulta + "   </Param>                                          ";
            consulta = consulta + "   <Param>                                           ";
            consulta = consulta + "      <CAMPO>EMPRESA</CAMPO>                         ";
            consulta = consulta + "      <VALOR><![CDATA[" + "02" + "]]></VALOR>        ";
            consulta = consulta + "   </Param>                            				";
            consulta = consulta + "   <Param>                            				";
            consulta = consulta + "      <CAMPO>DESTINOS</CAMPO>            			";
            consulta = consulta + "      <VALOR><![CDATA[" + "jeison.gutierrez@3dev.com.co,soporteventas1@soldarco.com" + "]]></VALOR>     ";
            consulta = consulta + "   </Param>                           "; 
            consulta = consulta + "</PagXml>                             ";
            axios({
                method: 'post',
                url: 'http://app.soldarco.com/doom/bootstrap/Servicios/AdmContactos.asmx/CrearContacto',
                data: "Parametros=" + consulta + "",
                config: { headers: {'Content-Type': 'multipart/form-data' }}
            })
            /* limpia el campo*/
            this.email.registerFormEmail == ""
            /*notificacion exitosa */
            this.$swal({
                icon: 'success',
                text: 'Su solicitud ha sido enviada correctamente...',
            });
        }
    },
    computed: {
        validateEmail(){
            if(this.emailRegex.test(this.email.registerFormEmail)){
                return true;
            }else {
                return false;
            }
        }
    }
}
    
             
</script>
<style>
   
    .metodos_de_pago {
        width: 246px;
        height: 24px;
        margin-top: 15px;
        margin-right: 75px;
    }

    .site__footer {
        background: #f9f9f9;
    }

    .material-icons {
        margin-right: 10px;
    }

    .v-list-item__icon {
        align-self: flex-start;
        margin: 4px 0 !important;
    }

    .theme--light.v-subheader {
        color: rgb(6, 6, 6) !important;
        font-weight: bold !important;
        font-size: 25px;
        margin-left: -14px;
    }

    .widgetFooter {
        color: rgba(0,0,0,.87);
        background: transparent !important;
    }

    .v-list--nav .v-list-item:not(:last-child):not(:only-child), .v-list--rounded .v-list-item:not(:last-child):not(:only-child) {
        margin-bottom: 0px !important;
        margin-right: -180px !important;
    }
    
    
</style>