import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    { path: '/', name: 'Home', component: () => import('../views/Home/Home.vue') },
    { path: '/business', name: 'Business', component: () => import('../views/Business/Business.vue') },
    { path: '/blog', name: 'blog', component: () => import('../views/News/News.vue')  },
    { path: '/successCase', name: 'successCase', component: () => import('../views/SuccessCases/SuccessCases.vue')  },
    { path: '/detail-new/:id', name: 'detail-new', component: () => import('../views/News/components/Detail-new.vue')  },
    { path: '/detailCases/:id', name: 'detailCases', component: () => import('../views/SuccessCases/Components/DetailCases.vue')  },
    { path: '/our-partners', name: 'our-partners', component: () => import('../views/Our-Partners/Our-Partners.vue')  },
    { path: '/shop', name: 'Shop', component: () => import('../views/Shop/Shop.vue')},
    { path: '/login', name: 'Login', component: () => import('../views/Login/Login.vue') },
    { path: '/registry', name: 'Registry', component: () => import('../views/Registry/Registry.vue') },
    { path: '/contact-us', name: 'contact-us', component: () => import('../views/Contact/Contact.vue') },
    { path: '/technical-support', name: 'technical-support', component: () => import('../views/Services/TechnicalSupport.vue') },
    { path: '/applied-welding', name: 'applied-welding', component: () => import('../views/Services/Applied-welding.vue') },
    { path: '/profile', name: 'Profile', component: () => import('../views/Profile/Profile.vue') },
    { path: '/product-menu/:id', name: 'Products', component: () => import('../views/Productos/Products.vue') },

    { path: '/product-detail/:id', name: 'product-detail', component: () => import('../views/ProductDetail/ProductDetail.vue') },
    { path: '/checkout', name: 'checkout', component: () => import('../views/Checkout/Checkout.vue') },
];

const router = new VueRouter({
    base: '/',
    mode: 'history',
    routes
});

export default router;