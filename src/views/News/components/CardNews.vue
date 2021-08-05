<template>
    <div>
        <v-list v-bind:pagination.sync="pagination">
            <v-list-item v-for="(item, index) in pages" :key="index">
                <v-card class="espacio">
                    <v-carousel cycle height="300px" :hide-delimiters="true" hide-delimiter-background :show-arrows="false">
                        <v-carousel-item v-for="(image, i ) in JSON.parse(item.IMG_ARCHIVOS)" :key="i" :src="'http://app.soldarco.com/Doom/Bootstrap/Servicios/sweb_blog_imagen.ashx?reg='+ image">

                        </v-carousel-item>
                    </v-carousel>
                    <v-img :src="'http://app.soldarco.com/Doom/Bootstrap/Servicios/sweb_blog_imagen.ashx?reg='+ item.REG_ARCHIVO1"></v-img>
                    <v-card-title class="titulo">{{ item.TITULO }}</v-card-title>
                    <v-card-text class="fecha">{{ item.FECHA }}</v-card-text>
                    <v-card-subtitle class="texto" v-html="decodeHtml(item.TEXTO)"></v-card-subtitle>
                    <div class="card__actions">
                        <v-btn @click="goToNew(item.REG)" class="enter" color="primary" max-height="50%">
                            Ver Noticias
                        </v-btn>
                    </div>
                </v-card>
            </v-list-item>
        </v-list>
        <v-pagination v-model="page" :length="Math.ceil(news.length / perPage)" circle></v-pagination>
    </div>
</template>
<script>
export default {
    props: ['news'],
    data: () => ({
        page: 1,
        perPage: 2, 
    }),
    methods: {
        goToNew(id){
            this.$router.push('/detail-new/'+id)
        },

        decodeHtml(html){
            var txt = document.createElement("textarea");
            txt.innerHTML = html;
            console.log(txt.value)
            
            return txt.value
        }
    },
    computed: {
        pages: function(){
            return this.news.slice((this.page - 1) * this.perPage, this.page * this.perPage)
        }
    }
}
</script>
