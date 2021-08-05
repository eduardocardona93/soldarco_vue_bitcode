<template>
    <div>
        <v-container>
            <v-col md="12" align="center" justify="center">
                <v-img src="img/logosoldarco.png" width="600" ></v-img>
            </v-col>
            <div class="block-header">
                <h3 class="block-header__title">Nuestros Aliados</h3>
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
                    <v-card class="ma-4" height="300" width="300">
                        <img :src="item.image" style="width:100%; height:100%;">             
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
            { image: 'img/logos/AMG.jpg', title: 'Amg' },
            { image: 'img/logos/arcair.jpg', title: 'Arcair' },
            { image: 'img/logos/GWEIKE.jpg', title: 'G-weiker Laser' },
            { image: 'img/logos/HResHardfacing.jpg', title: 'Hard face technologies' },
            { image: 'img/logos/hypertherm.jpg', title: 'Hypertherm' },
            { image: 'img/logos/Panasonic.jpg', title: 'Panasonic' },
            { image: 'img/logos/Postle.jpg', title: 'Postalloy' },
        ]
    })
}
</script>