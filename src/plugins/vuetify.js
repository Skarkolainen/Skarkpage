import Vue from 'vue';
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

const vuetify = new Vuetify({
    iconfont:'md',
  theme: {
    themes: {
      light: {
        primary: '#ffeb3b',
        secondary: '#800000',
        anchor: '#000000',
      },
    },
  },
})

export default vuetify