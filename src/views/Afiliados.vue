<template>
    <div id="app">
  <v-app id="inspire">
    <v-card flat align-center >
           <v-img max-height="300"  class=" align-center" src="../assets/afi.jpg">
                <v-card-subtitle class="font-weight-bold display-4 text-center info--text">Afiliados.</v-card-subtitle>
                <v-card-text class="info--text text-center">Estos son nuestros afiliados mas confiables.</v-card-text>
          
           </v-img> 
        </v-card>
    <div class="mx-12">
  
      <v-timeline
      >
        <v-timeline-item
          v-for="it in item"
          :key="it"
        >
          <template v-slot:icon>
            <v-avatar>
              <img :src="it.src">
            </v-avatar>
          </template>
          <span slot="opposite">{{ it.name }}</span>
          <v-card class="elevation-2">
            <v-card-title class="headline">{{ it.tit }}</v-card-title>
            <v-card-text>{{ it.text }}</v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </div>
  </v-app>
</div>
</template>

<script>
export default {
  
  data () {
    return {
      
      item: [
        {name:'Afiliado 1.', tit:'Farenet', src: require('../assets/far.png'), text: 'FARENET es la empresa con mayor presencia a nivel nacional. Nuestra misión es contribuir a la Seguridad Vial en el Perú y a la reducción de los índices de contaminación en el medio ambiente a través del servicio de Revisiones Técnicas Vehiculares. De esta manera garantizamos las óptimas condiciones para la circulación de los vehículos de nuestros clientes.'}, 
        {name:'Afiliado 2.', tit:'Revisiones Tecnicas del Peru', text: 'Revisiones Técnicas del Perú es una institución que tiene como objetivo principal brindar el servicio de Revisiones Técnicas Vehiculares .La cobertura de sus servicios se desarrolla en la ciudad de Lima, pero proyecta sus actividades a nivel nacional.Contamos con nuestras propias plantas equipadas con la más alta tecnología al servicio de la sociedad. Además de contar en nuestro personal con un selecto grupo de profesionales altamente capacitados para el desarrollo de nuestra actividad.', src: require('../assets/rtp.png')},
        {name:'Afiliado 3.', tit:'Omega S.A.', text: 'Somos una empresa con sólida experiencia en el suministro de instrumentos científicos, equipos y productos para laboratorio que busca la excelencia y la satisfacción de las necesidades y expectativas de sus clientes, entregando productos y servicios de calidad certificada, trabajando de manera responsable con el medio ambiente y garantizando la seguridad y salud de nuestro personal. Nuestra amplia variedad de productos le proporcionará todo lo que usted necesita para la labor que realiza.', src: require('../assets/omg.png')},
      ],
    }
  },
}

</script>