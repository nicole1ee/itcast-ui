import Vue from 'vue'
import App from './App.vue'
import LyBotton from './components/button.vue'
 
Vue.config.productionTip = false



Vue.component(LyBotton.name,LyBotton)

new Vue({
  render: h => h(App)
}).$mount('#app')
