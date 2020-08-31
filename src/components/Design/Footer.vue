<template>
    <v-footer
      dark
      padless
    >
      <v-card
        flat
        tile
        class="primary lighten-1 white--text text-center"
      >
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 white--text"
            icon
          >
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-text>
  
        <v-card-text class="white--text pt-0">
Revifast es una pagina con el objetivo de ayudar al usuario a reducir el tiempo que le toma en realizar el tramite de los papeles para su vehiculo. Por ello, esta pagina permite al usuario el realizar reservas de citas a la empresa deseada.Tenemos mas de 100 locales afiliados a esta pagina, por ello las opciones para realizar la reserva son amplias y variadas.        </v-card-text>
  
        <v-divider></v-divider>
  
        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>ReviFast</strong>
        </v-card-text>
      </v-card>
    </v-footer>
</template>

<script>
export default {
    data(){
        return{
            icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-instagram',
    ],
        }
    }


}
</script>