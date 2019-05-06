import Vue from 'vue';
import Vuex from 'vuex';

import npc from './modules/npc';
import pikachu from './modules/pikachu';
import leaf from './modules/leaf'

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		npc,
        pikachu,
        leaf
	}
});
