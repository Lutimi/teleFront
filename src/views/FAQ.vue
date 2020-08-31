<template>
    <div class="FAQ">
        <v-card flat align-center >
           <v-img max-height="300"  class=" align-center" src="../assets/faq.jpg">
                <v-card-subtitle class="font-weight-bold display-4 text-center info--text">Help Center.</v-card-subtitle>
                <v-card-text class="info--text text-center">Busca cualquier consulta que tengas.</v-card-text>
                
           <v-card class="mx-auto" max-width="300" max-height="60" color="info">
                <v-text-field class="mx-5" color="secondary" prepend-icon="search" label="Search" ></v-text-field>
           </v-card>
           </v-img> 
        </v-card>

        <v-card color="accent">
             <v-card-title class="accent--text"> .</v-card-title>
            <v-card-subtitle></v-card-subtitle>
            <v-card-subtitle class="font-weight-bold display-3 text-center secondary--text">F A Q </v-card-subtitle>
            <v-card-text class="text-center">Frequently Asked Questions</v-card-text>
  
      <v-tabs
        v-model="tab"
        background-color="transparent"
        color="info "
        grow
      >
        <v-tab
          v-for="item in items"
          :key="item"
          class="font-weight-bold"
        >
          {{ item.name }}
        </v-tab>
      </v-tabs>
  
      <v-tabs-items v-model="tab">
        <v-tab-item
          v-for="item in items"
          :key="item"
        >
          <v-card flat color="accent">
            <v-card-text class="subtitle-1">{{ item.text }}</v-card-text>
          <v-card-title class="accent--text">a</v-card-title>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>

    </div>
</template>

<script>
import ReservarAhora from '@/views/ReservarAhora'
import FAQ from '@/views/FAQ.vue'


export default {

  views: {
    ReservarAhora,
    FAQ,
  },

    data(){
        return{
              tab: null,
      items: [
        {name: 'Sobre Nosotros', text: ' Revifast es una pagina con el objetivo de ayudar al usuario a reducir el tiempo que le toma en realizar el tramite de los papeles para su vehiculo. Por ello, esta pagina permite al usuario el realizar reservas de citas a la empresa deseada.Tenemos mas de 100 locales afiliados a esta pagina, por ello las opciones para realizar la reserva son amplias y variadas.',}, 
        {name: 'Promociones', text: 'Las promociones son un recurso exclusivo quue solo las personas que tengan una cuenta en esta pagina pueden gozar. Las promociones brindaran cupones cada cierto tiempo que se podra utilizar el momento que el uusuario desee. Pueden haber hasta descuentos de 50% en un servicio en especifico.'}, 
        {name: 'Reservas', text: 'Las reservas de citas es el valor principal de la pagina web. Es algo que brinda un valor agregado. ReviFast permite realizar reservas de citas en el servicio Tecnico, para evitar las molestas colas y el tiempo desperdiciado al esperar el turno que le corresponde. Para ahorrar aquella incomodidad, brindamos este servicio de reservas, que de una manera sencilla hara quue tu experiencia en el servicio tecnico sea cada vez mejor.'}, 
        {name: 'Rango', text: 'Actualmente, nuestro servicio de reserva de citas en el servicio tecnico solo abarcan el departamento de Lima, los distritos de Lima son nuestro rango. Sin embargo, en un futuro este servicio se ira extendiendo hasta abarcar todo el Peru.'},
      ],
        }
    }


}


</script>