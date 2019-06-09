<template>
	<div id="admin">
		<el-container class="admin-container">
		  <el-header>喵喵管理后台, 欢迎&nbsp<span class="username">{{$store.state.user.name}}</span></el-header>
		  <el-container>
		    <el-aside width="200px">
		    	<el-menu
			      default-active="1"			      
			      class="el-menu-vertical-demo">		    
			      <el-menu-item index="1">
			        <i class="el-icon-menu"></i>
			        <router-link to="/admin/user" tag="span" slot="title">用户管理</router-link>
			      </el-menu-item>
			      <el-menu-item index="2">
			        <i class="el-icon-document"></i>
			        <router-link to="/admin/movie-admin" tag="span" slot="title">电影管理</router-link>
			      </el-menu-item>
			      <el-menu-item index="3">
			        <i class="el-icon-setting"></i>
			        <router-link to="/admin/cinema-admin" tag="span" slot="title">影院管理</router-link>
			      </el-menu-item>
			    </el-menu>
		    </el-aside>
		    <el-main>
		    	<router-view/>
		    </el-main>
		  </el-container>
		</el-container>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		name: 'admin',
		data(){
			return {

			}
		},
		beforeRouteEnter(to, from, next){
			axios.get('/api2/admin').then(res => {
				const status = res.data.status
				if(status === 0){
					next()
				}else{
					next('/mine/login')
				}
			})
		}
	}
</script>

<style lang="scss" scoped>
	#admin{
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		z-index: 30;
		background: #fff;
		.admin-container{
			height: 100%;
		}
		.el-header, .el-footer {
		    background-color: #B3C0D1;
		    color: #333;
		    // text-align: center;
		    line-height: 60px;
		    .username{
		    	color: #fff;
		    }
		  }
		  
		  .el-aside {
		    background-color: #D3DCE6;
		    color: #333;
		    text-align: center;
		   	// line-height: 200px;
		  }
		  
		  .el-main {
		    background-color: #E9EEF3;
		    color: #333;
		    text-align: center;
		    // line-height: 160px;
		  }
	}
</style>
