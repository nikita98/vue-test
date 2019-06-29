import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'vue-material-design-icons/styles.css'

import TwitterIcon from "vue-material-design-icons/Twitter.vue";
import FacebookIcon from "vue-material-design-icons/Facebook.vue";
import GithubIcon from "vue-material-design-icons/GithubCircle.vue";
import Dribbble from "vue-material-design-icons/Dribbble.vue";
import Account from "vue-material-design-icons/Account.vue";
import Settings from "vue-material-design-icons/Settings.vue";
import Bell from "vue-material-design-icons/Bell.vue";
import Email from "vue-material-design-icons/Email.vue";
import CardsHeart from "vue-material-design-icons/CardsHeart.vue";
import Chat from "vue-material-design-icons/Chat.vue";
import Plus from "vue-material-design-icons/Plus.vue";
import More from "vue-material-design-icons/More.vue";
import Magnify from "vue-material-design-icons/Magnify.vue";
import Close from "vue-material-design-icons/Close.vue";

Vue.component("twitter-icon", TwitterIcon);
Vue.component("facebook-icon", FacebookIcon);
Vue.component("github-icon", GithubIcon);
Vue.component("dribbble-icon", Dribbble);
Vue.component("account-icon", Account);
Vue.component("settings-icon", Settings);
Vue.component("bell-icon", Bell);
Vue.component("email-icon", Email);
Vue.component("cards-heart-icon", CardsHeart);
Vue.component("chat-icon", Chat);
Vue.component("plus-icon", Plus);
Vue.component("more-icon", More);
Vue.component("magnify-icon", Magnify);
Vue.component("close-icon", Close);


Vue.config.productionTip = false

new Vue({
	render: h => h(App),
}).$mount('#app');

