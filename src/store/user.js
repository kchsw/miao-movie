const types = {
	SET_USER: "SET_USER",
	SET_AVATAR: "SET_AVATAR"
}

const user = {
	state: {
		name: localStorage.getItem('USERNAME') || '',
		isAdmin: localStorage.getItem('ISADMIN') || false,
		avatar: localStorage.getItem('AVATAR') || 'http://localhost:3000/uploads/default.jpg',
	},
	mutations: {
		[types.SET_USER](state, payload){
			state.name = payload.name,
			state.isAdmin = payload.isAdmin,
			state.avatar = payload.avatar		
		},
		[types.SET_AVATAR](state, avatar){
			state.avatar = avatar		
		},

	},
	getters: {
		
	},
	actions: {
		
	},
	namespaced: true
}

export default user