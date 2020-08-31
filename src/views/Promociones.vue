<template>
    <div id="promo">
        <v-card flat align-center >
            <v-img max-height="300"  class=" align-center" src="../assets/promo.jpg">
                    <v-card-subtitle class="font-weight-bold display-4 text-right secondary--text">Promociones.</v-card-subtitle>
                    <v-card-text class="secondary--text text-right">Promociones exclusivas solo para los usuarios que dispongan de una cuenta.</v-card-text>
            </v-img> 
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
          <v-btn
        dark
        color="secondary"
        @click="snackbar = true"
      >
        Obtener Cupon
      </v-btn>
  
      <v-snackbar
        v-model="snackbar"
        :vertical="vertical"
      >Necesitas estar Logeado.
        <v-btn
          color="yellow"
          text
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </v-snackbar>  
		<v-card-text class="white--text overline"> a</v-card-text>
	  	</v-card>	
	</v-col>
</v-layout>
    </div>
</template>


<script>

export default {


  data () {
    return {
         snackbar: false,
    vertical: true,
      infos: [
        {name:'Nuevo Usuario', icon: 'card_giftcard',  src: require('../assets/ha.jpg'), text: 'Una oferta para nuevos usuarios. Los nuevos usuarios no tendran la necesidad de pagar por la comision al realizar la reserva.'}, 
        {name:'Recomendacion.', icon: 'card_giftcard',  text: 'Se ofrecera un descuento de 10 soles al precio original al recomendar a 5 amigos distintos.', src: require('../assets/sh.jpg')},
        {name:'10% para Motos', icon: 'card_giftcard',  text: 'Valido para todos los locales cercanos a Surco. Se aplicara un 10% de descuento para los servicios de motos.', src: require('../assets/mot.jpg')},
        {name:'20% para locales de Farenet', icon: 'card_giftcard', text: '20% de descuento al precio total a las reservas para servicios de Farenet. Cantidad de Stock: 50 ofertas.', src: require('../assets/off.jpeg')},
      ],
    }
  },
}
</script>