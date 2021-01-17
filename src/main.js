import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from 'element-ui'; 

import 'element-ui/lib/theme-chalk/index.css';
import VueI18n from 'vue-i18n';
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale:localStorage.getItem('languageSet')||'en',    // 语言标识
  messages: {
    'en': require('./assets/language/en'),    // 英文语言包
    'tc': require('./assets/language/tc'),   // 繁体文语言包
    'sc': require('./assets/language/sc'),   // 繁体文语言包
  },
})

Vue.use(ElementUI);
Vue.config.productionTip = false;

import VueTouch from 'vue-touch';
Vue.use(VueTouch, {name: 'v-touch'});
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
