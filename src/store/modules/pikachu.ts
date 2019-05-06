import { Commit } from 'vuex';

const state: any = {
	direction: 'normal'
};

const mutations: any = {
	saveDirection(states: any, params: object) {
		states.direction = params;
	}
};

const actions: any = {
	saveDirectionFN(context: { commit: Commit }, params: object) {
		context.commit('saveDirection', params);
	}
};

export default {
	namespaced: true,
	state,
	mutations,
	actions
};
