<template>
  <div>
    <v-carousel
      height="650"
      :hide-delimiters="true"
      :cycle="true"
      interval="8000"
      :show-arrows="false"
      hide-delimiter-background
    >
      <v-carousel-item
        v-for="(item, i) in slides"
        :key="i"
        reverse-transition="fade-transition"
        transition="fade-transition"
        :src="item.image"
      >
        <v-container class="fill-height" fluid>
          <v-row align="center" justify="center">
            <v-col class="text-center">
              <div>
                <h1 class="title-slider">{{ item.title }}</h1>
              </div>
              <div class="align-end textDescription">
                <span>{{ item.text }}</span>
              </div>
              <div class="buttonMoreView">
                <v-dialog v-model="poput1" v-if="item.id == 1" @click:outside="cerrar(item.id, )"  max-width="100%" >
                  <template v-slot:activator="{ on }">
                    <v-btn color="primary" v-on="on">{{
                      item.textButton
                    }}</v-btn>
                  </template>
                  <v-card class="yotu" align="center" justify="center">
                    <v-card-title class="hiper"
                      >{{ item.modalTitle }}
                      <v-spacer></v-spacer>
                      <span v-if="item.id == 1" style="cursor: pointer" @click="poput1 = false; cerrar()">X</span>
                      </v-card-title>

                    <v-divider></v-divider>
                    <v-card-text
                      class="solda"
                      align="center"
                      justify="center"
                      >{{ item.modalDescription }}</v-card-text
                    >
                    <iframe
                      id="iframe"
                      width="80%"
                      height="530px"
                      style="margin-bottom: 30px;"
                      :src="item.iframe"
                      frameborder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                      class="video"
                    ></iframe>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                                <v-btn style="background:red" color="error" text @click="poput1 = false; cerrar()">
                                    <h4 style="color:white">Cerrar</h4>
                                </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
                <v-dialog v-model="poput2" v-if="item.id == 2" max-width="100%">
                  <template v-slot:activator="{ on }">
                    <v-btn color="primary" v-on="on">{{
                      item.textButton
                    }}</v-btn>
                  </template>
                  <v-card class="yotu" align="center" justify="center">
                    <v-card-title class="hiper"
                      >{{ item.modalTitle }}
                      <v-spacer></v-spacer>
                      <span v-if="item.id == 2" style="cursor: pointer" @click="poput2 = false; cerrar()">X</span>
                      </v-card-title>

                    <v-divider></v-divider>
                    <v-card-text
                      class="solda"
                      align="center"
                      justify="center"
                      >{{ item.modalDescription }}</v-card-text
                    >
                    <iframe
                      id="iframe"
                      width="80%"
                      height="530px"
                      style="margin-bottom: 30px;"
                      :src="item.iframe"
                      frameborder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                      class="video"
                    ></iframe>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn style="background:red"  text @click="poput2 = false; cerrar()">
                            <h4 style="color:white">Cerrar</h4>
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
                <v-dialog v-model="poput3" v-if="item.id == 3" max-width="100%">
                  <template v-slot:activator="{ on }">
                    <v-btn color="primary" v-on="on">{{
                      item.textButton
                    }}</v-btn>
                  </template>
                  <v-card class="yotu" align="center" justify="center">
                    <v-card-title class="hiper"
                      >{{ item.modalTitle }}
                      <v-spacer></v-spacer>
                      <span v-if="item.id == 3" style="cursor: pointer" @click="poput3 = false; cerrar()">X</span>
                      </v-card-title>

                    <v-divider></v-divider>
                    <v-card-text
                      class="solda"
                      align="center"
                      justify="center"
                      >{{ item.modalDescription }}</v-card-text
                    >
                    <iframe
                      id="iframe"
                      width="80%"
                      height="530px"
                      style="margin-bottom: 30px;"
                      :src="item.iframe"
                      frameborder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                      class="video"
                    ></iframe>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn style="background:red" text @click="poput3 = false; cerrar()">
                        <h4 style="color:white">Cerrar</h4>
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
                <v-dialog v-model="poput4" v-if="item.id == 4" max-width="100%">
                  <template v-slot:activator="{ on }">
                    <v-btn color="primary" v-on="on">{{
                      item.textButton
                    }}</v-btn>
                  </template>
                  <v-card class="yotu" align="center" justify="center">
                    <v-card-title class="hiper"
                      >{{ item.modalTitle }}
                      <v-spacer></v-spacer>
                      <span v-if="item.id == 4" style="cursor: pointer" @click="poput4 = false; cerrar()">X</span>
                      </v-card-title>

                    <v-divider></v-divider>
                    <v-card-text
                      class="solda"
                      align="center"
                      justify="center"
                      >{{ item.modalDescription }}</v-card-text
                    >
                    <iframe
                      id="iframe"
                      width="80%"
                      height="530px"
                      style="margin-bottom: 30px;"
                      :src="item.iframe"
                      frameborder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                      class="video"
                    ></iframe>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn style="background:red" text @click="poput4 = false; cerrar()">
                         <h4 style="color:white">Cerrar</h4>
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
                <v-dialog v-model="poput5" v-if="item.id == 5" max-width="100%">
                  <template v-slot:activator="{ on }">
                    <v-btn color="primary" v-on="on">{{
                      item.textButton
                    }}</v-btn>
                  </template>
                  <v-card class="yotu" align="center" justify="center">
                    <v-card-title class="hiper"
                      >{{ item.modalTitle }}
                      <v-spacer></v-spacer>
                      <span v-if="item.id == 5" style="cursor: pointer" @click="poput5 = false; cerrar()">X</span>
                      </v-card-title>

                    <v-divider></v-divider>
                    <v-card-text
                      class="solda"
                      align="center"
                      justify="center"
                      >{{ item.modalDescription }}</v-card-text
                    >
                    <iframe
                      id="iframe"
                      width="80%"
                      height="530px"
                      style="margin-bottom: 30px;"
                      :src="item.iframe"
                      frameborder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                      class="video"
                    ></iframe>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn style="background:red" text @click="poput5 = false;cerrar()">
                         <h4 style="color:white">Cerrar</h4>
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
                <v-dialog v-model="poput6" v-if="item.id == 6" max-width="100%">
                  <template v-slot:activator="{ on }">
                    <v-btn color="primary" v-on="on">{{
                      item.textButton
                    }}</v-btn>
                  </template>
                  <v-card class="yotu" align="center" justify="center">
                    <v-card-title class="hiper"
                      >{{ item.modalTitle }}
                      <v-spacer></v-spacer>
                      <span v-if="item.id == 6" style="cursor: pointer" @click="poput6 = false;cerrar()">X</span>
                      </v-card-title>

                    <v-divider></v-divider>
                    <v-card-text
                      class="solda"
                      align="center"
                      justify="center"
                      >{{ item.modalDescription }}</v-card-text
                    >
                    <iframe
                      id="iframe"
                      width="80%"
                      height="530px"
                      style="margin-bottom: 30px;"
                      :src="item.iframe"
                      frameborder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                      class="video"
                    ></iframe>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn style="background:red" text @click="poput6 = false; cerrar()">
                        <h4 style="color:white">Cerrar</h4>
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
                <v-dialog v-model="poput7" v-if="item.id == 7" max-width="100%">
                  <template v-slot:activator="{ on }">
                    <v-btn color="primary" v-on="on">{{
                      item.textButton
                    }}</v-btn>
                  </template>
                  <v-card class="yotu" align="center" justify="center">
                    <v-card-title class="hiper"
                      >{{ item.modalTitle }}
                      <v-spacer></v-spacer>
                      <span v-if="item.id == 7" style="cursor: pointer" @click="poput7 = false; cerrar()">X</span>
                      </v-card-title>

                    <v-divider></v-divider>
                    <v-card-text
                      class="solda"
                      align="center"
                      justify="center"
                      >{{ item.modalDescription }}</v-card-text
                    >
                    <iframe
                      id="iframe"
                      width="80%"
                      height="530px"
                      style="margin-bottom: 30px;"
                      :src="item.iframe"
                      frameborder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                      class="video"
                    ></iframe>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn style="background:red" text @click="poput7 = false; cerrar()">
                       <h4 style="color:white">Cerrar</h4>
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
                <v-dialog v-model="poput8" v-if="item.id == 8" max-width="100%">
                  <template v-slot:activator="{ on }">
                    <v-btn color="primary" v-on="on">{{
                      item.textButton
                    }}</v-btn>
                  </template>
                  <v-card class="yotu" align="center" justify="center">
                    <v-card-title class="hiper"
                      >{{ item.modalTitle }}
                      <v-spacer></v-spacer>
                      <span v-if="item.id == 8" style="cursor: pointer" @click="poput8 = false; cerrar()">X</span>
                      </v-card-title>

                    <v-divider></v-divider>
                    <v-card-text
                      class="solda"
                      align="center"
                      justify="center"
                      >{{ item.modalDescription }}</v-card-text
                    >
                    <iframe
                      id="iframe"
                      width="80%"
                      height="530px"
                      style="margin-bottom: 30px;"
                      :src="item.iframe"
                      frameborder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                      class="video"
                    ></iframe>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn style="background:red" text @click="poput8 = false; cerrar()">
                         <h4 style="color:white">Cerrar</h4>
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
                <v-dialog v-model="poput9" v-if="item.id == 9" max-width="100%">
                  <template v-slot:activator="{ on }">
                    <v-btn color="primary" v-on="on">{{
                      item.textButton
                    }}</v-btn>
                  </template>
                  <v-card class="yotu" align="center" justify="center">
                    <v-card-title class="hiper"
                      >{{ item.modalTitle }}
                      <v-spacer></v-spacer>
                      <span v-if="item.id == 9" style="cursor: pointer" @click="poput9 = false; cerrar()">X</span>
                      </v-card-title>

                    <v-divider></v-divider>
                    <v-card-text
                      class="solda"
                      align="center"
                      justify="center"
                      >{{ item.modalDescription }}</v-card-text
                    >
                    <iframe
                      id="iframe"
                      width="80%"
                      height="530px"
                      style="margin-bottom: 30px;"
                      :src="item.iframe"
                      frameborder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                      class="video"
                    ></iframe>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn style="background:red" text @click="poput9 = false; cerrar()">
                         <h4 style="color:white">Cerrar</h4>
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
                <v-dialog v-model="poput10" v-if="item.id == 10" max-width="100%">
                  <template v-slot:activator="{ on }">
                    <v-btn color="primary" v-on="on">{{
                      item.textButton
                    }}</v-btn>
                  </template>
                  <v-card class="yotu" align="center" justify="center">
                    <v-card-title class="hiper"
                      >{{ item.modalTitle }}
                      <v-spacer></v-spacer>
                      <span v-if="item.id == 10" style="cursor: pointer" @click="poput10 = false; cerrar()">X</span>
                      </v-card-title>

                    <v-divider></v-divider>
                    <v-card-text
                      class="solda"
                      align="center"
                      justify="center"
                      >{{ item.modalDescription }}</v-card-text
                    >
                    <iframe
                      id="iframe"
                      width="80%"
                      height="530px"
                      style="margin-bottom: 30px;"
                      :src="item.iframe"
                      frameborder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                      class="video"
                    ></iframe>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn style="background:red" text @click="poput10 = false;cerrar()">
                        <h4 style="color:white">Cerrar</h4>
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>
<script>
export default {
  data: () => ({
    poput1: false,
    poput2: false,
    poput3: false,
    poput4: false,
    poput5: false,
    poput6: false,
    poput7: false,
    poput8: false,
    poput9: false,
    poput10: false,
    slides: [
      {
        id: 1,
        image: "img/slides/slide-1-full.png",
        title: "Sistema De Corte De Plasma",
        text: "Aire de 30 a 125 amperios",
        textButton: "Ver Más",
        modalTitle: "Hypertem",
        modalDescription:
          "power max 45xp maxima potencia portatil con el menor costo",
        iframe: "https://www.youtube.com/embed/_m46h8_sQC8",
      },
      {
        id: 2,
        image: "img/slides/slide-2-full.png",
        title: "Plasma Alta Productividad",
        text: "Maxpro 200 aire",
        textButton: "Ver Más",
        modalTitle: "Hypertem",
        modalDescription:
          "mesa de corte amg fsc 35000 alta productividad, plasma aire aire Maxpro 200 corte bisel",
        iframe: "https://www.youtube.com/embed/vj6Y00LOf3Q",
      },
      {
        id: 3,
        image: "img/slides/slide-3-full.png",
        title: "Bienvenidos a la industria 4.0",
        text: "En procesos de soldadura",
        textButton: "Ver Más",
        modalTitle: "Panasonic",
        modalDescription:
          "robot panasonic y posicionador para soldadura  de sillas alta velocidad",
        iframe: "https://www.youtube.com/embed/vGFGZXUY_zc",
      },
      {
        id: 4,
        image: "img/slides/slide-4-full.png",
        title: "Fabricación e integración",
        text: "Celdas robóticas a la medida",
        textButton: "Ver Más",
        modalTitle: "Panasonic Power MIG",
        modalDescription:
          "celda robotica fabricada e  integrada en colombia por soldarco  sas",
        iframe: "https://www.youtube.com/embed/-CaqzsH_YZQ",
      },
      {
        id: 5,
        image: "img/slides/slide-5-full.png",
        title: "Tecnología de corte X-definition",
        text: "Revisa en que consiste",
        textButton: "Ver Más",
        modalTitle: "Hypertem",
        modalDescription:
          "Nuestros 33 años de experiencia te garantizan soluciones eficaces en soldadura y corte. Además de contar con un personal calificado para las necesidades de nuestros clientes, hemos implementado la línea la transmisión de potencia que se complementa con la industria. Soldarco te brinda los mejores productos de tecnología para que tu trabajo sea más eficiente y ahorres en tus procesos de producción con un mejor costo beneficio. ¡Contáctanos para mejorar tu productividad!.",
        iframe: "https://www.youtube.com/embed/tynUBL1sv-U",
      },
      {
        id: 6,
        image: "img/slides/slide-6-full.png",
        title: "Obtenga mayor productividad",
        text: "En sistema de corte",
        textButton: "Ver Más",
        modalTitle: "Hypertem",
        modalDescription:
          "mejore la  calidad y productividad de los cortes  usando tecnologia hypertem integradas por soldarco sas",
        iframe: "https://www.youtube.com/embed/4nMYmBkqE_U",
      },
      {
        id: 7,
        image: "img/slides/slide-7-full.png",
        title: "Mesa de corte AMG cabezal biselador",
        text: "Dale un vistazo aqui",
        textButton: "Ver Más",
        modalTitle: "Hypertem",
        modalDescription:
          " tecnologia de corte  plasma biselado amg integrado por soldarco sas",
        iframe: "https://www.youtube.com/embed/V6B4XDDhzog",
      },
      {
        id: 8,
        image: "img/slides/slide-8-full.png",
        title: "Mesas de corte Láser de fibra",
        text: "Obtenga mejor productividad y menor costo",
        textButton: "Ver Más",
        modalTitle: "G-WEIKE",
        modalDescription:
          "evaluamos sus tecnologias de corte  y presentamos soluciones que mejores calidad productividad y costos",
        iframe: "https://www.youtube.com/embed/pQJDKxXW540",
      },
      {
        id: 9,
        image: "img/slides/slide-9-full.png",
        title: "Tecnología Láser de fibra con cabina",
        text: "Hasta 15kw corte 35mm acero al carbón",
        textButton: "Ver Más",
        modalTitle: "G-WEIKE",
        modalDescription:
          "Láser de fibra alta potencia menores costos operativos",
        iframe: "https://www.youtube.com/embed/XYLRsKLPgzE",
      },
      {
        id: 10,
        image: "img/slides/slide-10-full.png",
        title: "Reduzca el consumo de gas",
        text: "En procesos de soldadura MIG/MAG",
        textButton: "Ver Más",
        modalTitle: "POWERMIG",
        modalDescription:
          "                    eco gas es un sistema de control de gas que se regula  de forma sinergica   de acuerdo a la corriente de soldadura durante todo el proceso de soldar,reduccion de costos  hasta el 50 % de consumo de gas",
        iframe: "https://www.youtube.com/embed/1dz1nWvdvt8",
      },
    ],
  }),
  methods: {
    cerrar() {
      var iframes = document.getElementById("iframe");
      iframes.remove();
    },
  },
};
</script>
<style>
.btn {
  background: linear-gradient(60deg, #027fff, #1976d2);
  box-shadow: 0 2px 4px -1px #027fff33, 0 4px 5px 0 #027fff24,
    0 1px 10px 0 #027fff1f;
}

.flex-row-reverse {
  display: block !important;
}
</style>
