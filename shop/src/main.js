import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
import '@/assets/css/reset.css'
import '@/assets/js/rem.js'

import { Tabbar, TabbarItem, Icon,Swipe, SwipeItem,NavBar,Tab, Tabs,Field } from 'vant';

Vue.use(Tabbar).use(TabbarItem).use(Icon).use(NavBar).use(Swipe).use(SwipeItem).use(Tab).use(Tabs).use(Field);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
