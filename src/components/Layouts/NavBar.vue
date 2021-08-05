<template>
    <div style="position: fixed; z-index: 1; width: 100%;">
        <v-bottom-navigation color="indigo" class="header">
            <v-container>
                <v-row>
                    <v-col md="6">
                        <img src="../../../public/img/logosoldarco.png" class="logo">
                    </v-col>
                    <v-col md="6" class="infoCall">
                        <div>
                        </div>
                        <br>
                        <div class="site-header__phone-number justify-end">
                            <h5>Llámanos!</h5>
                            <a @click="showIconCart" href="tel:5728894597">Cali: (+57 2) 889 4597</a><br>
                            <a @click="showIconCart" href="tel:5714059680">Bogotá: (+57 1) 405 9680</a>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </v-bottom-navigation>
        <div class="site-header__nav-panel" v-if="screen > 680">
            <div class="nav-panel" id="navbar">
                <v-container class="nav-panel__container">
                    <v-row class="nav-panel__row">
                        <div class="nav-panel__nav-links nav-links" style="width: 100%">
                            <v-list class="nav-links__list widgetFooter">
                                <v-list-item class="nav-links__item">
                                    <a @click="showIconCart" href="/"><span>Inicio</span></a>
                                </v-list-item>
                                <v-list-item class="nav-links__item">
                                    <a @click="showIconCart" href="/shop"><span>Tienda</span></a>
                                </v-list-item>
                                <v-list-item class="nav-links__item">
                                    <v-menu :rounded="true" offset-y expand>
                                        <template v-slot:activator="{ attrs, on }">
                                            <span v-bind="attrs" v-on="on">Empresa</span>
                                        </template>
                                        <v-list>
                                            <v-list-item v-for="(item, index) in businessSubmenu" :key="index">
                                                <a @click="showIconCart" :href="item.url"><span>{{ item.name }}</span></a>
                                            </v-list-item>
                                        </v-list>
                                    </v-menu>
                                </v-list-item>
                                <v-list-item class="nav-links__item">
                                    <v-menu :rounded="true" offset-y>
                                        <template v-slot:activator="{ attrs, on }">
                                            <span v-bind="attrs" v-on="on">Productos</span>
                                        </template>
                                        <v-row class="megamenu">
                                            <v-col cols="4">
                                                <v-list class="megamenu__links megamenu__links--level--0">
                                                    <v-list-item class="megamenu__item megamenu__item--with-submenu">
                                                        <span style="font-weight: bold">Automatización</span><br>
                                                        <v-list class="megamenu__links megamenu__links--level--1">
                                                            <v-list-item class="megamenu__item" v-for="(item, index) in automatization" :key="index">
                                                                <!-- <a @click="showIconCart" tag="a" :href="item.url"><span>{{ item.name }}</span></a> -->
                                                                <a @click="showIconCart" :href="item.url"><span>{{ item.name }}</span></a>
                                                            </v-list-item>
                                                        </v-list>
                                                    </v-list-item>
                                                    <v-list-item class="megamenu__item megamenu__item--with-submenu">
                                                        <span style="font-weight: bold">Recubrimientos duros</span>
                                                        <v-list class="megamenu__links megamenu__links--level--1">
                                                            <v-list-item class="megamenu__item" v-for="(hard, index) in hardCoatings" :key="index">
                                                                <!-- <a @click="showIconCart" :href="hard.url"><span>{{ hard.name }}</span></a> -->
                                                                <a @click="showIconCart" :href="hard.url"><span>{{ hard.name }}</span></a>
                                                            </v-list-item>
                                                        </v-list>
                                                    </v-list-item>
                                                </v-list>
                                            </v-col>
                                            <v-col cols="4">
                                                <v-list class="megamenu__links megamenu__links--level--0">
                                                    <v-list-item class="megamenu__item">
                                                        <span style="font-weight: bold">Sistemas de corte con plasma</span>
                                                        <v-list class="megamenu__links megamenu__links--level--1">
                                                            <v-list-item class="megamenu__item" v-for="(item, index) in plasmaCuttingSystems" :key="index">
                                                                <!-- <a @click="showIconCart" :href="item.url"><span>{{ item.name }}</span></a> -->
                                                                <a @click="showIconCart" :href="item.url"><span>{{ item.name }}</span></a>
                                                            </v-list-item>
                                                        </v-list>
                                                    </v-list-item>
                                                    <v-list-item class="megamenu__item">
                                                        <span style="font-weight: bold">Consumibles para soldadura y corte</span>
                                                        <v-list class="megamenu__links megamenu__links--level--1">
                                                            <v-list-item class="megamenu__item" v-for="(item, index) in comsumablesForWeldingAndCutting" :key="index">
                                                                <!-- <a @click="showIconCart" :href="item.url"><span>{{ item.name }}</span></a> -->
                                                                <a @click="showIconCart" :href="item.url"><span>{{ item.name }}</span></a>
                                                            </v-list-item>
                                                        </v-list>
                                                    </v-list-item>
                                                </v-list>
                                            </v-col>
                                            <v-col cols="4">
                                                <v-list class="megamenu__links megamenu__links--level--0">
                                                    <v-list-item class="megamenu__item">
                                                        <span style="font-weight: bold">Equipos y accesorios</span>
                                                        <v-list class="megamenu__links megamenu__links--level--1">
                                                            <v-list-item class="megamenu__item" v-for="(item, index) in EquipmentAndAccesories" :key="index">
                                                                <!-- <a @click="showIconCart" :href="item.url"><span>{{ item.name }}</span></a> -->
                                                                <a @click="showIconCart" :href="item.url"><span>{{ item.name }}</span></a>
                                                            </v-list-item>
                                                        </v-list>
                                                    </v-list-item>
                                                    <v-list-item class="megamenu__item">
                                                        <span style="font-weight: bold">Soporte Técnico</span>
                                                        <v-list class="megamenu__links megamenu__links--level--1">
                                                            <v-list-item class="megamenu__item" v-for="(item, index) in technicalSupport" :key="index">
                                                                <!-- <a @click="showIconCart" :href="item.url"><span>{{ item.name }}</span></a> -->
                                                                <a @click="showIconCart" :href="item.url"><span>{{ item.name }}</span></a>
                                                            </v-list-item>
                                                        </v-list>
                                                    </v-list-item>
                                                </v-list>
                                            </v-col>
                                        </v-row>
                                    </v-menu>
                                </v-list-item>
                                <v-list-item class="nav-links__item">
                                    <v-menu :rounded="true" offset-y>
                                        <template v-slot:activator="{ attrs, on }">
                                            <span v-bind="attrs" v-on="on">Servicios</span>
                                        </template>
                                        <v-list>
                                            <v-list-item v-for="(item, index) in services" :key="index">
                                                <a @click="showIconCart" :href="item.url"><span>{{ item.name }}</span></a>
                                            </v-list-item>
                                        </v-list>
                                    </v-menu>
                                </v-list-item>
                                <v-list-item class="nav-links__item contact-us">
                                    <a @click="showIconCart" href="/contact-us"><span>Contáctanos</span></a>
                                </v-list-item>
                                <v-list-item class="nav-links__item icons">
                                     <a @click="showIconCart" href="https://www.facebook.com/soldarcooficial" target="_blank"><v-icon color="white" size="30">mdi-facebook</v-icon></a>
                                </v-list-item>
                                <v-list-item class="nav-links__item icons">
                                     <a @click="showIconCart" href="https://www.linkedin.com/company/soldarco/" target="_blank"><v-icon color="white" size="30">mdi-linkedin</v-icon></a>
                                </v-list-item>
                                <v-list-item class="nav-links__item icons">
                                    <a @click="showIconCart" href="https://www.youtube.com/channel/UC_PeRcRi2sf2R1_gahX3xtg/featured?view_as=subscriber" target="_blank"><v-icon color="white" size="30">mdi-youtube</v-icon></a>
                                </v-list-item>
                                <v-list-item class="nav-links__item icons">
                                    <a @click="showIconCart" href="https://www.instagram.com/soldarcooficial/" target="_blank"><v-icon color="white" size="30">mdi-instagram</v-icon></a>
                                </v-list-item>
                                <v-list-item class="nav-links__item icons" v-if="Object.keys(user).length == 0">
                                    <a @click="showIconCart" href="/login"><span>Login</span></a>
                                </v-list-item>
                                <v-list-item class="nav-links__item" v-if="Object.keys(user).length == 0">
                                    <a @click="showIconCart" href="/registry"><span>Registrarte</span></a>
                                </v-list-item>
                                <v-list-item class="nav-links__item" v-else style="min-width: 25%;">
                                    <v-menu :rounded="true" offset-y="">
                                        <template v-slot:activator="{ attrs, on }">
                                            <span v-bind="attrs" v-on="on">{{ user.NOMBRES + ' ' + user.APELLIDOS }}</span>
                                        </template>
                                        <v-list>
                                            <v-list-item >
                                                <a @click="showIconCart" href="/profile"><span>Mi perfil</span></a>
                                            </v-list-item>
                                            <v-list-item >
                                                <a @click="showIconCart"  href="#"><span @click="closeSession">Cerrar sesion</span></a>
                                            </v-list-item>
                                        </v-list>
                                    </v-menu>
                                </v-list-item>
                                <v-list-item class="nav-links__item" v-if="bandera">
                                    <v-dialog v-model="showPopup" width="500" height="500">
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-badge overlap :content="products.length" color="blue" :value="products.length">
                                                <v-icon medium color="white" @click.native="!showPopup" v-bind="attrs" v-on="on">mdi-cart</v-icon>
                                            </v-badge>
                                        </template>
                                        <v-card class="mx-auto" max-width="100%">
                                            <v-card-title class="white--text blue darken-1">
                                                Carrito
                                                <v-spacer></v-spacer>
                                                <v-btn color="white" class="text--primary" fab small @click="showPopup = !showPopup">
                                                    <v-icon>mdi-close</v-icon>
                                                </v-btn>
                                            </v-card-title>
                                            <v-card-title>Has seleccionado estos productos:</v-card-title>
                                            <v-virtual-scroll :items="products" :item-height="120" height="300px">
                                                <template v-slot="{ item, index }">
                                                    <v-container>
                                                        <v-col cols="12">
                                                            <v-row>
                                                                <v-col cols="2">
                                                                    <v-img :src="'http://app.soldarco.com/Doom/Bootstrap/servicios/ShowImage.ashx?ID='+item.REFERENCIA+'&TIPO=FRENTE&COLOR=*&EMPRESA=02'"></v-img>
                                                                </v-col>
                                                                <v-col md="10">
                                                                    <v-row>
                                                                        <v-col md="5" class="product-info1" style="padding: 0">
                                                                            <p class="product_name">{{ item.NOMBRE }}</p>
                                                                            <p class="product_brand"><b>Marca:</b> {{ item.MARCA }}</p>
                                                                            <p class="product_reference"><b>Referencia:</b> {{ item.REFERENCIA }}</p>
                                                                        </v-col>
                                                                        <v-col md="4" class="product-quantity">
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
                                                    
                                                    <v-col md="12">
                                                    <a @click="setBandera" href="/checkout">
                                                        <v-btn width="100%" class="paymentButton"><span class="goToPay">Ir a pagar</span><span class="totalCart">{{ new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(subtotal) }}</span></v-btn>
                                                    </a>
                                                    </v-col>
                                                </v-row>
                                            </v-card-actions>
                                        </v-card>
                                    </v-dialog>
                                </v-list-item>
                            </v-list>
                        </div>
                    </v-row>
                </v-container>
            </div>
        </div>
        <div class="site-header__nav-panel" v-else>
            <div class="nav-panel" id="navbar">
                <v-container class="nav-panel__container">
                    <v-row class="nav-panel__row">
                        <div class="nav-panel__nav-links nav-links" style="width: 100%">
                            <v-menu left bottom>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-app-bar-nav-icon color="white" v-bind="attrs" v-on="on" style="margin-right: 10px"></v-app-bar-nav-icon>
                                </template>
                                <v-list>
                                    <v-list-item class="nav-links__item">
                                        <a @click="showIconCart" href="/"><span>Inicio</span></a>
                                    </v-list-item>
                                    <v-list-item class="nav-links__item">
                                        <a @click="showIconCart" href="/shop"><span>Tienda</span></a>
                                    </v-list-item>
                                    <v-list-item class="nav-links__item">
                                        <v-menu expand>
                                            <template v-slot:activator="{ attrs, on }">
                                                <span v-bind="attrs" v-on="on">Empresa</span>
                                            </template>
                                            <v-list>
                                                <v-list-item v-for="(item, index) in businessSubmenu" :key="index">
                                                    <a @click="showIconCart" :href="item.url"><span>{{ item.name }}</span></a>
                                                </v-list-item>
                                            </v-list>
                                        </v-menu>
                                    </v-list-item>
                                    <v-list-item class="nav-links__item">
                                        <v-menu :rounded="true" offset-y class="meg-menu">
                                            <template v-slot:activator="{ attrs, on }">
                                                <span v-bind="attrs" v-on="on">Productos</span>
                                            </template>
                                            <v-row class="megamenu">
                                                <v-col cols="4">
                                                    <v-list class="megamenu__links megamenu__links--level--0">
                                                        <v-list-item class="megamenu__item megamenu__item--with-submenu">
                                                            <span style="font-weight: bold">Automatización</span><br>
                                                            <v-list class="megamenu__links megamenu__links--level--1">
                                                                <v-list-item class="megamenu__item" v-for="(item, index) in automatization" :key="index">
                                                                    <a @click="showIconCart" :href="item.url"><span>{{ item.name }}</span></a>
                                                                </v-list-item>
                                                            </v-list>
                                                        </v-list-item>
                                                        <v-list-item class="megamenu__item megamenu__item--with-submenu">
                                                            <span style="font-weight: bold">Recubrimientos duros</span>
                                                            <v-list class="megamenu__links megamenu__links--level--1">
                                                                <v-list-item class="megamenu__item" v-for="(hard, index) in hardCoatings" :key="index">
                                                                    <a @click="showIconCart" :href="hard.url"><span>{{ hard.name }}</span></a>
                                                                </v-list-item>
                                                            </v-list>
                                                        </v-list-item>
                                                    </v-list>
                                                </v-col>
                                                <v-col cols="4">
                                                    <v-list class="megamenu__links megamenu__links--level--0">
                                                        <v-list-item class="megamenu__item">
                                                            <span style="font-weight: bold">Sistemas de corte con plasma</span>
                                                            <v-list class="megamenu__links megamenu__links--level--1">
                                                                <v-list-item class="megamenu__item" v-for="(item, index) in plasmaCuttingSystems" :key="index">
                                                                    <a @click="showIconCart" :href="item.url"><span>{{ item.name }}</span></a>
                                                                </v-list-item>
                                                            </v-list>
                                                        </v-list-item>
                                                        <v-list-item class="megamenu__item">
                                                            <span style="font-weight: bold">Consumibles para soldadura y corte</span>
                                                            <v-list class="megamenu__links megamenu__links--level--1">
                                                                <v-list-item class="megamenu__item" v-for="(item, index) in comsumablesForWeldingAndCutting" :key="index">
                                                                    <a @click="showIconCart" :href="item.url"><span>{{ item.name }}</span></a>
                                                                </v-list-item>
                                                            </v-list>
                                                        </v-list-item>
                                                    </v-list>
                                                </v-col>
                                                <v-col cols="4">
                                                    <v-list class="megamenu__links megamenu__links--level--0">
                                                        <v-list-item class="megamenu__item">
                                                            <span style="font-weight: bold">Equipos y accesorios</span>
                                                            <v-list class="megamenu__links megamenu__links--level--1">
                                                                <v-list-item class="megamenu__item" v-for="(item, index) in EquipmentAndAccesories" :key="index">
                                                                    <a @click="showIconCart" :href="item.url"><span>{{ item.name }}</span></a>
                                                                </v-list-item>
                                                            </v-list>
                                                        </v-list-item>
                                                        <v-list-item class="megamenu__item">
                                                            <span style="font-weight: bold">Soporte Técnico</span>
                                                            <v-list class="megamenu__links megamenu__links--level--1">
                                                                <v-list-item class="megamenu__item" v-for="(item, index) in technicalSupport" :key="index">
                                                                    <a @click="showIconCart" :href="item.url"><span>{{ item.name }}</span></a>
                                                                </v-list-item>
                                                            </v-list>
                                                        </v-list-item>
                                                    </v-list>
                                                </v-col>
                                            </v-row>
                                        </v-menu>
                                    </v-list-item>
                                    <v-list-item class="nav-links__item">
                                        <v-menu offset-y>
                                            <template v-slot:activator="{ attrs, on }">
                                                <span v-bind="attrs" v-on="on">Servicios</span>
                                            </template>
                                            <v-list>
                                                <v-list-item v-for="(item, index) in services" :key="index">
                                                    <a @click="showIconCart" :href="item.url"><span>{{ item.name }}</span></a>
                                                </v-list-item>
                                            </v-list>
                                        </v-menu>
                                    </v-list-item>
                                    <v-list-item class="nav-links__item contact-us">
                                        <a @click="showIconCart" href="/contact-us"><span>Contactanos</span></a>
                                    </v-list-item>
                                    <v-list-item class="nav-links__item icons" v-if="Object.keys(user).length == 0">
                                        <a @click="showIconCart" href="/login"><span>Login</span></a>
                                    </v-list-item>
                                    <v-list-item class="nav-links__item" v-else style="min-width: 25%;">
                                        <v-menu>
                                            <template v-slot:activator="{ attrs, on }">
                                                <span v-bind="attrs" v-on="on">{{ user.NOMBRES + ' ' + user.APELLIDOS }}</span>
                                            </template>
                                            <v-list>
                                                <v-list-item >
                                                    <a @click="showIconCart" href="/profile"><span>Mi perfil</span></a>
                                                </v-list-item>
                                                <v-list-item >
                                                    <a @click="showIconCart"  href="#"><span @click="closeSession">Cerrar sesión</span></a>
                                                </v-list-item>
                                            </v-list>
                                        </v-menu>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                            <v-dialog v-model="showPopup" width="500" height="500" v-if="bandera">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-badge overlap :content="products.length" color="blue" :value="products.length" style="margin-right: 15px">
                                        <v-icon medium color="white" @click.native="!showPopup" v-bind="attrs" v-on="on">mdi-cart</v-icon>
                                    </v-badge>
                                </template>
                                <v-card class="mx-auto" max-width="100%">
                                    <v-card-title class="white--text blue darken-1">
                                        Carrito
                                        <v-spacer></v-spacer>
                                        <v-btn color="white" class="text--primary" fab small @click="showPopup = !showPopup">
                                            <v-icon>mdi-close</v-icon>
                                        </v-btn>
                                    </v-card-title>
                                    <v-card-title>Has seleccionado estos productos:</v-card-title>
                                    <v-virtual-scroll :items="products" :item-height="120" height="300px">
                                        <template v-slot="{ item, index }">
                                            <v-container>
                                                <v-col cols="12">
                                                    <v-row>
                                                        <v-col cols="3">
                                                            <v-img :src="'http://app.soldarco.com/Doom/Bootstrap/servicios/ShowImage.ashx?ID='+item.REFERENCIA+'&TIPO=FRENTE&COLOR=*&EMPRESA=02'"></v-img>
                                                        </v-col>
                                                        <v-col md="9">
                                                            <v-row>
                                                                <v-col md="5" style="padding: 0">
                                                                    <p class="product_name">{{ item.NOMBRE }}</p>
                                                                    <p class="product_brand"><b>Marca:</b> {{ item.MARCA }}</p>
                                                                    <p class="product_reference"><b>Referencia:</b> {{ item.REFERENCIA }}</p>
                                                                </v-col>
                                                                <v-col md="4">
                                                                    <v-btn small class="buttonMinus" v-if="item.quantity > 1" @click.prevent="deleteQuantity(index)"><v-icon>mdi-minus</v-icon></v-btn>
                                                                    <v-btn small color="black" class="buttonMinus" v-else v-on:click.prevent="deleteQuantity(index)"><v-icon color="white" size="12">mdi-close</v-icon></v-btn>
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
                                            
                                            <v-col md="12">
                                            <a @click="setBandera" href="/checkout">
                                                <v-btn  width="100%" class="paymentButton"><span class="goToPay">Ir a pagar</span><span class="totalCart">{{ new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(subtotal) }}</span></v-btn>
                                            </a>
                                            </v-col>
                                        </v-row>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                            <a @click="showIconCart" href="/registry" style="margin-right: 20px"><v-icon color="white" size="30">mdi-facebook</v-icon></a>
                            <a @click="showIconCart" href="/registry" style="margin-right: 20px"><v-icon color="white" size="30">mdi-linkedin</v-icon></a>
                            <a @click="showIconCart" href="/registry" style="margin-right: 20px"><v-icon color="white" size="30">mdi-youtube</v-icon></a>
                            <a @click="showIconCart" href="/registry" style="margin-right: 20px"><v-icon color="white" size="30">mdi-instagram</v-icon></a>
                        </div>
                    </v-row>
                </v-container>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data: () => ({
        businessSubmenu: [
            { name: 'Cultura Corporativa', url: '/business'},
            { name: 'Noticias', url: '/blog' },
            { name: 'Casos De Exito', url: '/successCase' },
            { name: 'Nuestros Aliados', url: '/our-partners' }
        ],
        automatization: [
            { name: 'Mesas de Corte CNC', url: '/product-menu/00001' },
            { name: 'Sistema de plasma alta productividad', url: '/product-menu/00004' },
            { name: 'Sistema de plasma alta definición HPR', url: '/product-menu/00005' },
            { name: 'Sistema de plasma X-Definition XPR', url: '/product-menu/00006' },
            { name: 'Mesas de corte Láser de fibra', url: '/product-menu/00007' },
            { name: 'Celdas robóticas', url: '/product-menu/00008' },
        ],
        hardCoatings: [
            { name: 'Alambres tubulares y Metalcored', url: '/product-menu/00009' },
            { name: 'Electrodos tubulares para soldadura manual', url: '/product-menu/00010' },
            { name: 'Soldadura aplicada', url: '/product-menu/00011' }
        ],
        plasmaCuttingSystems: [
            { name: 'Plasma X definition XPR', url: '/product-menu/00015'},
            { name: 'Plasma de Alta definición HPR', url: '/product-menu/00016'},
            { name: 'Plasma de alta productividad', url: '/product-menu/00017'},
            { name: 'Plasma convencional', url: '/product-menu/00018'},
        ],
        comsumablesForWeldingAndCutting: [
            { name: 'Consumibles plasma', url: '/product-menu/00019' },
            { name: 'Consumibles MIG/MAG', url: '/product-menu/00020' },
            { name: 'Consumibles TIG', url: '/product-menu/00021' },
            { name: 'Consumibles fluxcored', url: '/product-menu/00023' },
            { name: 'Consumibles láser', url: '/product-menu/00024' },
            { name: 'Consumibles oxicorte', url: '/product-menu/00025' },
            { name: 'Consumibles arco sumergido', url: '/product-menu/00026' }
        ],
        EquipmentAndAccesories: [
            { name: 'Equipos para soldar', url: '/product-menu/00027' },
            { name: 'Equipos para cortar plasma', url: '/product-menu/00028' },
            { name: 'Equipos para cortar oxigas', url: '/product-menu/00029' },
            { name: 'Accesorios para soldadura y corte', url: '/product-menu/00030' },
            { name: 'Partes y repuestos', url: '/product-menu/00031' },
        ],
        technicalSupport: [
            { name: 'Soporte técnico de mesas de corte', url: '/product-menu/00012' },
            { name: 'Soporte técnico de equipos', url: '/product-menu/00013' },
            { name: 'Soldadura aplicada', url: '/product-menu/00014' },
        ],
        services: [
            { name: 'Soporte técnico', url: '/technical-support' },
            { name: 'Soldadura aplicada', url: '/applied-welding' },
        ],
        cart: [],
        showPopup: false,
        screen: 0,
        carrito: [],
        refDelete: '',
        refDownQuantity: '',
        quantityDown: '',
        refDown: '',
        refUpQuantity: '',
        quantityUp: '',
        refUp: '',
    }),
    created() {
        this.getLocalProducts();
        this.getLocalUser();
        this.screen = screen.width;
        let carrito = localStorage.getItem('carrito api')  ? JSON.parse(localStorage.getItem('carrito api')) : []
        this.regCarrito = carrito.Datos
        console.log(this.regCarrito)
        this.showIconCart();
    },
    methods: {
        setBandera(){
            localStorage.setItem('bandera', JSON.stringify('bandera'))
        },
        showIconCart(){
            if(!this.bandera){
                localStorage.removeItem('bandera')
            }
        },
        
        getLocalUser(){
            let data = (localStorage.getItem('user'))
            if(data){
                this.$store.commit('login/getUser', JSON.parse(data));
            }else{
                let data = {}
                localStorage.setItem('user', JSON.stringify(data))
            }
        },

        getLocalProducts(){
            let data = (localStorage.getItem('cart'))
            if(data){
                this.$store.commit('cart/getCartLocal', JSON.parse(data));
            }else{
                let data = []
                localStorage.setItem('cart', JSON.stringify(data))
            }
        },

        showOrHiddenPopupCart: function(){
            this.showPopup = !this.showPopup
            console.log(this.showPopup)
        },

        closeSession(){
            localStorage.removeItem('user')
            window.location = '/'
        },

        addQuantity(reference){
            let carrito = JSON.parse(localStorage.getItem('carrito api'))
            this.regCarrito = carrito.Datos
            let details = []
            var reg = ''
            var quantity = ''
            this.products.map((item) => {
                if(item.REFERENCIA == reference){
                    reg = item.REFERENCIA
                    item.quantity++
                    quantity = item.quantity
                }
                if(this.regCarrito.length >= 2){
                    this.regCarrito.filter(element => {
                        if(element.REFERENCIA == reg){
                            this.refUpQuantity = element.REG
                            this.quantityUp = quantity
                            this.refUp = reg
                        }
                    })
                }else{
                    this.refUpQuantity = this.regCarrito.REG
                    this.quantityUp = quantity
                    this.refUp = reg
                }
                details.push(item)
            });
                var updatepedido = ""
                    updatepedido = updatepedido + "<PagXml>                                                         ";
                    updatepedido = updatepedido + "   <CorXml>                                                      ";
                    updatepedido = updatepedido + "      <TIPO>PARAMETRO</TIPO>                                     ";
                    updatepedido = updatepedido + "      <PROCESO>0117</PROCESO>                                    "; 
                    updatepedido = updatepedido + "      <SUCURSAL>02</SUCURSAL>                                 ";
                    updatepedido = updatepedido + "      <TIPODOC>PEW</TIPODOC>                                     ";  //FIJO     
                    updatepedido = updatepedido + "      <DOCUMENTO>@@TT1@@</DOCUMENTO>                             ";  //FIJO     
                    updatepedido = updatepedido + "      <USERID>"+this.user.CORREO+"</USERID>                    ";
                    updatepedido = updatepedido + "      <PASSWORD>"+this.user.CLAVE+"</PASSWORD>                 ";      
                    updatepedido = updatepedido + "      <ITEMS>"+this.refUp+"</ITEMS>                              ";
                    updatepedido = updatepedido + "      <COLOR>*</COLOR>                                           ";
                    updatepedido = updatepedido + "      <TALLA>*</TALLA>                                           ";
                    updatepedido = updatepedido + "      <CANTIDAD>"+this.quantityUp+"</CANTIDAD>                          ";
                    updatepedido = updatepedido + "      <REG>"+this.refUpQuantity+"</REG>                                         "; //si llega registro actualia       
                    updatepedido = updatepedido + "   </CorXml>                                                     ";
                    updatepedido = updatepedido + "</PagXml>                                                        ";
                    axios({
                        method: 'post',
                        url: 'http://app.soldarco.com/Doom/Bootstrap/Servicios/sweb_carrito.asmx/SetPedido',
                        data: "Parametros=" + updatepedido + "",
                        config: { headers: {'Content-Type': 'multipart/form-data' }}
                    })
                    .then(response => {
                        var cadenainicio = response.data,                            
                        inicio = 90,
                        subCadenainicio = cadenainicio.substring(inicio);

                        // console.log(subCadenainicio);

                        var cadena = subCadenainicio,
                        patron = "}</string>",
                        nuevoValor    = "",
                        nuevaCadena = cadena.replace(patron, nuevoValor);            
                        var pedidocarrito = JSON.parse(nuevaCadena);
                        localStorage.setItem('carrito api', JSON.stringify(pedidocarrito))
                    })
                    .catch(error => {
                        console.log(error);
                    });       
            this.products = details
        },

        deleteQuantity(index){
            let details = []
            let new_quantity = this.products[index].quantity - 1
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
                        var reg = ''
                        let carrito = JSON.parse(localStorage.getItem('carrito api'))
                        this.regCarrito = carrito.Datos
                        this.products.map((item, key) => {
                            if(key == index){
                                reg = item.REFERENCIA
                            }

                            if(this.regCarrito.length >= 2){
                                this.regCarrito.filter(element => {
                                    if(element.REFERENCIA == reg){
                                        this.refDelete = element.REG
                                    }
                                })
                                
                            }else{
                                this.refDelete = this.regCarrito.REG
                            }
                            
                        });
                        console.log(this.refDelete)
                        var delitem = ""
                            delitem = delitem + "<PagXml>                                                          ";
                            delitem = delitem + "   <CorXml>                                                       ";
                            delitem = delitem + "      <TIPO>PARAMETRO</TIPO>                                      ";
                            delitem = delitem + "      <PROCESO>0118</PROCESO>                                     ";
                            delitem = delitem + "      <SUCURSAL>02</SUCURSAL>                                  ";
                            delitem = delitem + "      <TIPODOC>PEW</TIPODOC>                                      ";
                            delitem = delitem + "      <DOCUMENTO>@@TT1@@</DOCUMENTO>                              ";
                            delitem = delitem + "      <USERID>"+this.user.CORREO+"</USERID>                     ";
                            delitem = delitem + "      <PASSWORD>"+this.user.CLAVE+"</PASSWORD>                  ";
                            delitem = delitem + "      <REG>"+this.refDelete+"</REG>                                                ";
                            delitem = delitem + "   </CorXml>                                                      ";
                            delitem = delitem + "</PagXml>                                                         ";
                            axios({
                                method: 'post',
                                url: 'http://app.soldarco.com/Doom/Bootstrap/Servicios/sweb_carrito.asmx/SetPedido',
                                data: "Parametros=" + delitem + "",
                                config: { headers: {'Content-Type': 'multipart/form-data' }}
                            })
                            .then(response => {
                                var cadenainicio = response.data,
                                inicio = 90,
                                subCadenainicio = cadenainicio.substring(inicio);
                                var cadena = subCadenainicio,
                                patron = "}</string>",
                                nuevoValor    = "",
                                nuevaCadena = cadena.replace(patron, nuevoValor);
                                var pedidocarrito = JSON.parse(nuevaCadena);
                                localStorage.setItem('carrito api', JSON.stringify(pedidocarrito))
                                location.reload();

                                this.banderapedido = pedidocarrito.Estado.Registros;
                                if (this.banderapedido == 0) {
                                    location.reload();
                                }

                            })
                            .catch(error => {
                                console.log(error);
                            });
                            
                            this.products.splice(index, 1)
                            localStorage.setItem('cart', JSON.stringify(this.products));
                    }
                });
            }else{
                var reg = ''
                var quantity = ''
                this.products.map((item, key) => {
                    if(key == index){
                        reg = item.REFERENCIA
                        item.quantity--
                        quantity = item.quantity
                    }
                    if(this.regCarrito.length >= 2){
                        this.regCarrito.filter(element => {
                            if(element.REFERENCIA == reg){
                                this.refDownQuantity = element.REG
                                this.quantityDown = quantity
                                this.refDown = reg
                            }
                        })
                    }else{
                        this.refDownQuantity = this.regCarrito.REG
                        this.quantityDown = quantity
                        this.refDown = reg
                    }
                                   
                    details.push(item)

                });
                var updatepedido = ""
                    updatepedido = updatepedido + "<PagXml>                                                         ";
                    updatepedido = updatepedido + "   <CorXml>                                                      ";
                    updatepedido = updatepedido + "      <TIPO>PARAMETRO</TIPO>                                     ";
                    updatepedido = updatepedido + "      <PROCESO>0117</PROCESO>                                    "; 
                    updatepedido = updatepedido + "      <SUCURSAL>02</SUCURSAL>                                 ";
                    updatepedido = updatepedido + "      <TIPODOC>PEW</TIPODOC>                                     ";  //FIJO     
                    updatepedido = updatepedido + "      <DOCUMENTO>@@TT1@@</DOCUMENTO>                             ";  //FIJO     
                    updatepedido = updatepedido + "      <USERID>"+this.user.CORREO+"</USERID>                    ";
                    updatepedido = updatepedido + "      <PASSWORD>"+this.user.CLAVE+"</PASSWORD>                 ";      
                    updatepedido = updatepedido + "      <ITEMS>"+this.refDown+"</ITEMS>                              ";
                    updatepedido = updatepedido + "      <COLOR>*</COLOR>                                           ";
                    updatepedido = updatepedido + "      <TALLA>*</TALLA>                                           ";
                    updatepedido = updatepedido + "      <CANTIDAD>"+this.quantityDown+"</CANTIDAD>                          ";
                    updatepedido = updatepedido + "      <REG>"+this.refDownQuantity+"</REG>                                         "; //si llega registro actualia       
                    updatepedido = updatepedido + "   </CorXml>                                                     ";
                    updatepedido = updatepedido + "</PagXml>                                                        ";
                    axios({
                        method: 'post',
                        url: 'http://app.soldarco.com/Doom/Bootstrap/Servicios/sweb_carrito.asmx/SetPedido',
                        data: "Parametros=" + updatepedido + "",
                        config: { headers: {'Content-Type': 'multipart/form-data' }}
                    })
                    .then(response => {
                        var cadenainicio = response.data,                            
                        inicio = 90,
                        subCadenainicio = cadenainicio.substring(inicio);

                        // console.log(subCadenainicio);

                        var cadena = subCadenainicio,
                        patron = "}</string>",
                        nuevoValor    = "",
                        nuevaCadena = cadena.replace(patron, nuevoValor);            
                        var pedidocarrito = JSON.parse(nuevaCadena);
                        localStorage.setItem('carrito api', JSON.stringify(pedidocarrito))
                    })
                    .catch(error => {
                        console.log(error);
                    });         
                this.products = details
            }
        },

        goToPay(){
            if(Object.keys(this.user).length > 0){
                this.$router.push('/checkout')
                this.showPopup = false
                // this.addcarrito()
            }else{
                this.$router.push('/login')
                this.showPopup = false

            }

        },

        // deleteCart(){
        //     this.$swal({
        //         text: '¿Estas seguro de eliminar el carrito?',
        //         icon: 'warning',
        //         showCancelButton: true,
        //         confirmButtonColor: '#1976D2',
        //         cancelButtonColor: '#d33',
        //         confirmButtonText: 'Si, eliminar!',
        //         cancelButtonText: 'No'
        //     }).then((result) => {
        //         if(result.value){
        //             localStorage.removeItem('cart')
        //             window.location = '/'
        //         }
        //     });
        // },

        closeSesion(){
            localStorage.removeItem('user')
            window.location = '/'
        }
    },
    watch: {
        cart: {
            handler: function(val){
                localStorage.setItem('cart', JSON.stringify(val))
                let data = localStorage.getItem('cart')
                if(data){
                    data = JSON.parse(data)
                    this.cart = data
                }
            },
            deep: true,
        },
    },
    computed: {
        products: {
            get(){
                 if(this.$store.state.cart.cartProducts.length > 0){
                    return this.$store.state.cart.cartProducts;
                }else{
                    return [];
                }
            },

            set(val){
                this.$store.commit('cart/updateCart', val)
            }

        },

        user: function(){
            if(this.$store.state.login.user){
                return this.$store.state.login.user
            }else{
                return {}
            }
        },

        subtotal: function(){
            let subtotal = 0
            if(this.products != null){
                for(let i = 0; i < this.products.length; i++){
                    subtotal += (parseInt(this.products[i].PRECIO.replace(',', '')) * parseInt(this.products[i].quantity))
                }
                return subtotal;
            }else{
                return subtotal;
            }

        },
        
        bandera(){
            var bandera = JSON.parse(localStorage.getItem('bandera'))
            if(bandera){
                return false;
            }else{
                return true;
            }
        }
    },
}
</script>
<style>
    .header {
        height: 7rem !important;
    }
</style>