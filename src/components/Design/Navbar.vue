<template>
    <nav>
        <v-app-bar text app>
        <v-app-bar-nav-icon class="accent--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
            <router-link color="accent" to="/">
            <v-toolbar-title class="text-uppercase accent--text">
                <span class="font-italic font-weight-light">Revi </span>
                <span class="font-weight-bold">FAST</span>
            </v-toolbar-title>
            </router-link>
            <v-spacer></v-spacer>
            <v-btn text color="accent" router to="/faq">FAQ</v-btn>
            <v-btn text color="accent" router to="/afiliados">Afiliados</v-btn>
            <v-btn text color="accent" router to="/promocion">Promociones</v-btn>
            <v-spacer></v-spacer>
            <v-btn color="primary" class="mx-5" router to="/reservaahora">Reservar ahora</v-btn>
            <v-btn class="font-weight-bold text subtitle-2" outlined color="primary"  router to="/registro">
                <span>Registro </span>
                <v-icon right>input</v-icon>
            </v-btn>
        </v-app-bar>

        <v-navigation-drawer app v-model="drawer" color="secondary darken-1">
            <v-list>
                <p class="text-center subtitle-1 font-italic font-weight-medium yellow--text text-uppercase"  > ReviFast - Admi Mode.</p>
                <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                    <v-list-item-action>
                        <v-icon class="info--text">{{ link.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title class="info--text">{{ link.text }} </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

    </nav>
</template>

<script>
import ReservarAhora from '@/views/ReservarAhora'
import FAQ from '@/views/FAQ.vue'
import Afiliados from '@/views/Afiliados.vue'
import Registrar from '@/views/Registrar.vue'


export default {

  views: {
    Afiliados,
    ReservarAhora,
    FAQ,
    Registrar,
  },

    data(){
        return{
            drawer:false,
            links:[
                {icon: 'notification_important', text: 'Inicio', route: '/'},
                {icon: 'business_center', text: 'Empresas', route: '/empresas'},
                {icon: 'apartment', text: 'Locales', route: '/locales'},
                {icon: 'schedule', text: 'Horarios', route: '/horarios'},
                {icon: 'build', text: 'Servicios', route: '/servicios'},
                {icon: 'card_giftcard', text: 'Promociones', route: '/promociones'},
                {icon: 'insert_invitation', text: 'Reservas', route: '/reservas'},
                {icon: 'airline_seat_recline_extra', text: 'Conductores', route: '/conductores'},
                {icon: 'commute', text: 'Vehiculos', route: '/vehiculos'},
            ]
        }
    }


}


</script>