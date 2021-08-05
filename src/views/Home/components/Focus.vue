<template>
    <div style="background: #f9f9f9; padding-top: 50px; padding-bottom: 60px;">
        <v-container>
            <div class="block-header">
                <h3 class="block-header__title">Nuestros Enfoques </h3>
                <div class="block-header__divider"></div>
            </div>
            <v-col cols="12">
                <v-row align="center" justify="center">
                    <v-card max-width="20%" class="carta">
                        <v-card-title>Automatización</v-card-title>
                        <div class="dividerFilter"></div>
                        <v-list>
                            <v-list-item>
                                <v-icon>mdi-chevron-right</v-icon>
                                <router-link to="/product-menu/00001">
                                        Mesas de corte CNC
                                </router-link>
                            </v-list-item>
                            <v-list-item>
                                <v-icon>mdi-chevron-right</v-icon>
                                <router-link to="/product-menu/00004">
                                        Sistema de plasma alta productividad
                                </router-link>
                            </v-list-item>
                            <v-list-item>
                                <v-icon>mdi-chevron-right</v-icon>
                                <router-link to="/product-menu/00005" style="margin-top: 10px;">
                                        Sistema de plasma alta definición HPR
                                </router-link>
                            </v-list-item>
                            <v-list-item>
                                <v-icon>mdi-chevron-right</v-icon>
                                <router-link to="/product-menu/00006" style="margin-top: 10px;">
                                    Sistema de plasma x-Definición XPR
                                </router-link>
                            </v-list-item>
                            <v-list-item>
                                <v-icon>mdi-chevron-right</v-icon>
                                <router-link to="/product-menu/00007" style="margin-top: 10px;">
                                    Mesas de corte láser de fibra
                                </router-link>
                            </v-list-item>
                            <v-list-item>
                                <v-icon>mdi-chevron-right</v-icon>
                                <router-link to="/product-menu/00008">
                                    Celdas robóticas
                                </router-link>
                            </v-list-item>
                        </v-list>
                        <div class="card__actions" align="center" justify="center">
                            <v-dialog v-model="poput" max-width="100%">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn color="primary" v-bind="attrs" v-on="on">Ver más</v-btn>
                                </template>
                                <v-card align="center" justify="center">
                                     <v-card-title class="hiper">Automatizacion
                                            <v-spacer></v-spacer>
                                        <span style="cursor: pointer" @click="poput = false;cerrar()">X</span>
                                     </v-card-title>

                                    <v-divider></v-divider>
                                    <v-card-text class="solda" align="center" justify="center">Nuestros 33 años de experiencia te garantizan soluciones eficaces en soldadura y corte. Además de contar con un personal calificado para las necesidades de nuestros clientes, hemos implementado la línea la transmisión de potencia que se complementa con la industria. Soldarco te brinda los mejores productos de tecnología para que tu trabajo sea más eficiente y ahorres en tus procesos de producción con un mejor costo beneficio. ¡Contáctanos para mejorar tu productividad!.</v-card-text>
                                    <iframe  id="iframe" width="90%" height="530" style="margin-bottom: 30px;" src="https://www.youtube.com/embed/vj6Y00LOf3Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                   <v-card-actions>
                                         <v-spacer></v-spacer>
                                      <v-btn style="background:red" text @click="poput = false;cerrar()">
                                          <h4 style="color:white">Cerrar</h4>
                                      </v-btn>
                                    </v-card-actions>
                                </v-card>
                               
                            </v-dialog>
                        </div>
                    </v-card>
                    <v-card max-width="20%" class="carta">
                        <v-card-title>Consumibles para <br> soldaduras y corte</v-card-title>
                        <div class="dividerFilter1"></div>
                        <v-list>
                            <v-list-item>
                                <v-icon>mdi-chevron-right</v-icon>
                                <router-link to="/product-menu/00019">
                                    Consumibles plasma
                                </router-link>
                            </v-list-item>
                            <v-list-item>
                                <v-icon>mdi-chevron-right</v-icon>
                                <router-link to="/product-menu/00020">
                                    Consumibles MIG/MAH
                                </router-link>
                            </v-list-item>
                            <v-list-item>
                                <v-icon>mdi-chevron-right</v-icon>
                                <router-link to="/product-menu/00021">
                                    Consumibles TIG
                                </router-link>
                            </v-list-item>
                            <v-list-item>
                                <v-icon>mdi-chevron-right</v-icon>
                                <router-link to="/product-menu/00023">
                                    Consumibles fluxcored
                                </router-link>
                            </v-list-item>
                            <v-list-item>
                                <v-icon>mdi-chevron-right</v-icon>
                                <router-link to="/product-menu/00024">
                                    Consumibles láser
                                </router-link>
                            </v-list-item>
                            <v-list-item>
                                <v-icon>mdi-chevron-right</v-icon>
                                <router-link to="/menuProduct/00025">
                                    Consumibles oxicorte
                                </router-link>
                            </v-list-item>
                            <v-list-item>
                                <v-icon>mdi-chevron-right</v-icon>
                                <router-link to="/product-menu/00026">
                                    Consumibles arco sumergido
                                </router-link>
                            </v-list-item>
                        </v-list>
                        <div class="card__actions" align="center" justify="center">
                            <v-dialog v-model="poput_1" max-width="100%">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn color="primary" v-bind="attrs" v-on="on">Ver más</v-btn>
                                </template>
                                <v-card align="center" justify="center">
                                     <v-card-title class="hiper">Consumibles para soldaduras y corte
                                            <v-spacer></v-spacer>
                                        <span style="cursor: pointer" @click="poput_1 = false;cerrar()">X</span>
                                     </v-card-title>
                                    <v-divider></v-divider>
                                    <v-card-text class="solda" align="center" justify="center">Nuestros 33 años de experiencia te garantizan soluciones eficaces en soldadura y corte. Además de contar con un personal calificado para las necesidades de nuestros clientes, hemos implementado la línea la transmisión de potencia que se complementa con la industria. Soldarco te brinda los mejores productos de tecnología para que tu trabajo sea más eficiente y ahorres en tus procesos de producción con un mejor costo beneficio. ¡Contáctanos para mejorar tu productividad!.</v-card-text>
                                    <iframe  id="iframe" width="90%" height="500" src="https://www.youtube.com/embed/tynUBL1sv-U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                      <v-card-actions>
                                         <v-spacer></v-spacer>
                                      <v-btn style="background:red" text @click="poput_1 = false;cerrar()">
                                          <h4 style="color:white">Cerrar</h4>
                                      </v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                        </div>
                    </v-card>
                    <v-card max-width="20%" class="carta">
                        <v-card-title>Sistema de corte <br> con plasma</v-card-title>
                        <div class="dividerFilter2"></div>
                        <v-list>
                            <v-list-item>
                                <v-icon>mdi-chevron-right</v-icon>
                                <router-link to="/product-menu/00015" style="margin-top: 12px;">
                                    Plasma X definición XPR
                                </router-link>
                            </v-list-item>
                            <v-list-item>
                                <v-icon>mdi-chevron-right</v-icon>
                                <router-link to="/product-menu/00016" style="margin-top: 10px;">
                                    Plasma de alta definición HPR
                                </router-link>
                            </v-list-item>
                            <v-list-item>
                                <v-icon>mdi-chevron-right</v-icon>
                                <router-link to="/product-menu/00016" style="margin-top: 10px;">
                                    Plasma de alta productividad
                                </router-link>
                            </v-list-item>
                            <v-list-item>
                                <v-icon>mdi-chevron-right</v-icon>
                                <router-link to="/product-menu/00016">
                                    Plasma convencional
                                </router-link>
                            </v-list-item>
                        </v-list>
                        <div class="card__actions" align="center" justify="center">
                            <v-dialog v-model="poput_2" max-width="100%">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn color="primary" v-bind="attrs" v-on="on">Ver más</v-btn>
                                </template>
                                <v-card align="center" justify="center">
                                     <v-card-title class="hiper">Sistema de corte con plasma
                                            <v-spacer></v-spacer>
                                        <span style="cursor: pointer" @click="poput_2 = false;cerrar()">X</span>
                                     </v-card-title>
                                    <v-divider></v-divider>
                                    <v-card-text class="solda" align="center" justify="center">Nuestros 33 años de experiencia te garantizan soluciones eficaces en soldadura y corte. Además de contar con un personal calificado para las necesidades de nuestros clientes, hemos implementado la línea la transmisión de potencia que se complementa con la industria. Soldarco te brinda los mejores productos de tecnología para que tu trabajo sea más eficiente y ahorres en tus procesos de producción con un mejor costo beneficio. ¡Contáctanos para mejorar tu productividad!.</v-card-text>
                                    <iframe width="90%" id="iframe" height="500" src="https://www.youtube.com/embed/4nMYmBkqE_U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    <v-card-actions>
                                         <v-spacer></v-spacer>
                                      <v-btn style="background:red" text @click="poput_2 = false;cerrar()">
                                          <h4 style="color:white">Cerrar</h4>
                                      </v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                        </div>
                    </v-card>
                    <v-card max-width="20%" class="carta">
                        <v-card-title>Servicio técnico</v-card-title>
                        <div class="dividerFilter3"></div>
                        <v-list>
                            <v-list-item>
                                <v-icon>mdi-chevron-right</v-icon>
                                <router-link to="/product-menu/00012" style="margin-top: 12px;">
                                    Soporte técnico de mesas de corte
                                </router-link>
                            </v-list-item>
                            <v-list-item>
                                <v-icon>mdi-chevron-right</v-icon>
                                <router-link to="/product-menu/00013" style="margin-top: 10px;">
                                    Soporte técnico de equipos
                                </router-link>
                            </v-list-item>
                            <v-list-item>
                                <v-icon>mdi-chevron-right</v-icon>
                                <router-link to="/product-menu/00014">
                                    Soldadura aplicada
                                </router-link>
                            </v-list-item>
                        </v-list>
                        <div class="card__actions" align="center" justify="center">
                            <v-dialog v-model="poput_3" max-width="100%">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn color="primary" v-bind="attrs" v-on="on">Ver más</v-btn>
                                </template>
                                <v-card align="center" justify="center">
                                       <v-card-title class="hiper">Servicio tecnico
                                            <v-spacer></v-spacer>
                                        <span style="cursor: pointer" @click="poput_3 = false;cerrar()">X</span>
                                     </v-card-title>
                                    <v-divider></v-divider>
                                    <v-card-text class="solda" align="center" justify="center">Nuestros 33 años de experiencia te garantizan soluciones eficaces en soldadura y corte. Además de contar con un personal calificado para las necesidades de nuestros clientes, hemos implementado la línea la transmisión de potencia que se complementa con la industria. Soldarco te brinda los mejores productos de tecnología para que tu trabajo sea más eficiente y ahorres en tus procesos de producción con un mejor costo beneficio. ¡Contáctanos para mejorar tu productividad!.</v-card-text>
                                    <iframe width="90%" id="iframe" height="500" src="https://www.youtube.com/embed/-CaqzsH_YZQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                  <v-card-actions>
                                         <v-spacer></v-spacer>
                                      <v-btn style="background:red" text @click="poput_3 = false;cerrar()">
                                          <h4 style="color:white">Cerrar</h4>
                                      </v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                        </div>
                    </v-card>
                    <v-card max-width="20%" class="carta">
                        <v-card-title>Recubrimientos <br> duros</v-card-title>
                        <div class="dividerFilter4"></div>
                        <v-list>
                            <v-list-item>
                                <v-icon>mdi-chevron-right</v-icon>
                                <router-link to="/product-menu/0009" style="margin-top: 12px;">
                                    Alambres tubulares y metalcored
                                </router-link>
                            </v-list-item>
                            <v-list-item>
                                <v-icon>mdi-chevron-right</v-icon>
                                <router-link to="/product-menu/00010" style="margin-top: 10px;">
                                    Electrodos tubulares para soldadura normal
                                </router-link>
                            </v-list-item>
                            <v-list-item>
                                <v-icon>mdi-chevron-right</v-icon>
                                <router-link to="/product-menu/00011">
                                    Soldaduras aplicadas
                                </router-link>
                            </v-list-item>
                        </v-list>
                        <div class="card__actions" align="center" justify="center">
                            <v-dialog v-model="poput_4" max-width="100%">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn color="primary" v-bind="attrs" v-on="on">Ver más</v-btn>
                                </template>
                                <v-card align="center" justify="center">
                                    <v-card-title class="hiper">Recubrimientos duros
                                            <v-spacer></v-spacer>
                                        <span style="cursor: pointer" @click="poput_4 = false;cerrar()">X</span>
                                     </v-card-title>
                                    <v-divider></v-divider>
                                    <v-card-text class="solda" align="center" justify="center">Nuestros 33 años de experiencia te garantizan soluciones eficaces en soldadura y corte. Además de contar con un personal calificado para las necesidades de nuestros clientes, hemos implementado la línea la transmisión de potencia que se complementa con la industria. Soldarco te brinda los mejores productos de tecnología para que tu trabajo sea más eficiente y ahorres en tus procesos de producción con un mejor costo beneficio. ¡Contáctanos para mejorar tu productividad!.</v-card-text>
                                    <iframe width="90%" id="iframe" height="500" src="https://www.youtube.com/embed/pQJDKxXW540" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                 <v-card-actions>
                                         <v-spacer></v-spacer>
                                      <v-btn style="background:red" text @click="poput_4 = false;cerrar()">
                                          <h4 style="color:white">Cerrar</h4>
                                      </v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                        </div>
                    </v-card>
                </v-row>
            </v-col>
        </v-container>
    </div>
</template>
<script>
export default {
    data: () => ({
        poput: false,
        poput_1: false,
        poput_2: false,
        poput_3: false,
        poput_4: false

        
    }),

    methods: {
    cerrar() {
      var iframes = document.getElementById("iframe");
      iframes.remove();
    }
  }

}
 
</script>