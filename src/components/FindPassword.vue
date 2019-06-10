<template>
	<div id="findpassword">		    
        <div>
            <input v-model="email" class="login_text email-input" type="text" placeHolder="邮箱" >
        </div>
        <div>
            <input v-model="password" class="login_text" type="password" placeHolder="请输入您的密码" >
        </div>
        <div class="code-label">
            <input v-model="verify" class="login_text code-input" type="text" placeHolder="验证码" >
            <div class="code-btn" :class="{'dis-btn': disabled }" @touchstart="handleToVerify">{{this.verifyInfo}}</div>
        </div>
        <div class="login_btn" @touchstart="handleToFind">
            <!-- <input type="submit" value="登录"> -->
            重置密码
        </div>
        <div class="login_link">
            <router-link to="/mine/login">立即登陆</router-link>
            <router-link to="/mine/register">立即注册</router-link>
        </div>
	</div>
</template>

<script>
	import { verify, findPassword } from '@/api/request'
	import { messageBox } from "@/components/JS"
	export default{
		name: 'findpassword',
		data(){
			return {				
				password: '124556',
				email: '231231@qq.com',
				verify: '253274',
				verifyInfo: '获取验证码',
				disabled: false
			}
		},
		methods: {
			handleToVerify(){
				if(this.disabled) return 
				verify(this.email).then(res => {
					const status = res.data.status
					const _this = this   
					if(status === 0){
						messageBox({
	                        title: '验证码',
	                        content: '验证码发送成功',
                       		sure: '确定',
	                        handleOk(){
	                        	_this.countDown()
	                        }
	                    })
					}else{
						messageBox({
	                        title: '验证码',
	                        content: '验证码发送失败',
                       		sure: '确定'                     		                 	                        
	                    })
					}
				})
			},
			handleToFind(){
				findPassword({
					password: this.password,
					email: this.email,
					verify: this.verify
				}).then(res => {
					console.log(res)
					const status = res.data.status
					const _this = this  
					if(status === 0){
						messageBox({
	                        title: '修改密码',
	                        content: '修改密码成功',
                       		sure: '确定',                        
	                        handleOk(){
	                        	_this.$router.push({name: 'login'})
	                        }
	                    })
					}else{
						messageBox({
	                        title: '修改密码',
	                        content: '修改密码失败',
                       		sure: '确定',                        	                        
	                    })
					}
				})
			},
			countDown(){
				this.disabled = true
				let count = 5
				let timer = setInterval(() => {
					count--
					this.verifyInfo = `剩余${count}秒`
					if(count == 0){
						this.disabled = false
						this.verifyInfo = '发送验证码'
						clearInterval(timer)
					}
				}, 1000)
			}
		}
	}
</script>

<style lang="scss" scoped>
	#findpassword{
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
		.code-label{
			width:100%; 
			height: 54px; 
			display: flex;
			margin-bottom: 10px;
			.code-input{
				width:70%; 
				margin: 0;
			}
			.code-btn{
				flex: 1;
				height:54px;
				line-height: 54px;
				font-size: 18px;
				text-align: center;
				background:#e54847; 
				border-radius: 3px; 
				color: #fff;
				margin-left: 10px;
				&.dis-btn{
					background: #ec8989;
				}
			}
		}
	}
</style>