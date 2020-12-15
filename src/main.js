import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import mock from './mock-data.js'
// import Home from  './views/Home';
// import About from  './views/About';
// import Contact from  './views/Contact';
// import NotFound from  './views/NotFound';
//

import './scss/main.scss';

Vue.config.productionTip = false

let data = {
  photos: mock,
  saved: [  {
      id: 20,
      name: "Fake Data",
      image: "1.jpg"
    },]
}


new Vue({
  router,
  vuetify,
  data,
  render: h => h(App)
}).$mount('#app')
