import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';

import { NPCTalk } from "./util/utils"

import choice from '@/components/choice.vue';
import answer from '@/components/answer.vue';

Vue.config.productionTip = false;
Vue.component('choice', choice);
Vue.component('answer', answer);

Vue.prototype.$NPCTalk = NPCTalk;

declare module 'vue/types/vue' {
	interface Vue {
		$NPCTalk: any
	}
}

new Vue({
	router,
	store,
	render: (h) => h(App)
}).$mount('#app');
