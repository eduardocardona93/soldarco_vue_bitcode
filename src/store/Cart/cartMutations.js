const mutations = {
    addToCartLocal: (state, product) => {
        state.cartProducts.push(product);
        console.log(typeof(state.cartProducts))
        localStorage.setItem('cart', JSON.stringify(state.cartProducts));
        console.log(product)
    },

    getCartLocal: (state, product) => {
        state.cartProducts = product
    },

    updateCart: (state, product) => {
        state.cartProducts = product
        console.log('product')
        localStorage.setItem('cart', JSON.stringify(state.cartProducts));
    }
}

export default mutations;