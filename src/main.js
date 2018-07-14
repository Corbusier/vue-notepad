import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import VueToast from 'vue2-toast'
import 'vue2-toast/lib/toast.css'
import Store from './store/index'

Vue.use(VueToast, {
	defaultType: 'center'
})

Vue.use(Vuex)

new Vue({
	el: '#app',
	components: {App},
	template: '<App/>',
	store: Store
})