import Vue from 'vue';
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

const vuetify = new Vuetify({
    iconfont:'md',
  theme: {
    themes: {
      light: {
        primary: '#ffeb3b',
        secondary: '#627264',
        anchor: '#32021F',
      },
    },
  },
})

export default vuetify