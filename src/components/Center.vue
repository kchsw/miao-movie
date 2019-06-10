<template>
	<div id="center">
		<h1>个人中心</h1>
		<div class="userinfo">
			当前用户：<img class="avatar" :src="$store.state.user.avatar" alt=""> {{$store.state.user.name}}<a @touchstart="handleToLogout">退出</a>
		</div>
		<div class="identifiy"> 
			用户身份: <span v-if="$store.state.user.isAdmin">管理员 <a href="/admin" target="_blank">进入管理后台</a></span><span v-else>普通会员</span>
		</div>
		<div class="upload">
			<input type="file" name="file" value="上传头像" @change="handleToUpload"><br>	
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	import { messageBox } from "@/components/JS"
	import { Logout, uploadAvatar } from '@/api/request'
	export default{
		name: 'center',
		methods: {
			handleToLogout(){
				Logout().then(res => {
					const status = res.data.status
					if(status === 0){
						this.$store.commit('user/SET_USER', { name: '', isAdmin: false, avatar: '' })
						localStorage.removeItem('USERNAME')
						localStorage.removeItem('ISADMIN')
						localStorage.removeItem('AVATAR')
						this.$router.push({
							name: 'login'
						})
					}else{
						
					}
				})
			},
			handleToUpload(e){
				const file = e.target.files[0]
				const param = new FormData()
				param.append('file', file, file.name)
				uploadAvatar(param).then(res => {
					const status = res.data.status
					const _this = this
					if(status === 0){
						messageBox({
	                        title: '信息',
	                        content: '头像上传成功',
                       		sure: '确定',                        
	                        handleOk(){	                        	
	                        	_this.$store.commit('user/SET_AVATAR', res.data.data.avatar)
	                        	localStorage.setItem('AVATAR', res.data.data.avatar)
	                        }
	                    })
					}else{
						messageBox({
	                        title: '信息',
	                        content: '头像上传失败',
                       		sure: '确定'
	                    })
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
						localStorage.setItem('AVATAR', res.data.data.avatar)
						vm.$store.commit('user/SET_USER', { 
							name: res.data.data.username, 
							isAdmin: res.data.data.isAdmin,
							avatar: res.data.data.avatar 
						})
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
			.avatar{
				width: 60px;
			}
		}
		.upload{
			margin-top: 20px;
			input{
				font-size: 22px;
			}
		}
	}
</style>