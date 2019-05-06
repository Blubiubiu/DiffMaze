import { Commit } from 'vuex';

const state: any = {
	talkVal: '',
	timer: null
};

const mutations: any = {
	saveTalkVal(states: any, params: object) {
		states.talkVal = params;
	},
	setTimer(states: any, params: any) {
		states.timer = params;
	}
};

const actions: any = {
	saveTalkValFN(context: { commit: Commit }, params: object) {
		context.commit('saveTalkVal', params);
	},
	setTimerFN(context: { commit: Commit }, params: any) {
		context.commit('setTimer', params);
	}
};

const getters: any = {
    getTimer(states: any) {
        return states.timer;
    }
}

export default {
	namespaced: true,
	state,
	mutations,
    actions,
    getters
};
