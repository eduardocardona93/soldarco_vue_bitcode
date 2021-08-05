<template>
    <div>
        <v-container fluid class="container-shop">
            <v-row>
                <v-col md="3">
                    <v-list-group :value="false" class="store-categories">
                        <template v-slot:activator>
                            <span class="group_title">Categorias</span>
                        </template>
                        <v-list shaped>
                            <v-list-item-group v-model="categorie" color="primary">
                                <v-list-item v-for="(item, index) in categories" :key="index" @click="getSubCategories(item.CODIGO)">
                                    <v-list-item-content class="contentCheck">
                                        <v-list-item-subtitle >{{ item.NOMBRE }}</v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list-item-group>
                        </v-list>
                    </v-list-group>
                    <v-list-group v-model="subCategory" color="primary" class="store-categories" v-if="subCategories.length > 0">
                        <template v-slot:activator>
                            <span class="group_title">Subcategorias</span>
                        </template>
                        <v-list shaped>
                            <v-list-item-group v-model="category" color="primary">
                                <v-list-item v-for="(subCategory, index) in subCategories" :key="index" @click="filterProducts(subCategory.CODIGO)">
                                    <v-list-item-content class="contentCheck">
                                        <v-list-item-subtitle>{{ subCategory.NOMBRE }}</v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list-item-group>
                        </v-list>
                    </v-list-group>
                    <v-list-group v-model="brand" color="primary" class="store-categories">
                        <template v-slot:activator>
                            <span class="group_title">Marcas</span>
                        </template>
                        <v-list shaped>
                            <v-list-item-group v-model="brand" color="primary">
                                <v-list-item v-for="(brand, index) in brands" :key="index" @click="filterProducts(null,brand.CODIGO)">
                                    <v-list-item-content class="contentCheck">
                                        <v-list-item-subtitle>{{ brand.NOMBRE }}</v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list-item-group>
                        </v-list>
                    </v-list-group>
                </v-col>
                <v-col md="8">
                    <v-col cols="12">
                        <v-row></v-row>
                    </v-col>
                    <grid-list-product :products="products" v-if="grid"></grid-list-product>
                    <list-product v-else></list-product>
                </v-col>
            </v-row>
        </v-container>            
    </div>
</template>
<script>
import GridListProduct from './components/GridListProduct';
import axios from 'axios';
export default {
    components: { GridListProduct },
    data: () => ({
        items: [
            { text: 'Inicio', disabled: false, href: '/' },
            { text: 'Tienda', disabled: true, href: '/shop' }
        ],
        categorie: '',
        category: '',
        brand: '',
        categories: [],
        subCategories: [],
        subCategory: '', 
        brands: [],
        products: [],
        filtroCategoria: '',
        activeFirstGroup: false,
        min: 0,
        max: 5000000,
        slider: 40,
        range: [ 0, 5000000 ],
        grid: true,
        benched: 0,
        marca: null
    }),
    mounted(){
        this.getCategories();
        this.getBrands();
        this.getProducts();
    },
    methods: {
        /**
         * Esta funcion sirve para obtener las categorias por producto.
         */
        getCategories: function(){
            this.filtroCategoria = ""
            var consulta = ""
                consulta = consulta + "<PagXml>                                                          ";
                consulta = consulta + "   <CorXml>                                                       ";
                consulta = consulta + "      <TIPO>PARAMETRO</TIPO>                                      ";
                consulta = consulta + "      <PROCESO>0126</PROCESO>                                     ";
                consulta = consulta + "      <SUCURSAL>02</SUCURSAL>                                     ";
                consulta = consulta + "      <FILTRO><![CDATA[" + this.filtroCategoria + "]]></FILTRO>     ";
                consulta = consulta + "   </CorXml>                                                      ";
                consulta = consulta + "</PagXml>                                                         ";
            axios({
                method: 'post',
                url: 'http://app.soldarco.com/Doom/Bootstrap/Servicios/sweb_blog_imagen_info_categorias.asmx/FiltroBusquedaJson',
                data: "Parametros=" + consulta + "",
            })
            .then(response => {
                var startString = response.data;
                var inicio = 90,
                SubCadenaInicio = startString.substring(inicio);

                var cadena = SubCadenaInicio;
                var patron = "}</string>";
                var nuevoValor = "";
                var newString = cadena.replace(patron,nuevoValor);
                var aux = JSON.parse(newString);
                this.categories = aux.Datos
            })
        },

        /**
         * Esta funcion sirve para poder obtener las subcategorias que tiene cada uno de las categorias.
         * @param string categorie con la categoria seleccionada.
         */
        getSubCategories: function(category){
            var consulta = ""
                consulta = consulta + "<PagXml>                                                          ";
                consulta = consulta + "   <CorXml>                                                       ";
                consulta = consulta + "      <TIPO>PARAMETRO</TIPO>                                      ";
                consulta = consulta + "      <PROCESO>0128</PROCESO>                                     "; //registro de usuario
                consulta = consulta + "      <SUCURSAL>02</SUCURSAL>                                     ";
                consulta = consulta + "      <FILTRO><![CDATA[CATEGORIA=" + category + "]]></FILTRO>     ";
                consulta = consulta + "   </CorXml>                                                      ";
                consulta = consulta + "</PagXml>                                                         ";
            axios({
                method: 'post',
                url: 'http://app.soldarco.com/Doom/Bootstrap/Servicios/sweb_blog_imagen_info_categorias.asmx/FiltroBusquedaJson',
                data: "Parametros=" + consulta + "",
            })
            .then(response => {
                var startString = response.data;
                var inicio = 90,
                SubCadenaInicio = startString.substring(inicio);

                var cadena = SubCadenaInicio;
                var patron = "}</string>";
                var nuevoValor = "";
                var newString = cadena.replace(patron,nuevoValor);
                var aux = JSON.parse(newString);
                this.subCategories = aux.Datos
                localStorage.setItem('category', JSON.stringify(category))
            })   
        },


        getBrands: function(){
            var consulta = ""
            consulta = consulta + "<PagXml>                                ";
            consulta = consulta + "   <CorXml>                             ";
            consulta = consulta + "      <TIPO>PARAMETRO</TIPO>            ";
            consulta = consulta + "      <CODIGO>0121</CODIGO>             ";
            consulta = consulta + "      <PAGINA>0</PAGINA>             ";
            consulta = consulta + "      <PAGINAS>0</PAGINAS>           ";
            consulta = consulta + "      <NOMBRE>PROCESO</NOMBRE>          ";
            consulta = consulta + "      <ORDEN>1</ORDEN>                  ";
            consulta = consulta + "      <VALOR><![CDATA[EMPRESA.CONTACTOS]]></VALOR>   ";
            consulta = consulta + "      <FILTRO><![CDATA[" + this.filtroCategoria + "]]></FILTRO>     ";
            consulta = consulta + "   </CorXml>                             ";
            consulta = consulta + "</PagXml>                               ";
            axios({
                method: 'POST',
                url: 'http://app.soldarco.com/Doom/Bootstrap/Servicios/sweb_carrito.asmx/FiltroBusquedaJson',
                data: "Parametros=" + consulta + ""
            }).then(response => {
                var startString = response.data;
                var inicio = 90,
                SubCadenaInicio = startString.substring(inicio);

                var cadena = SubCadenaInicio;
                var patron = "}</string>";
                var nuevoValor = "";
                var newString = cadena.replace(patron,nuevoValor);
                var aux = JSON.parse(newString);
                this.brands = aux.Datos
            })

        },

        filterProducts: function(subCategory, marca){
            var brand = JSON.parse(localStorage.getItem('brand'))
            var category = JSON.parse(localStorage.getItem('category'))
            var subcategory = JSON.parse(localStorage.getItem('subcategory'))
            
            
            if(subcategory == subCategory){
                this.filtroCategoria = ''
                // console.log(category)
                let consulta = ""
                consulta = consulta + "<PagXml>                                ";
                consulta = consulta + "   <CorXml>                             ";
                consulta = consulta + "      <TIPO>PARAMETRO</TIPO>            ";
                consulta = consulta + "      <CODIGO>0111</CODIGO>             ";
                consulta = consulta + "      <PAGINA>1</PAGINA>             ";
                consulta = consulta + "      <PAGINAS>0</PAGINAS>           ";
                consulta = consulta + "      <NOMBRE>PROCESO</NOMBRE>          ";
                consulta = consulta + "      <ORDEN>1</ORDEN>                  ";
                consulta = consulta + "      <VALOR><![CDATA[EMPRESA.CONTACTOS]]></VALOR>   ";
                consulta = consulta + "      <FILTRO><![CDATA["+ this.filtroCategoria +"]]></FILTRO>     ";
                consulta = consulta + "   </CorXml>                                                      ";
                consulta = consulta + "</PagXml>                                                         ";
                axios({
                    method: 'post',
                    url: 'http://app.soldarco.com/Doom/Bootstrap/Servicios/sweb_carrito.asmx/FiltroBusquedaJson',
                    data: "Parametros=" + consulta + ""
                }).then(response => {
                    var startString = response.data;
                    var inicio = 90,
                    SubCadenaInicio = startString.substring(inicio);

                    var cadena = SubCadenaInicio;
                    var patron = "}</string>";
                    var nuevoValor = "";
                    var newString = cadena.replace(patron,nuevoValor);
                    var aux = JSON.parse(newString);
                    if(aux.Datos != undefined){
                        if(aux.Datos.length >= 2){
                            this.products = aux.Datos
                        }else{
                            this.products = []
                            this.products.push(aux.Datos)
                        }
                    }else{
                        this.products = []
                    }
                    localStorage.removeItem('subcategory')
                    console.log(this.products)
                })
                console.log('igual')
            }else if(brand == marca){
                console.log(this.marca)
                this.filtroCategoria = ''
                // console.log(category)
                let consulta = ""
                consulta = consulta + "<PagXml>                                ";
                consulta = consulta + "   <CorXml>                             ";
                consulta = consulta + "      <TIPO>PARAMETRO</TIPO>            ";
                consulta = consulta + "      <CODIGO>0111</CODIGO>             ";
                consulta = consulta + "      <PAGINA>1</PAGINA>             ";
                consulta = consulta + "      <PAGINAS>0</PAGINAS>           ";
                consulta = consulta + "      <NOMBRE>PROCESO</NOMBRE>          ";
                consulta = consulta + "      <ORDEN>1</ORDEN>                  ";
                consulta = consulta + "      <VALOR><![CDATA[EMPRESA.CONTACTOS]]></VALOR>   ";
                consulta = consulta + "      <FILTRO><![CDATA["+ this.filtroCategoria +"]]></FILTRO>     ";
                consulta = consulta + "   </CorXml>                                                      ";
                consulta = consulta + "</PagXml>                                                         ";
                axios({
                    method: 'post',
                    url: 'http://app.soldarco.com/Doom/Bootstrap/Servicios/sweb_carrito.asmx/FiltroBusquedaJson',
                    data: "Parametros=" + consulta + ""
                }).then(response => {
                    var startString = response.data;
                    var inicio = 90,
                    SubCadenaInicio = startString.substring(inicio);

                    var cadena = SubCadenaInicio;
                    var patron = "}</string>";
                    var nuevoValor = "";
                    var newString = cadena.replace(patron,nuevoValor);
                    var aux = JSON.parse(newString);
                    if(aux.Datos != undefined){
                        if(aux.Datos.length >= 2){
                            this.products = aux.Datos
                        }else{
                            this.products = []
                            this.products.push(aux.Datos)
                        }
                    }else{
                        this.products = []
                    }
                    this.marca = null
                    this.subCategory = subCategory
                    

                    console.log(this.products)
                })
            }if(marca != undefined){
                console.log(marca)
                this.filtroCategoria = 'MARCA=' + marca
                // console.log(category)
                let consulta = ""
                consulta = consulta + "<PagXml>                                ";
                consulta = consulta + "   <CorXml>                             ";
                consulta = consulta + "      <TIPO>PARAMETRO</TIPO>            ";
                consulta = consulta + "      <CODIGO>0111</CODIGO>             ";
                consulta = consulta + "      <PAGINA>1</PAGINA>             ";
                consulta = consulta + "      <PAGINAS>0</PAGINAS>           ";
                consulta = consulta + "      <NOMBRE>PROCESO</NOMBRE>          ";
                consulta = consulta + "      <ORDEN>1</ORDEN>                  ";
                consulta = consulta + "      <VALOR><![CDATA[EMPRESA.CONTACTOS]]></VALOR>   ";
                consulta = consulta + "      <FILTRO><![CDATA["+ this.filtroCategoria +"]]></FILTRO>     ";
                consulta = consulta + "   </CorXml>                                                      ";
                consulta = consulta + "</PagXml>                                                         ";
                axios({
                    method: 'post',
                    url: 'http://app.soldarco.com/Doom/Bootstrap/Servicios/sweb_carrito.asmx/FiltroBusquedaJson',
                    data: "Parametros=" + consulta + ""
                }).then(response => {
                    var startString = response.data;
                    var inicio = 90,
                    SubCadenaInicio = startString.substring(inicio);

                    var cadena = SubCadenaInicio;
                    var patron = "}</string>";
                    var nuevoValor = "";
                    var newString = cadena.replace(patron,nuevoValor);
                    var aux = JSON.parse(newString);
                    if(aux.Datos != undefined){
                        if(aux.Datos.length >= 2){
                            this.products = aux.Datos
                        }else{
                            this.products = []
                            this.products.push(aux.Datos)
                        }
                    }else{
                        this.products = []
                    }
                this.marca = marca

                    console.log(`marca: ${ this.marca }`)
                    localStorage.setItem(brand, JSON.stringify(marca))
                    this.subCategory = subCategory
                    console.log(this.products)
                })
            }else{
                if(subcategory != subCategory){
                    this.filtroCategoria = 'CATEGORIA='+ category +', SUBCATEGORIA='+ subCategory ;
                    // console.log(category)
                    let consulta = ""
                    consulta = consulta + "<PagXml>                                ";
                    consulta = consulta + "   <CorXml>                             ";
                    consulta = consulta + "      <TIPO>PARAMETRO</TIPO>            ";
                    consulta = consulta + "      <CODIGO>0111</CODIGO>             ";
                    consulta = consulta + "      <PAGINA>1</PAGINA>             ";
                    consulta = consulta + "      <PAGINAS>0</PAGINAS>           ";
                    consulta = consulta + "      <NOMBRE>PROCESO</NOMBRE>          ";
                    consulta = consulta + "      <ORDEN>1</ORDEN>                  ";
                    consulta = consulta + "      <VALOR><![CDATA[EMPRESA.CONTACTOS]]></VALOR>   ";
                    consulta = consulta + "      <FILTRO><![CDATA["+ this.filtroCategoria +"]]></FILTRO>     ";
                    consulta = consulta + "   </CorXml>                                                      ";
                    consulta = consulta + "</PagXml>                                                         ";
                    axios({
                        method: 'post',
                        url: 'http://app.soldarco.com/Doom/Bootstrap/Servicios/sweb_carrito.asmx/FiltroBusquedaJson',
                        data: "Parametros=" + consulta + ""
                    }).then(response => {
                        var startString = response.data;
                        var inicio = 90,
                        SubCadenaInicio = startString.substring(inicio);

                        var cadena = SubCadenaInicio;
                        var patron = "}</string>";
                        var nuevoValor = "";
                        var newString = cadena.replace(patron,nuevoValor);
                        var aux = JSON.parse(newString);
                        if(aux.Datos != undefined){
                            if(aux.Datos.length >= 2){
                                this.products = aux.Datos
                            }else{
                                this.products = []
                                this.products.push(aux.Datos)
                            }
                        }else{
                            this.products = []
                        }
                        
                        localStorage.setItem('subcategory', JSON.stringify(subCategory))
                        console.log(this.products)
                    })
                }   
            }
        },

        getProducts: function(){
            var consulta = ""
            consulta = consulta + "<PagXml>                                ";
            consulta = consulta + "   <CorXml>                             ";
            consulta = consulta + "      <TIPO>PARAMETRO</TIPO>            ";
            consulta = consulta + "      <CODIGO>0111</CODIGO>             ";
            consulta = consulta + "      <PAGINA>1</PAGINA>             ";
            consulta = consulta + "      <PAGINAS>0</PAGINAS>           ";
            consulta = consulta + "      <NOMBRE>PROCESO</NOMBRE>          ";
            consulta = consulta + "      <ORDEN>1</ORDEN>                  ";
            consulta = consulta + "      <VALOR><![CDATA[EMPRESA.CONTACTOS]]></VALOR>   ";
            consulta = consulta + "      <FILTRO><![CDATA[" + this.filtroCategoria + "]]></FILTRO>     ";
            consulta = consulta + "   </CorXml>                                               ";
            consulta = consulta + "</PagXml>                                                  ";
            axios({
                method: 'post',
                url: 'http://app.soldarco.com/Doom/Bootstrap/Servicios/sweb_carrito.asmx/FiltroBusquedaJson',
                data: "Parametros=" + consulta + ""
            }).then(response => {
                var startString = response.data;
                var inicio = 90,
                SubCadenaInicio = startString.substring(inicio);

                var cadena = SubCadenaInicio;
                var patron = "}</string>";
                var nuevoValor = "";
                var newString = cadena.replace(patron,nuevoValor);
                var aux = JSON.parse(newString);
                this.products = aux.Datos
                console.log()
            })
        }
    },
}
</script>