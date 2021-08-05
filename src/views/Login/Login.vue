<template>
    <div style="background-image: url('img/banner-3-mobile.png'); background-size: cover; background-repeat: no-repeat;">
        <v-container>
            <v-col md="9" class="ml-auto mr-auto mb-3 text-center">
                <v-col lg="6" md="6" sm="8" class="ml-auto mr-auto">
                    <form class="form">
                        <div class="card card-login card-hidden mb-3">
                            <div class="card-header card-header-primary text-center">
                                <h4 class="card-title"><strong>Login</strong></h4>
                            </div>
                            <div class="card-body">
                                <div class="bmd-form-group">
                                    <div class="input-group">                                        
                                        <v-text-field v-model="user.email" :rules="emailRules" style="font-size: 13px" prepend-icon="mdi-email" label="Ingresa tu Email" required></v-text-field>
                                    </div>
                                </div>
                                <div class="bmd-form-group">
                                    <div class="input-group">                                        
                                        <v-text-field type="password" v-model="user.password" :rules="emailRules" style="font-size: 13px" prepend-icon="mdi-key" label="Ingresa tu contraseña" required></v-text-field>
                                    </div>
                                </div>
                                <div class="bmd-form-group">
                                    <div class="input-group">                                        
                                        <v-btn large color="primary" class="btnLogin" @click="authenticateUsers">Ingresar</v-btn>
                                    </div>
                                </div>
                                <div class="bmd-form-group text-center">
                                    <div class="input-group registry-link" align="center" justify="center">    
                                        <span>¿Aun no tienes una cuenta?,</span><router-link to="/registry"><span> regístrate aqui...</span></router-link>                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </v-col>
            </v-col>
        </v-container>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data: () => ({
        user: { email: '', password: '' },
        emailRegex: /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
        userAuthenticate: [],

    }),
    methods: {
        authenticateUsers(){
            var loginUsers = ""
                loginUsers = loginUsers + "<PagXml>                                         ";
                loginUsers = loginUsers + "   <CorXml>                                      ";
                loginUsers = loginUsers + "      <TIPO>PARAMETRO</TIPO>                     ";
                loginUsers = loginUsers + "      <PROCESO>0113</PROCESO>                    ";
                loginUsers = loginUsers + "      <SUCURSAL>02</SUCURSAL>                ";
                loginUsers = loginUsers + "      <CORREO>"+this.user.email+"</CORREO>       ";
                loginUsers = loginUsers + "      <CLAVE>"+this.user.password+"</CLAVE>          ";
                loginUsers = loginUsers + "   </CorXml>                             ";
                loginUsers = loginUsers + "</PagXml>                               "; 
            
            axios.post('http://app.soldarco.com/Doom/Bootstrap/Servicios/sweb_carrito.asmx/SetData', "Parametros=" + loginUsers + "")
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
                if(this.userAuthenticate != null){
                    this.$swal({
                        icon: 'success',
                        text: 'Bienvenido otra vez.'
                    });
                    this.$store.commit('login/saveUser', this.userAuthenticate);
                    this.$router.push('/')
                }else{
                    this.$swal({
                        icon: 'error',
                        text: 'Los datos ingresados no son correctas'
                    })
                }
                
            }).catch(error => {
                this.$swal({
                    icon: 'error',
                    text: `${error}`
                })
            })
        }
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