<template>
  <div>
    <v-app>
      <!-- <top-bar-component></top-bar-component> -->
      <navbar-component></navbar-component>
      <router-view style="margin-top: 182px;"></router-view>
      <footer-component></footer-component>
    </v-app>
  </div>
</template>
<script>
import FooterComponent from './components/Layouts/Footer';
// import TopBarComponent from './components/Layouts/TopBar';
import NavbarComponent from './components/Layouts/NavBar';

export default {
  components: {NavbarComponent, FooterComponent }
}
</script>
