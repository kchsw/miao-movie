const types = {
	SET_CITY: "SET_CITY"
}

const city = {
	state: {
		city: localStorage.getItem('CITY'),
		id: localStorage.getItem('CITY_ID')
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