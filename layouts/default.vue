<template>
  <v-app>
    <div class="main-wrapper">
      <div class="navbar">
        <Navigation />
      </div>

      <main class="page-content">
        <nuxt />
      </main> 
    </div>
  </v-app>
</template>

<script>
import Navigation from '../components/Navigation'

export default {
  components: {
    Navigation
  }
}
</script>

<style lang="less">
  @import 'vuetify/dist/vuetify.min.css';
  @import '@mdi/font/css/materialdesignicons.min.css';

  .main-wrapper {
    display: grid;
    grid-template-areas: "nav page";
    grid-template-columns: 300px 1fr;
    grid-template-rows: 100vh;
  }

  .navbar {
    grid-area: nav;
  }

  .page-content {
    grid-area: page;
    padding: 20px 30px;
    background-color: #fff3e0;
    overflow: auto;
  }
</style>
