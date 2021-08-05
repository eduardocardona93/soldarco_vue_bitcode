<template>
    <div>
        <v-container>
            <v-breadcrumbs :items="items">
                <template v-slot:divider>
                    <v-icon>mdi-chevron-right</v-icon>   
                </template>
            </v-breadcrumbs>
            <div class="block-header">
                <h3 class="block-header__title">Contáctanos</h3>
                <div class="block-header__divider"></div>
            </div>
            <v-col md="9" class="ml-auto mr-auto mb-3 text-center">
                <v-col lg="12" md="12" sm="12" class="ml-auto mr-auto">
                    <form class="form">
                        <div class="card card-login card-hidden mb-3">
                            <div class="card-header card-header-primary text-center">
                                <h4 class="card-title"><strong>Déjanos tu mensaje</strong></h4>
                            </div>
                            <div class="card-body">
                                 <v-row>
                                    <v-col md="12" class="input-contact">
                                        <div class="bmd-form-group">
                                            <div class="input-group">                                        
                                                <v-text-field v-model="user.name"  style="font-size: 13px" prepend-icon="mdi-account" label="Ingresa tu Nombre Completo" required></v-text-field>
                                            </div>
                                        </div>
                                    </v-col>
                                 </v-row>
                                <v-row>
                                    <v-col md="6" class="input-contact">
                                        <div class="bmd-form-group">
                                            <div class="input-group">                                        
                                                <v-text-field type="number" v-model="user.phone"  style="font-size: 13px" prepend-icon="mdi-cellphone-iphone" label="Ingresa tu Teléfono" required></v-text-field>
                                            </div>
                                        </div>
                                    </v-col>
                                     <v-col md="6" class="input-contact">
                                        <div class="bmd-form-group">
                                            <div class="input-group">                                        
                                                <v-text-field type="text" v-model="user.company_name" style="font-size: 13px" prepend-icon="mdi-store" label="Ingresa el nombre de empresa" required></v-text-field>
                                            </div>
                                        </div>  
                                    </v-col>
                                </v-row>
                                <v-row>
                                     <v-col md="6" class="input-contact">
                                        <div class="bmd-form-group">
                                            <div class="input-group">                                        
                                                <v-text-field type="text" v-model="user.address" style="font-size: 13px" prepend-icon="mdi-map-marker-radius" label="Ingresa la dirección" required></v-text-field>
                                            </div>
                                        </div> 
                                    </v-col>
                                    <v-col md="6" class="input-contact">
                                        <div class="bmd-form-group">
                                            <div class="input-group">                                        
                                                <v-text-field type="text" v-model="user.email" style="font-size: 13px" prepend-icon="mdi- mdi-email" label="Ingresa tu Email" required></v-text-field>
                                            </div>
                                        </div> 
                                    </v-col>
                                </v-row>
                                <v-row>
                                      <v-col md="6" class="input-contact">
                                        <div class="bmd-form-group">
                                            <div class="input-group">          
                                                <v-select :items="departaments" label="Departamento" @input="searchCities" item-text="NOMBRE" item-value="CODIGO" v-model="user.departament" prepend-icon="mdi-waze" style="font-size: 13px" required></v-select>
                                            </div>
                                        </div>
                                    </v-col>
                                        <v-col md="6" class="input-contact">
                                        <div class="bmd-form-group">
                                            <div class="input-group">          
                                                <v-select :items="cities" label="Ciudad" item-text="NOMBRE" item-value="NOMBRE" v-model="user.city" prepend-icon="mdi-waze" style="font-size: 13px" required></v-select>
                                            </div>
                                        </div>
                                    </v-col>
                                    
                                </v-row>
                              
                                <v-row>
                                    <v-col md="12">
                                        <v-textarea type="text" v-model="user.mensaje" style="font-size: 13px" prepend-icon="mdi-twitch" label="Deja tu mensaje" required></v-textarea>
                                    </v-col>
                                </v-row>
                                <div class="bmd-form-group">
                                    <div class="input-group">                                        
                                        <v-btn large color="primary" class="btnLogin" @click="contacto">Enviar</v-btn>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </v-col>
            </v-col>
        </v-container>
            <iframe
                src="https://www.google.com/maps/d/embed?mid=1OIX6dz5eTSdwoPGQIIrqzB74rfBa8dtC"
                style="width:100%; height: 450px; border:0;"
                frameborder="0"
                allowfullscreen>
            </iframe>
        </div>
</template>
<script>
import axios from 'axios';
export default {
    data: () => ({
        user: { email: '', password: '' },
        emailRegex: /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
        userAuthenticate: [],
        cities: [],
        departaments: [],
        items: [
            { text: 'Inicio', disabled: false, href: '/' },
            { text: 'Contacto', disabled: true }
        ],
    }),
     created(){
          this.searchDepartaments();
    },
    methods: {
          searchDepartaments(){
            var Filtro = "";
            var consulta = "";
                consulta = consulta + "<PagXml>                                ";
                consulta = consulta + "   <CorXml>                             ";
                consulta = consulta + "      <TIPO>PARAMETRO</TIPO>            ";
                consulta = consulta + "      <CODIGO>0138</CODIGO>             ";
                consulta = consulta + "      <PAGINA>0</PAGINA>                ";
                consulta = consulta + "      <PAGINAS>0</PAGINAS>              ";
                consulta = consulta + "      <NOMBRE>PROCESO</NOMBRE>          ";
                consulta = consulta + "      <ORDEN>1</ORDEN>                  ";
                consulta = consulta + "      <VALOR><![CDATA[EMPRESA.CONTACTOS]]></VALOR>   ";
                consulta = consulta + "      <FILTRO><![CDATA[" + Filtro + "]]></FILTRO>     ";
                consulta = consulta + "   </CorXml>                             ";
                consulta = consulta + "</PagXml>                               ";
            axios.post('http://app.soldarco.com/Doom/Bootstrap/Servicios/sweb_carrito.asmx/FiltroBusquedaJson', "Parametros=" + consulta + "")
                .then(response => {
                    var cadenainicio = response.data,
                    inicio = 90,
                    subCadenainicio = cadenainicio.substring(inicio);  
                    
                    var cadena = subCadenainicio,
                    patron = "}</string>",
                    nuevoValor = "",
                    nuevaCadena = cadena.replace(patron, nuevoValor);
                    var aux = JSON.parse(nuevaCadena);
                    this.departaments = aux.Datos;
                    console.log(this.departaments)
                }).catch(err => {
                    console.log(err)
                })
        },
        contacto(){
            if(!this.user.name){
                this.$swal({
                    icon: 'error', 
                    text: 'Ingresa tu nombre para poder hacer referencia en correos futuros.'
                })
            }else if(!this.user.phone){
                this.$swal({
                    icon: 'error', 
                    text: 'Ingresa un numero de telefono valido.'
                })
            }else if(!this.user.company_name){
                this.$swal({
                    icon: 'error', 
                    text: 'Ingresa el nombre correpto de tu compañia.'
                })
            }else if(!this.user.address){
                this.$swal({
                    icon: 'error', 
                    text: 'Ingresa una direccion valida.'
                })
            }else if(!this.user.city){
                 this.$swal({
                    icon: 'error', 
                    text: 'Ingresa una ciudad valida.'
                })
            }else if(!this.user.email){
                 this.$swal({
                    icon: 'error', 
                    text: 'Ingresa una correo valido.'
                })
            }else if(!this.user.mensaje){
                 this.$swal({
                    icon: 'error', 
                    text: 'Ingresa un mensaje valido.'
                })
            }else {
                var consulta = ""
            consulta = consulta + "<PagXml>                                                 ";        
            consulta = consulta + "   <Param>                                               ";
            consulta = consulta + "      <CAMPO>NOMBRE</CAMPO>                              ";
            consulta = consulta + "      <VALOR><![CDATA[" + this.user.name  + "]]></VALOR>         ";
            consulta = consulta + "   </Param>                                              ";
            consulta = consulta + "   <Param>                                               ";
            consulta = consulta + "      <CAMPO>CORREO</CAMPO>                              ";
            consulta = consulta + "      <VALOR><![CDATA[" + this.user.email  + "]]></VALOR>         ";
            consulta = consulta + "   </Param>                                              ";
            consulta = consulta + "   <Param>                                               ";
            consulta = consulta + "      <CAMPO>TELS</CAMPO>                                ";
            consulta = consulta + "      <VALOR><![CDATA[" + this.user.phone + "]]></VALOR>            ";
            consulta = consulta + "   </Param>                                              ";
            consulta = consulta + "   <Param>                                               ";
            consulta = consulta + "      <CAMPO>EMPRESA</CAMPO>                             ";
            consulta = consulta + "      <VALOR><![CDATA[" + this.user.company_name + "]]></VALOR>         ";
            consulta = consulta + "   </Param>                                              ";
            consulta = consulta + "   <Param>                                               ";
            consulta = consulta + "      <CAMPO>DIRECCION</CAMPO>                           ";
            consulta = consulta + "      <VALOR><![CDATA[" + this.user.address + "]]></VALOR>       ";
            consulta = consulta + "   </Param>                                              ";
            consulta = consulta + "   <Param>                                               ";
            consulta = consulta + "      <CAMPO>DEPARTAMENTO</CAMPO>                           ";
            consulta = consulta + "      <VALOR><![CDATA[" + this.user.departament.text + "]]></VALOR>       ";
            consulta = consulta + "   </Param>                                              ";
            
            consulta = consulta + "   <Param>                                               ";
            consulta = consulta + "      <CAMPO>CIUDAD</CAMPO>                              ";
            consulta = consulta + "      <VALOR><![CDATA[" + this.user.city + "]]></VALOR>     ";
            consulta = consulta + "   </Param>                                              ";                        
            consulta = consulta + "   <Param>                                               ";
            consulta = consulta + "      <CAMPO>PROCESO</CAMPO>                             ";
            consulta = consulta + "      <VALOR><![CDATA[0039]]></VALOR>                        ";
            consulta = consulta + "   </Param>                                              ";     
            consulta = consulta + "   <Param>                                               ";
            consulta = consulta + "      <CAMPO>RESPONDER</CAMPO>                               ";
            consulta = consulta + "      <VALOR><![CDATA[0057]]></VALOR>                        ";
            consulta = consulta + "   </Param>                                              ";                    
            consulta = consulta + "   <Param>                                               ";
            consulta = consulta + "      <CAMPO>MENSAJE</CAMPO>                             ";
            consulta = consulta + "      <VALOR><![CDATA[" + this.user.mensaje + "]]></VALOR>     ";
            consulta = consulta + "   </Param>                            ";            
            consulta = consulta + "   <Param>                             ";
            consulta = consulta + "      <CAMPO>PROYECTO</CAMPO>            ";
            consulta = consulta + "      <VALOR><![CDATA[" + "SOLDARCO" + "]]></VALOR>     ";
            consulta = consulta + "   </Param>                            ";
            consulta = consulta + "   <Param>                             ";
            consulta = consulta + "      <CAMPO>EMPRESA</CAMPO>            ";
            consulta = consulta + "      <VALOR><![CDATA[" + "02" + "]]></VALOR>     ";
            consulta = consulta + "   </Param>                            ";
            consulta = consulta + "   <Param>                            ";
            consulta = consulta + "      <CAMPO>DESTINOS</CAMPO>            ";
            consulta = consulta + "      <VALOR><![CDATA[" + "jeison.gutierrez@3dev.com.co,soporteventas1@soldarco.com" + "]]></VALOR>     ";
            consulta = consulta + "   </Param>                           "; 
            consulta = consulta + "</PagXml>                             ";
            axios({
                method: 'post',
                url: 'http://app.soldarco.com/doom/bootstrap/Servicios/AdmContactos.asmx/CrearContacto',
                data: "Parametros=" + consulta + "",
                config: { headers: {'Content-Type': 'multipart/form-data' }}
            })
            .then(response => {
                console.log(response)
                this.$swal({
                    icon: 'success',
                    text: 'Recibimos exitosamente tu solicitud'
                })    
                this.user.name = ''
                this.user.phone = ''
                this.user.company_name = ''
                this.user.address = ''
                this.user.city = ''
                this.user.email = ''
                this.user.mensaje = ''            
            })
            .catch(error => {
                console.log(error)
                
                this.$swal({
                    icon: 'error',
                    text: 'Hubo un error al recibir tu solicitud'
                }) 
            });
            }
        },

         searchCities(){
            var Filtro = " DANE_DEP = "+ this.user.departament ;
            var consulta = "";
                consulta = consulta + "<PagXml>                                ";
                consulta = consulta + "   <CorXml>                             ";
                consulta = consulta + "      <TIPO>PARAMETRO</TIPO>            ";
                consulta = consulta + "      <CODIGO>0139</CODIGO>             ";
                consulta = consulta + "      <PAGINA>0</PAGINA>                ";
                consulta = consulta + "      <PAGINAS>0</PAGINAS>              ";
                consulta = consulta + "      <NOMBRE>PROCESO</NOMBRE>          ";
                consulta = consulta + "      <ORDEN>1</ORDEN>                  ";
                consulta = consulta + "      <VALOR><![CDATA[EMPRESA.CONTACTOS]]></VALOR>   ";
                consulta = consulta + "      <FILTRO><![CDATA[" + Filtro + "]]></FILTRO>     ";
                consulta = consulta + "   </CorXml>                             ";
                consulta = consulta + "</PagXml>                               ";
            axios.post('http://app.soldarco.com/Doom/Bootstrap/Servicios/sweb_carrito.asmx/FiltroBusquedaJson', "Parametros=" + consulta + "")
                .then(response => {
                    var cadenainicio = response.data,
                    inicio = 90,
                    subCadenainicio = cadenainicio.substring(inicio);  
                    
                    var cadena = subCadenainicio,
                    patron = "}</string>",
                    nuevoValor = "",
                    nuevaCadena = cadena.replace(patron, nuevoValor);
                    var aux = JSON.parse(nuevaCadena);
                    this.cities = aux.Datos;
                    console.log(this.cities)
                }).catch(err => {
                    console.log(err)
                })
        },

    },
    computed: {
        emailRules: function(){
            if(this.user.email != '' && this.emailRegex.test(this.user.email) == true){
                return true;
            }else{
                return false;
            }
        }
    }
}
</script>