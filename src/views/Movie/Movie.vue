<template>
	<div id="movie">
		<m-header>
  		</m-header>
  		<div class="menu-bar">
  			<router-link tag="div" to="/movie/city" class="city menu-item">
                <span>北京</span><i class="iconfont icon-lower-triangle"></i>
            </router-link>         
            <router-link tag="div" to="/movie/playing" class="hot-item menu-item">正在热映</router-link>
            <router-link tag="div" to="/movie/coming" class="hot-item menu-item">即将上映</router-link>
            <router-link tag="div" to="/movie/search" class="search menu-item">
                <i class="iconfont icon-sousuo"></i>
            </router-link>
  		</div>
  		<router-view/>
	</div>
</template>

<script>
	import MHeader from "@/components/MHeader"
	export default {
		name: 'movie',
		components: {
			MHeader
		}
	}
</script>

<style lang="scss" scoped>
	#movie{
		height: 100%;
		width: 100%;
		font-size: 26px;
		.menu-bar{
			width: 100%; 
			height: 50px;
			display: flex;
    		justify-content: space-around;
    		border-bottom: 2px solid #eee;
    		.menu-item{
    			height: 100%;
    			box-sizing: border-box;
    			border-bottom: 2px solid #fff;
    			display: flex;
    			align-items: center;
    			&.router-link-active{
	    			border-bottom: 2px solid red;
	    		}
    		}
    		.city{
    			font-size: 22px;
    		}
    		.search{
    			.iconfont{
    				font-size: 28px;
    			}
    		}
		}
	}
</style>
