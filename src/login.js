import Vue from 'vue'
import Login from './Login.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'vue-material-design-icons/styles.css'

import Check from "vue-material-design-icons/Check.vue";
import TwitterIcon from "vue-material-design-icons/Twitter.vue";
import FacebookIcon from "vue-material-design-icons/Facebook.vue";
import GooglePlus from "vue-material-design-icons/GooglePlus.vue";

Vue.component("check-icon", Check);
Vue.component("twitter-icon", TwitterIcon);
Vue.component("facebook-icon", FacebookIcon);
Vue.component("google-plus-icon", GooglePlus);

Vue.config.productionTip = false

new Vue({
	render: h => h(Login),
}).$mount('#login');

