import Vue from 'vue'
import Login from './Login.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'vue-material-design-icons/styles.css'

import Check from "vue-material-design-icons/Check.vue";
import TwitterIcon from "vue-material-design-icons/Twitter.vue";
import GooglePlus from "vue-material-design-icons/GooglePlus.vue";

Vue.component("check-icon", Check);
Vue.component("twitter-icon", TwitterIcon);
Vue.component("facebook-icon", FacebookIcon);
Vue.component("google-plus-icon", GooglePlus);

Vue.config.productionTip = false

var firebaseConfig = {
	apiKey: "AIzaSyAPTETqL8ZkhQE3hBRt1cLAMv_gC6dGNns",
	authDomain: "vue-test-cd4c7.firebaseapp.com",
	databaseURL: "https://vue-test-cd4c7.firebaseio.com",
	projectId: "vue-test-cd4c7",
	storageBucket: "",
	messagingSenderId: "440287325664",
	appId: "1:440287325664:web:d28276832bbb7b7e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
	render: h => h(Login),
}).$mount('#login');

