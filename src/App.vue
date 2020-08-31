<template>
  <v-app class="grey lighten-4">
  <Navbar/>
   

    <v-content>
  
      <router-view>home</router-view>
  </v-content>
  
  <Footer/>
  
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import Navbar from '@/components/Design/Navbar'
import NavbarAdmi from '@/components/Design/NavbarAdmi'
import Footer from '@/components/Design/Footer'
import ReservarAhora from '@/views/ReservarAhora.vue'
import FAQ from '@/views/FAQ.vue'
import Afiliados from '@/views/Afiliados.vue'
import Registrar from '@/views/Registrar.vue'

export default {
  name: 'App',

  components: {
    HelloWorld,
    Navbar,
    NavbarAdmi,
    Footer,
  },
  views:{
    Afiliados,
    ReservarAhora,
    FAQ,
    Registrar,
  },

  data: () => ({
    //
  }),
  
};
</script>
