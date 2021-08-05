<template>
    <div style="background-image: url('img/banner-3-mobile.png'); background-size: cover; background-repeat: no-repeat;" ref="registry">
        <v-container>
            <v-col md="9" class="ml-auto mr-auto mb-3 text-center">
                <v-col lg="12" md="12" sm="12" class="ml-auto mr-auto">
                    <form class="form">
                        <div class="card card-login card-hidden mb-3">
                            <div class="card-header card-header-primary text-center">
                                <h4 class="card-title"><strong>Registro</strong></h4>
                            </div>
                            <div class="card-body">
                                <v-row>
                                    <v-col md="6" class="input-contact">
                                        <div class="bmd-form-group" >
                                            <div class="input-group">      
                                                <v-select v-model="user.clientType" style="font-size: 13px" :items="types" prepend-icon="mdi-account" label="Tipo de cliente" required></v-select>
                                            </div>
                                        </div>
                                    </v-col>
                                    <v-col md="6" class="input-contact">
                                        <div class="bmd-form-group">
                                            <div class="input-group">                                        
                                                <v-text-field v-model="user.document" style="font-size: 13px" prepend-icon="mdi-account-box" label="Identificación" required></v-text-field>
                                            </div>
                                        </div>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col md="6" class="input-contact">
                                        <div class="bmd-form-group">
                                            <div class="input-group">                                        
                                                <v-text-field v-model="user.names" style="font-size: 13px" prepend-icon="mdi-account" label="Nombres" required></v-text-field>
                                            </div>
                                        </div>
                                    </v-col>
                                    <v-col md="6" class="input-contact">
                                        <div class="bmd-form-group">
                                            <div class="input-group">                                        
                                                <v-text-field v-model="user.last_names" style="font-size: 13px" prepend-icon="mdi-account" label="Apellidos" required></v-text-field>
                                            </div>
                                        </div>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col md="6" class="input-contact">
                                        <div class="bmd-form-group">
                                            <div class="input-group">                                        
                                                <v-text-field v-model="user.email" style="font-size: 13px" prepend-icon="mdi-email" label="Correo electronico" required></v-text-field>
                                            </div>
                                        </div>
                                    </v-col>
                                    <v-col md="6" class="input-contact">
                                        <div class="bmd-form-group">
                                            <div class="input-group">                                        
                                                <v-text-field type="number" v-model="user.phone" style="font-size: 13px" prepend-icon="mdi-phone" label="Telefono" required></v-text-field>
                                            </div>
                                        </div>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col md="6" class="input-contact">
                                        <div class="bmd-form-group">
                                            <div class="input-group">                                        
                                                <v-text-field v-model="user.address" style="font-size: 13px" prepend-icon="mdi-waze" label="Dirección" required></v-text-field>
                                            </div>
                                        </div>
                                    </v-col>
                                    <v-col md="6" class="input-contact">
                                        <div class="bmd-form-group">
                                            <div class="input-group">          
                                                <v-text-field type="number" v-model="user.postalCode" style="font-size: 13px" prepend-icon="mdi-waze" label="Codigo Postal" required></v-text-field>
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
                                                <v-select :items="cities" label="Ciudad" item-text="NOMBRE" item-value="CODIGO" v-model="user.city" prepend-icon="mdi-waze" style="font-size: 13px" required></v-select>
                                            </div>
                                        </div>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col md="6" class="input-contact">
                                        <div class="bmd-form-group">
                                            <div class="input-group">                                        
                                                 <v-text-field type="password" v-model="user.password" style="font-size: 13px" prepend-icon="mdi-key" label="Contraseña" required></v-text-field>
                                            </div>
                                        </div>
                                    </v-col>
                                    <v-col md="6" class="input-contact">
                                        <div class="bmd-form-group">
                                            <div class="input-group">                                        
                                                <v-text-field type="password" v-model="user.repeat_password" style="font-size: 13px" prepend-icon="mdi-key" label="Repite la contraseña" required></v-text-field>
                                            </div>
                                        </div>
                                    </v-col>
                                </v-row>
                                  <div class="bmd-form-group text-center">
                                    <div class="input-group" align="center" justify="center">    
                                         <v-checkbox v-model="checkbox">
                                        <template v-slot:label>
                                            <div>
                                           
                                            <v-tooltip bottom>
                                                <template v-slot:activator="{ on }">
                                                <a
                                                    target="_blank"
                                                    href="documentos/Politicas_de_privacidad.pdf"
                                                    
                                                    @click.stop
                                                    v-on="on"
                                                >
                                                     Acepto términos y condiciones   
                                                </a>
                                                </template>
                                                  Clic para descargar
                                            </v-tooltip>
                                            </div>
                                               <div>
                                            <v-tooltip bottom>
                                                <template v-slot:activator="{ on }">
                                                <a
                                                    target="_blank"
                                                    href="documentos/Tratamiento_de_datos.pdf"
                                                    @click.stop
                                                    v-on="on"
                                                    style="padding-left:3px;"
                                                >
                                                    con el tratamiento de datos personales
                                                </a>
                                                </template>
                                                  Clic para descargar
                                            </v-tooltip>
                                            </div>
                                        </template>
                                        </v-checkbox>
                                    </div>
                                </div>
                                <div class="bmd-form-group">
                                    <div class="input-group">                                        
                                        <v-btn large color="primary" class="btnLogin" @click="registryUser">Registrarse</v-btn>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </v-col>
            </v-col>
        </v-container>
        <v-snackbar v-model="notification" :color="color" :right="x === 'right'" :timeout="timeout" :top="y === 'top'">
            {{ message }}
        <template v-slot:action="{ attrs }">
        <v-btn
          dark
          text
          v-bind="attrs"
          @click="notification = false"
        >
          x
        </v-btn>
      </template>
    </v-snackbar>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data: () => ({
        user: { clientType: '', document: '', names: '', last_names: '', email: '', phone: '', address: '', postalCode: '', departament: '', password: '' },
        emailRegex: /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
        userAuthenticate: [],
        types: ['Natural', 'Empresa'],
        x: 'right',
        y: 'top',
        message: '',
        color: '',
        notification: false,
        timeout: 0,
        cities: [],
        departaments: []
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

        registryUser(){
            if(!this.checkbox){
                this.notification = true;
                this.message = 'Debes aceptar los terminos y condiciones',
                this.color = 'error';
            }else if(!this.validatePassword){
                this.notification = true;
                this.message = 'Las contraseñas no coinciden',
                this.color = 'error';
            }else if(!this.validateEmail){
                this.notification = true;
                this.message = 'El correo no es valido',
                this.color = 'error';
            }else if(!this.user.city){
                this.notification = true;
                this.message = 'La ciudad es obligatoria',
                this.color = 'error';
            }else{
                var registryUser = ""
                    registryUser = registryUser + "<PagXml>                                                          ";
                    registryUser = registryUser + "   <CorXml>                                                       ";
                    registryUser = registryUser + "      <TIPO>PARAMETRO</TIPO>                                      ";
                    registryUser = registryUser + "      <PROCESO>0112</PROCESO>                                     "; //registro de usuario
                    registryUser = registryUser + "      <SUCURSAL>02</SUCURSAL>                                     ";
                    registryUser = registryUser + "      <TIPO_CLIENTE>"+ this.user.clientType +"</TIPO_CLIENTE>                       ";
                    registryUser = registryUser + "      <NOMBRES>"+ this.user.names +"</NOMBRES>                       ";
                    registryUser = registryUser + "      <APELLIDOS>"+ this.user.last_names +"</APELLIDOS>                   ";
                    registryUser = registryUser + "      <IDENTIFICACION>"+ this.user.document +"</IDENTIFICACION>    ";
                    registryUser = registryUser + "      <CORREO>"+ this.user.email +"</CORREO>                         ";
                    registryUser = registryUser + "      <TELEFONO>"+ this.user.phone +"</TELEFONO>                       ";
                    registryUser = registryUser + "      <DIRECCION>"+ this.user.address +"</DIRECCION>                 ";
                    registryUser = registryUser + "      <DEPARTAMENTO>"+ this.user.departament +"</DEPARTAMENTO>            ";
                    registryUser = registryUser + "      <CIUDAD>"+ this.user.city +"</CIUDAD>                          ";
                    registryUser = registryUser + "      <EMPRESA>"+ this.user.enterprise +"</EMPRESA>                     ";
                    registryUser = registryUser + "      <CODIGO_POSTAL>"+ this.user.postalCode +"</CODIGO_POSTAL>        ";
                    registryUser = registryUser + "      <FLAG_FACTURA>1</FLAG_FACTURA>                              ";
                    registryUser = registryUser + "      <CLAVE>"+ this.user.password +"</CLAVE>                            ";
                    registryUser = registryUser + "      <REG>0</REG>                                                "; //si llega registro actualia       
                    registryUser = registryUser + "      <VALOR><![CDATA[EMPRESA.CONTACTOS]]></VALOR>                ";
                    registryUser = registryUser + "   </CorXml>                                                      ";
                    registryUser = registryUser + "</PagXml>                                                         ";  
                
                axios.post('http://app.soldarco.com/Doom/Bootstrap/Servicios/sweb_carrito.asmx/SetData', "Parametros=" + registryUser + "")
                .then(response => {
                    var cadenainicio = response.data,
                    inicio = 90,
                    subCadenainicio = cadenainicio.substring(inicio);  
                    
                    var cadena = subCadenainicio,
                    patron = "}</string>",
                    nuevoValor = "",
                    nuevaCadena = cadena.replace(patron, nuevoValor);
                    var aux = JSON.parse(nuevaCadena);
                    this.userAuthenticate = aux.Datos;
                    this.$swal({
                        icon: 'success',
                        text: 'Bien!, ya eres parte de soldarco... Conocenos y compra con nosotros.'
                    })
                    this.$router.push('/login')
                })
            }
        }
    },
    computed: {
        validateEmail(){
            if(this.emailRegex.test(this.user.email)){
                return true;
            }else {
                return false;
            }
        },
        validatePassword: function(){
            if(this.user.password == this.user.repeat_password){
                return true;
            }else{
                return false;
            }
        }
    }
}
</script>