const types = {
	SET_USER: "SET_USER"
}

const user = {
	state: {
		name: localStorage.getItem('USERNAME') || '',
		isAdmin: localStorage.getItem('ISADMIN') || false
	},
	mutations: {
		[types.SET_USER](state, payload){
			state.name = payload.name,
			state.isAdmin = payload.isAdmin		
		}
	},
	getters: {
		
	},
	actions: {
		
	},
	namespaced: true
}

export default user