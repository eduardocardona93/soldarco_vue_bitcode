<template>
    <div style="background-color: #fff;">
        <v-container>
            <div class="block-header">
                <h3 class="block-header__title">Nuestros Valores</h3>
                <div class="block-header__divider"></div>
            </div>
            <v-slide-group
                class="pa-4"
                :prev-icon="prevIcon ? 'mdi-minus' : undefined"
                :next-icon="nextIcon ? 'mdi-plus' : undefined"
                :multiple="multiple"
                :mandatory="mandatory"
                :show-arrows="true"
                :center-active="centerActive"
            >
                <v-slide-item v-for="(item, i) in slider" :key="i">
                    <v-card class="ma-4 cards-business" height="465" width="480">
                        <v-img class="white--text align-end" height="200px" :src="item.image"></v-img>
                        <v-card-title>{{ item.title }}</v-card-title>
                        <v-card-subtitle style="color: rgba(16, 16, 16, 0.98);text-align: justify;">{{ item.text }}</v-card-subtitle>
                            <v-row class="fill-height" align="center" justify="center">
                    <v-scale-transition>
                        <v-icon v-if="active" color="white" size="48" v-text="'mdi-close-circle-outline'"></v-icon>
                    </v-scale-transition>
                    </v-row>
                </v-card>
                </v-slide-item>
            </v-slide-group>
        </v-container>
    </div>
</template>
<script>
export default {
    data: () => ({
        slider: [
            { image: 'img/icons/respeto.jpg', title: 'Respeto', text: 'Promovemos un ambiente de mutuo respeto y armonía; valoramos la dignidad del ser humano y la libertad de pensamiento;  comprendemos los derechos inherentes a cada persona y la diversidad de formas de sentir y actuar de nuestros empleados, nuestros clientes y las comunidades.' },
            { image: 'img/icons/integridad.jpg', title: 'Integridad', text: 'Somos y hacemos lo que es correcto, honesto y justo para la empresa, nuestros clientes, proveedores, comunidad y nosotros mismos. Sembramos seguridad y confianza en todas las instituciones, empresas, negocios y personas que están en contacto con nosotros, porque nos expresamos y comportamos con coherencia, autenticidad; y moralidad basada en la verdad, la honradez, la responsabilidad y la lealtad.'  },
            { image: 'img/icons/calidad.jpg', title: 'Calidad', text: 'Estamos comprometidos con la Excelencia en todo trabajo a realizar. Somos responsables tanto por el cumplimiento de los objetivos y logro de los resultados diarios; como en la forma en que accionamos y hacemos las cosas para alcanzarlos.' },
            { image: 'img/icons/liderazgo.jpg', title: 'Liderazgo', text: 'Valoramos las personas de todos los niveles, que motiven y guíen con su ejemplo. Que se sientan orgullosas de lo que hacen, que tengan Visión, autodisciplina, iniciativa, creatividad, y; se adapten fácil a los cambios. Comprometidas con su desarrollo, progreso, y; que enseñen, influyan e inspiren a otros a hacer lo mismo.' },
            { image: 'img/icons/compromiso.jpg', title: 'Compromiso', text: 'Estamos totalmente comprometidos e identificados con la empresa, las personas que trabajan en ella, nuestros clientes y la comunidad. Demostramos con nuestro accionar responsable y cada uno de nuestros comportamientos, que estamos implicados en nuestros proyectos, nuestras funciones, obligaciones y promesas que hacemos, tanto de manera escrita como verbal; incluso llegando a asumir las de los demás integrantes de nuestro equipo como propios, a fin de lograr los objetivos de la organización.'},
            { image: 'img/icons/servicio.jpg', title: 'Servicio', text: 'Sentimos pasión por atender y servir a todos nuestros clientes. Sentimos absoluta satisfacción personal cuando brindamos ayuda y colaboración a los demás, en cualquier situación de forma espontánea, con rapidez, con la mejor cara, con el mejor empeño y las mejores ganas y energía. Por nuestra visión optimista de la vida y del trabajo, tenemos en cuenta hasta los detalles más pequeños para expresar nuestro alto sentido de servicio, para superar expectativas de los clientes y para marcar diferencia.' },
        ]
    })
}
</script>