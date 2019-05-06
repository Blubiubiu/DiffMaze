import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'begin',
			component: () => import('./views/Begin.vue')
		},
		//one part
		{
			path: '/one_part',
			name: 'one_part',
			component: () => import('./views/one_part/index.vue')
		},
		{
			path: '/one_part/2077',
			name: '2077',
			component: () => import('./views/one_part/2077.vue')
		},
		{
			path: '/one_part/part_1',
			name: 'part_1',
			component: () => import('./views/one_part/part_1.vue')
		},
		{
			path: '/one_part/part_2',
			name: 'part_2',
			component: () => import('./views/one_part/part_2.vue')
		},
		{
			path: '/one_part/part_3',
			name: 'part_3',
			component: () => import('./views/one_part/part_3.vue')
		},
		{
			path: '/one_part/part_4',
			name: 'part_4',
			component: () => import('./views/one_part/part_4.vue')
		},
		{
			path: '/one_part/part_5_1',
			name: 'part_5_1',
			component: () => import('./views/one_part/part_5_1.vue')
		},
		{
			path: '/one_part/part_5_2',
			name: 'part_5_2',
			component: () => import('./views/one_part/part_5_2.vue')
		},
		{
			path: '/one_part/part_6',
			name: 'part_6',
			component: () => import('./views/one_part/part_6.vue')
		},
		{
			path: '/one_part/part_7',
			name: 'part_7',
			component: () => import('./views/one_part/part_7.vue')
		},
		//feeder
		{
			path: '/feeder_part/feeder_part_1',
			name: 'feeder_part_1',
			component: () => import('./views/feeder_part/part_1.vue')
		},
        //end
        {
			path: '/end/end',
			name: 'end',
			component: () => import('./views/end/end_0.vue')
		},
		{
			path: '/end/end_1',
			name: 'end_1',
			component: () => import('./views/end/end_1.vue')
		},
		{
			path: '/end/end_2',
			name: 'end_2',
			component: () => import('./views/end/end_2.vue')
		},
		//eggs
		{
			path: '/eggs/eggs_1',
			name: 'eggs_1',
			component: () => import('./views/eggs/eggs_1.vue')
		}
	]
});
