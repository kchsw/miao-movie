<template>
	<div id="center">
		<h1>个人中心</h1>
		<div class="userinfo">
			当前用户：{{$store.state.user.name}}<a @touchstart="handleToLogout">退出</a>
		</div>
		<div class="identifiy">
			用户身份: <span v-if="$store.state.user.isAdmin">管理员 <a href="/admin" target="_blank">进入管理后台</a></span><span v-else>普通会员</span>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	import { Logout } from '@/api/request'
	export default{
		name: 'center',
		methods: {
			handleToLogout(){
				Logout().then(res => {
					const status = res.data.status
					if(status === 0){
						this.$store.commit('user/SET_USER', { name: '', isAdmin: false })
						localStorage.removeItem('USERNAME')
						localStorage.removeItem('ISADMIN')
						this.$router.push({
							name: 'login'
						})
					}else{
						
					}
				})
			}
		},
		beforeRouteEnter(to, from, next){
			axios.get('/api2/users/getUser').then(res => {
				const status = res.data.status
				if(status === 0){
					next(vm => {
						localStorage.setItem('USERNAME', res.data.data.username)
						localStorage.setItem('ISADMIN', res.data.data.isAdmin)
						vm.$store.commit('user/SET_USER', { name: res.data.data.username, isAdmin: res.data.data.isAdmin })
					})
				}else{
					next('/mine/login')
				}
			})
		}
	}
</script>

<style lang="scss" scoped>
	#center{
		h1{
			text-align: center;
		}
		a{
			text-decoration: none; 
			margin:0 5px; 
			font-size: 24px; 
			color:#e54847;
		}
		.userinfo{
			margin-bottom: 20px;
		}
	}
</style>