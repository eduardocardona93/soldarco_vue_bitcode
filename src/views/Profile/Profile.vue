<template>
    <div style="background-image: url('img/slides/slide-1-full.png'); background-size: cover; background-repeat: no-repeat;" ref="profile">
        <v-container>
            <v-breadcrumbs :items="items">
                <template v-slot:divider>
                    <v-icon>mdi-chevron-right</v-icon>
                </template>
            </v-breadcrumbs>
            <div class="block-header">
                <h3 class="block-header__title">Mi Perfil</h3>
                <div class="block-header__divider"></div>
            </div>
            <v-col md="9" class="ml-auto mr-auto mb-3 text-center">
                <v-col lg="12" md="12" sm="12" class="ml-auto mr-auto">
                    <form class="form">
                        <div class="card card-login card-hidden mb-3">
                            <div class="card-header card-header-primary text-center">
                                <h4 class="card-title"><strong>Mis datos</strong></h4>
                            </div>
                            <div class="card-body">
                                <v-row>
                                    <v-col md="6" class="input-contact">
                                        <div class="bmd-form-group">
                                            <div class="input-group">
                                                <v-text-field v-model="user.NOMBRES" style="font-size: 13px" prepend-icon="mdi-account" label="Ingresa tu Nombre" required disabled></v-text-field>
                                            </div>
                                        </div>
                                    </v-col>
                                    <v-col md="6" class="input-contact">
                                         <div class="bmd-form-group">
                                            <div class="input-group">                                        
                                                <v-text-field type="text" v-model="user.APELLIDOS"  style="font-size: 13px" prepend-icon="mdi-account-box" label="Ingresa tu Apellido" required disabled></v-text-field>
                                            </div>
                                        </div>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col md="6" class="input-contact">
                                        <div class="bmd-form-group">
                                            <div class="input-group">                                        
                                                <v-text-field type="text" v-model="user.CORREO" style="font-size: 13px" prepend-icon="mdi-email" label="Ingresa tu email" required></v-text-field>
                                            </div>
                                        </div>  
                                    </v-col>
                                    <v-col md="6" class="input-contact">
                                        <div class="bmd-form-group">
                                            <div class="input-group">                                        
                                                <v-text-field type="text" v-model="user.IDENTIFICACION" style="font-size: 13px" prepend-icon="mdi-account-box-outline" label="Numero de identificación" disabled></v-text-field>
                                            </div>
                                        </div> 
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col md="6" class="input-contact">
                                        <div class="bmd-form-group">
                                            <div class="input-group">                                        
                                                <v-text-field type="text" v-model="user.DIRECCION" style="font-size: 13px" prepend-icon="mdi-map-marker-radius" label="Ingresa tu dirección" required></v-text-field>
                                            </div>
                                        </div>  
                                    </v-col>
                                    <v-col md="6" class="input-contact">
                                        <div class="bmd-form-group">
                                            <div class="input-group">                                        
                                                <v-text-field type="number" v-model="user.TELEFONO" style="font-size: 13px" prepend-icon="mdi-cellphone-iphone" label="Ingresa tu teléfono" required></v-text-field>
                                            </div>
                                        </div> 
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col md="6" class="input-contact">
                                        <div class="bmd-form-group">
                                            <div class="input-group">   
                                                <v-select :items="departaments" label="Departamento" @input="searchCities" item-text="NOMBRE" item-value="CODIGO" v-model="user.DEPARTAMENTO" prepend-icon="mdi-waze" style="font-size: 13px" required></v-select>
                                            </div>
                                        </div>  
                                    </v-col>
                                    <v-col md="6" class="input-contact">
                                        <div class="bmd-form-group">
                                            <div class="input-group">                                        
                                                <v-text-field type="number" v-model="user.CODIGO_POSTAL" style="font-size: 13px" prepend-icon="mdi-cellphone-key" label="Ingresa tu codigo postal" required></v-text-field>
                                            </div>
                                        </div> 
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col md="6" class="input-contact">
                                        <div class="bmd-form-group">
                                            <div class="input-group">        
                                                <v-select :items="cities" label="Ciudad" item-text="NOMBRE" item-value="CODIGO" v-model="user.CIUDAD" prepend-icon="mdi-waze" style="font-size: 13px" required></v-select>
                                            </div>
                                        </div>  
                                    </v-col>
                                    <v-col md="6" class="input-contact">
                                        <div class="bmd-form-group">
                                            <div class="input-group">                                        
                                                <v-text-field type="text" v-model="user.EMPRESA" style="font-size: 13px" prepend-icon="mdi-domain" label="Ingresa tu empresa" required></v-text-field>
                                            </div>
                                        </div> 
                                    </v-col>
                                </v-row>
                                <v-row>
                                        <v-col md="6" class="input-contact">
                                             <div class="bmd-form-group">
                                                 <div class="input-group">                                        
                                                      <v-btn large color="red" class="btnLogin"  @click="PagHome">Regresar al inicio</v-btn>
                                                 </div>
                                             </div>
                                        </v-col>
                                          <v-col md="6" class="input-contact">
                                             <div class="bmd-form-group">
                                                 <div class="input-group">                                        
                                                      <v-btn large color="primary" class="btnLogin"  @click="UpdateUser">Actualizar informacion</v-btn>
                                                 </div>
                                             </div>
                                        </v-col>
                                        
                                </v-row>
                                 
                               
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
        user: {},
        items: [
            { text: 'Inicio', disable: false, href:'/' },
            { text: 'Perfil', disable: true },
        ],
        cities: [],
        departaments: []
    }),
    mounted() {
        let user = localStorage.getItem('user')
        if(user){
            user = JSON.parse(user)
            this.user = user
        }
        this.searchDepartaments();
        this.searchCities();
    },
    methods:{
        PagHome(){
            this.$router.push('/')
        },
        UpdateUser(){
            // let loader = this.$loading.show({ container: this.$refs.profile })
            var URL = "http://app.soldarco.com/Doom/Bootstrap/Servicios/sweb_carrito.asmx/SetData";
            var consulta = ""
                consulta = consulta + "<PagXml>                                                          ";
                consulta = consulta + "   <CorXml>                                                       ";
                consulta = consulta + "      <TIPO>PARAMETRO</TIPO>                                      ";
                consulta = consulta + "      <PROCESO>0142</PROCESO>                                     "; //registro de usuario
                consulta = consulta + "      <SUCURSAL>02</SUCURSAL>                                  ";
                consulta = consulta + "      <TIPO_CLIENTE>"+this.user.TIPO_CLIENTE+"</TIPO_CLIENTE>                                  ";
                consulta = consulta + "      <NOMBRES>"+this.user.NOMBRES+"</NOMBRES>                           ";
                consulta = consulta + "      <APELLIDOS>"+this.user.APELLIDOS+"</APELLIDOS>                  ";
                consulta = consulta + "      <IDENTIFICACION>"+this.user.IDENTIFICACION+"</IDENTIFICACION>                 ";
                consulta = consulta + "      <CORREO>"+ this.user.CORREO +"</CORREO>               ";
                consulta = consulta + "      <TELEFONO>"+ this.user.TELEFONO +"</TELEFONO>                            ";
                consulta = consulta + "      <DIRECCION>"+ this.user.DIRECCION +"</DIRECCION>         ";
                consulta = consulta + "      <DEPARTAMENTO>"+ this.user.DEPARTAMENTO +"</DEPARTAMENTO>                             ";
                consulta = consulta + "      <CIUDAD>"+ this.user.CIUDAD +"</CIUDAD>                                       ";
                consulta = consulta + "      <EMPRESA>"+ this.user.EMPRESA +"</EMPRESA>             ";
                consulta = consulta + "      <CODIGO_POSTAL>"+ this.user.CODIGO_POSTAL +"</CODIGO_POSTAL>                        ";
                consulta = consulta + "      <FLAG_FACTURA>1</FLAG_FACTURA>                              ";
                consulta = consulta + "      <REG>0</REG>                                                "; //si llega registro actualia       
                consulta = consulta + "      <VALOR><![CDATA[EMPRESA.CONTACTOS]]></VALOR>                ";
                consulta = consulta + "   </CorXml>                                                      ";
                consulta = consulta + "</PagXml>                                                         ";                                                     
            axios.post(URL, "Parametros=" + consulta + "")
            .then(response => {
                // loader.hide()
                 var cadenainicio = response.data,
                    inicio = 90,
                    subCadenainicio = cadenainicio.substring(inicio);  
                    
                    var cadena = subCadenainicio,
                    patron = "}</string>",
                    nuevoValor = "",
                    nuevaCadena = cadena.replace(patron, nuevoValor);
                    var aux = JSON.parse(nuevaCadena);
                    localStorage.setItem('user', JSON.stringify(aux.Datos))
                    console.log(aux)
            }).catch(error => {
                // loader.hide()
                console.log(error)
            })
        },

        searchDepartaments(){
            // let loader = this.$loading.show({ container: this.$refs.profile })
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
                    // loader.hide()
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
                    // loader.hide()
                    console.log(err)
                })
        },

        searchCities(){
            // let loader = this.$loading.show({ container: this.$refs.profile })
            var Filtro = " DANE_DEP = "+ this.user.DEPARTAMENTO ;
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
                // loader.hide()
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
                // loader.hide()
                console.log(err)
            })
        },
    }
}
</script>