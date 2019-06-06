const types = {
	SET_CITY: "SET_CITY"
}

const city = {
	state: {
		city: localStorage.getItem('CITY') || '北京',
		id: JSON.parse(localStorage.getItem('CITY_ID')) || 1
	},
	mutations: {
		[types.SET_CITY](state, payload){
			state.city = payload.nm
			state.id = payload.id
		}
	},
	getters: {
		
	},
	actions: {
		
	},
	namespaced: true
}

export default city