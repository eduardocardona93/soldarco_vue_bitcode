<template>
    <div>
        <v-card class="mx-auto" max-width="100%">
            <v-card-title class="white--text blue darken-1">
                Carrito
                <v-spacer></v-spacer>
                <v-btn color="white" class="text--primary" fab small @click="showPopup = !showPopup">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
            </v-card-title>
            <v-card-title>Has seleccionado estos productos:</v-card-title>
            <v-virtual-scroll :items="this.cart.cart" :item-height="120" height="500px">
                <template v-slot="{ item, index }">
                    <v-container>
                        <v-col cols="12">
                            <v-row>
                                <v-col cols="2">
                                    <v-img :src="'http://app.soldarco.com/Doom/Bootstrap/servicios/ShowImage.ashx?ID='+item.REFERENCIA+'&TIPO=FRENTE&COLOR=*&EMPRESA=02'"></v-img>
                                </v-col>
                                <v-col md="10">
                                    <v-row>
                                        <v-col md="5" style="padding: 0">
                                            <p class="product_name">{{ item.NOMBRE }}</p>
                                            <p class="product_brand"><b>Marca:</b> {{ item.MARCA }}</p>
                                            <p class="product_reference"><b>Referencia:</b> {{ item.REFERENCIA }}</p>
                                        </v-col>
                                        <v-col md="4">
                                            <v-btn small class="buttonMinus" v-if="item.quantity > 1" @click="deleteQuantity(index)"><v-icon>mdi-minus</v-icon></v-btn>
                                            <v-btn small color="black" class="buttonMinus" v-else @click="deleteQuantity(index)"><v-icon color="white" size="12">mdi-close</v-icon></v-btn>
                                            <div class="counter">{{ item.quantity }}</div>
                                            <v-btn small class="buttonPlus" @click="addQuantity(item.REFERENCIA)"><v-icon>mdi-plus</v-icon></v-btn>
                                        </v-col>
                                        <v-col md="3">
                                            <h5 class="product_price">{{ new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(parseInt(item.PRECIO.replace(',', '')) * parseInt(item.quantity)) }}</h5>
                                        </v-col>
                                    </v-row>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-container>
                </template>
            </v-virtual-scroll>
            <v-divider></v-divider>
            <v-card-actions>
                <v-row align="center" justify="center" style="margin: 0 ">
                    <v-col md="6">
                        <v-btn color="transparent" width="100%" class="buttonDropCart"><span class="dropCart" @click="deleteCart">Vaciar carrito</span></v-btn>
                    </v-col>
                    <v-col md="6">
                        <v-btn @click="goToPay" width="100%" class="paymentButton"><span class="goToPay">Ir a pagar</span><span class="totalCart">{{ new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(subtotal) }}</span></v-btn>
                    </v-col>
                </v-row>
            </v-card-actions>
        </v-card>
    </div>
</template>
<script>
export default {
    data: () => ({
        cart: [],
    }),
    methods: {
        addQuantity(reference){
            let details = []
            this.cart.cart.map((item) => {
                if(item.REFERENCIA == reference){
                    item.quantity++ 
                }
                details.push(item)
            });
            this.cart.cart = details
        },

        deleteQuantity(index){
            let details = []
            let new_quantity = this.cart.cart[index].quantity - 1
            if(new_quantity < 1){
                this.$swal({
                    text: '¿Estas seguro de eliminar este producto del carrito?',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#1976D2',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Si, eliminar!',
                    cancelButtonText: 'No'
                }).then((result) => {
                    if(result.value){
                        this.cart.cart.splice(index, 1)
                    }
                });
            }else{
                this.cart.cart.map((item, key) => {
                    if(key == index){
                        item.quantity--
                    }
                    details.push(item)
                });
                this.cart.cart = details
            }
        },

        goToPay(){
            this.$router.push('/checkout')
        },

        deleteCart(){
            this.$swal({
                text: '¿Estas seguro de eliminar este producto del carrito?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#1976D2',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, eliminar!',
                cancelButtonText: 'No'
            }).then((result) => {
                if(result.value){
                    this.cart.cart = []
                }
            });
        }
    },
    watch: {
        cart: {
            handler: function(val){
                localStorage.setItem('cart', JSON.stringify(val))
            },
            deep: true,
        },

        cartProducts: {
            handler: function(){
                let data = localStorage.getItem('cart')
                if(data){
                    data = JSON.parse(data)
                    this.cart = data
                }
            }
        }
    },
    computed: {
        products: function(){
            if(this.cart.cart != null){
                return this.cart.cart.length;
            }else{
                return 0;
            }
        },

        subtotal: function(){
            let subtotal = 0
            if(this.cart.cart.length != null){
                for(let i = 0; i < this.cart.cart.length; i++){
                    subtotal += (parseInt(this.cart.cart[i].PRECIO.replace(',', '')) * parseInt(this.cart.cart[i].quantity))
                }
                return subtotal;
            }else{
                return subtotal;
            }
            
        },
    },
}
</script>