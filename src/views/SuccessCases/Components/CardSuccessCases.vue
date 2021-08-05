<template>
    <div v-if="successCases != null">
        <v-list>
            <v-list-item v-for="(item, index) in pagina" :key="index">
                <v-card class="espacio">
                    <v-carousel cycle height="300px" :hide-delimiters="true" hide-delimiter-background :show-arrows="false">
                        <v-carousel-item v-for="(image, i ) in JSON.parse(item.IMG_ARCHIVOS)" :key="i" :src="'http://app.soldarco.com/Doom/Bootstrap/Servicios/sweb_blog_imagen.ashx?reg='+ image">

                        </v-carousel-item>
                    </v-carousel>
                    <v-img :src="'http://app.soldarco.com/Doom/Bootstrap/Servicios/sweb_blog_imagen.ashx?reg='+ item.REG_ARCHIVO1"></v-img>
                    <v-card-title class="titulo">{{ item.TITULO }}</v-card-title>
                    <v-card-text class="fecha">{{ item.FECHA }}</v-card-text>
                    <v-card-subtitle class="texto" v-html="decodeHtml(item.TEXTO)">{{ item.TEXTO }}</v-card-subtitle>
                    <div class="card__actions">
                        <v-btn @click="goToCase(item.REG)" class="enter" color="primary" max-height="50%">
                            Ver Caso
                        </v-btn>
                    </div>
                </v-card>
            </v-list-item>
        </v-list>
        <v-pagination v-model="page" :length="Math.ceil(successCases.length / perPage)" circle></v-pagination>
    </div>
    <div v-else>
        <no-data></no-data>
    </div>
</template>
<script>
export default {
    props: ['successCases'],
    data: () => ({
        page: 1,
        perPage: 2, 
    }),
    methods:{
        goToCase(id){
            this.$router.push('/detailCases/'+id)
        },

        decodeHtml(html){
            var txt = document.createElement("textarea");
            txt.innerHTML = html;
            console.log(txt.value)
            
            return txt.value
        }
    },
    computed: {
        pagina: function(){
            return this.successCases.slice((this.page - 1) * this.perPage, this.page * this.perPage)
        }
    }
}
</script>