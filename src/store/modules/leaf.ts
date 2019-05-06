import { Commit } from 'vuex';

const state: any = {
	style: []
};

const mutations: any = {
	saveStyle(states: any, params: object) {
		states.style = params;
	}
};

const actions: any = {
	saveStyleFN(context: { commit: Commit }, params: object) {
		context.commit('saveStyle', params);
	}
};

export default {
	namespaced: true,
	state,
	mutations,
    actions
};
