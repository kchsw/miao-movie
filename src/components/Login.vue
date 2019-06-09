<template>
	<div id="login">
		<div>
            <input v-model="username" class="login_text" type="text" placeHolder="账户名/手机号/Email" >
        </div>
        <div>
            <input v-model="password" class="login_text" type="password" placeHolder="请输入您的密码" >
        </div>
        <div class="login_btn" @touchstart="handleToLogin">
            <!-- <input type="submit" value="登录"> -->
            登陆
        </div>
        <div class="login_link">
            <router-link to="/mine/register">立即注册</router-link>
            <router-link to="/mine/findpassword">找回密码</router-link>
        </div>
	</div>
</template>

<script>
	import { Login } from '@/api/request'
	import { messageBox } from "@/components/JS"
	export default {
		name: 'login',
		data(){
			return {
				username: 'kchsw',
				password: '654321'
			}
		},
		methods: {
			handleToLogin(){
				Login({
					username: this.username,
					password: this.password
				}).then(res => {
					const status = res.data.status
					const _this = this
					if(status === 0){
						messageBox({
	                        title: '登陆',
	                        content: '登陆成功',
                       		sure: '确定',                        
	                        handleOk(){
	                        	_this.$router.push({name: 'center'})
	                        }
	                    })
					}else{
						messageBox({
	                        title: '登陆',
	                        content: '登陆失败',	                       
	                        sure: '确定',
	                        handleOk(){   
	                        }
	                    })
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	#login{
		width: 400px;
		margin: 340px auto 0;
		.login_text{
			width:100%; 
			height: 54px; 
			// border:none; 
			border: 1px solid #e5e5e5;
			margin-bottom: 10px; 
			outline: none; 
			text-indent: 10px;
			font-size: 24px;
			box-sizing: border-box;
			padding: 4px 10px;
			color: #999;
		}
		.login_btn{
			height:54px;
			line-height: 54px;
			font-size: 24px;
			text-align: center;
			margin:10px 0;
			background:#e54847; 
			border-radius: 3px; 
			color: #fff;
		}
		.login_link{
			display: flex; 
			justify-content:space-between;
			a{
				text-decoration: none; 
				margin:0 5px; 
				font-size: 22px; 
				color:#e54847;
			}
		}
	}
</style>