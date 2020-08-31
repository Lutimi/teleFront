<template>
  <div class="home" >
    
    <v-parallax height="550" src= "../assets/s1.png"></v-parallax>


    <v-container>
    </v-container>
    <v-card >
    <div>
        <v-img src="../assets/texture.png"></v-img>
    </div>
    </v-card>

    <v-card color="secondary" flat class="mx-0">
        <v-row no-gutters>
          <v-col>
            <v-card color="secondary" flat class="">
              <div class="d-flex flex-no-wrap justify-space-between">
               <v-img src="../assets/part2.png" width="700" max-width="700"></v-img>
              <div class="mx-7 mt-12">
                <v-card-title class="display-2 accent--text text-uppercase">Menos filas,</v-card-title>
                  <v-card-subtitle class="display-2 primary--text text-left text-uppercase">Más tiempo.</v-card-subtitle>
                  <v-card-text class="headline info--text text-right font-weight-light">El servicio de reserva de citas en el Servicio tecnico ya esta aqui. Ya no tendras la necesidad de dirigirte personalmente a los servicios tecnicos. Prueba la reserva de citas ahora.
                  </v-card-text>
              </div>
            </div>
            </v-card>
          
          </v-col>
          
        </v-row>
    </v-card>
    <v-card flat>
    <div>
        <v-img src="../assets/b1.png"></v-img>
    </div>
    </v-card>
    <v-card flat>
      <v-img src="../assets/b2.png" class="align-center text-center" >
                <v-card-subtitle class="display-3 error--text font-weight-black">¿Tienes dudas o preguntas?</v-card-subtitle>
                <v-card-text class="headline white--text">¡Revisa nuestra sección de preguntas frecuentes!</v-card-text>
                <v-btn color="primary" dark router to="/faq">
                <v-icon class="mr-2" >insert_emoticon</v-icon> Ir ahora.</v-btn>
                </v-img>
      
    </v-card>
    <v-card flat>
    <div>
        <v-img src="../assets/b3.png"></v-img>
    </div>
    </v-card>
    <v-layout row wrap>
      <v-col cols="3" mx-7 v-for="info in infos"
      :key="info.name">
		    <v-card class="text-center ma-3">
			    <v-responsive class="pt-4">
			      <v-img max-height="100" :src="info.src">
            </v-img>
			    </v-responsive>
          <v-card class="info--text" flat>.</v-card>
			    <v-icon my-4 x-large color="primary">{{ info.icon }}</v-icon>
          <v-card-text> 
				    <div class="title">{{ info.name }}</div>
            <div>{{ info.text }}</div>
			    </v-card-text>
	  	</v-card>	
	</v-col>
</v-layout>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Banner from '@/assets/Banner.png'



export default {
  name: 'home',
  components: {
    HelloWorld
  },


  props: {
    
  },
  data () {
    return {
      items: [
        {
          src: Banner,
        },
      ],
      infos: [
        {name:'Ahorro de Tiempo.', icon: 'schedule', route: '/reservas', src: require('../assets/sms.jpg'), text: 'ReviFast, te permite ahorrar tiempo al evitar las colas. Gracias a su sistema de reserva de citas en el Servicio técnico.'}, 
        {name:'Recordatorios.', icon: 'today', route: '/', text: 'Cansado de olvidar fechas importantes para tu vehiculo? Ya no mas. ReviFast te brinda la opcion de recordatorio, cada vez que se acerca una fecha importante, Revifast te lo alertara.', src: require('../assets/rem.jpg')},
        {name:'Promociones.', icon: 'card_giftcard', route: '/promociones', text: 'Para personas que tienen una cuenta en Revifast le brindamos propmociones exclusivas. Podran ahorrar hasta un 50% de precio total gracias a los cuupones que brindamos.', src: require('../assets/off.jpeg')},
        {name:'Fácil uso.', icon: 'card_giftcard', route: '/promociones', text: 'Revifast es sencillo, evitamos ponerle dificultad a la hora de realizar las reservas. Por ello, Revifast brinda un formulario simple y con pasos sencillos que completar.', src: require('../assets/comp.jpg')},
      ],
    }
  },
}
</script>
