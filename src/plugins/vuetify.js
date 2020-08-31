import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);
// src/plugins/vuetify.js

const opts = {}

export default new Vuetify({
  theme: {
      options: {
        customProperties: true,
      },
    themes: {
      light: {
        primary: '#F5593D',
        secondary: '#151F20',
        accent: '#CAAC90',
        error: '#ffba00',
        info: '#EEEEEE',
        success: '#4CAF50',
        warning: '#FFC107'
      },
    },
  },
});
