<template>
	<div id="tabbar">
		<ul class="tab">
            <router-link tag="li" to="/movie" class="tab-item">
                <i class="iconfont icon-dianying"></i>
                <p>电影</p>
            </router-link>
            <router-link tag="li" to="/cinema" class="tab-item">
                <i class="iconfont icon-yingyuan"></i>
                <p>影院</p>
            </router-link>
            <router-link tag="li" to="/mine" class="tab-item">
                <i class="iconfont icon-wode"></i>
                <p>我的</p>
            </router-link>
        </ul>
	</div>
</template>

<script>
	export default{
		name: 'mfooter'
	}
</script>

<style lang="scss" scoped>
	#tabbar{
		width: 100%;
		height: 60px;
		background: #f4f4f4;
        position: fixed;
        left: 0;
        bottom: 0;
		.tab{
			height: 60px;
			display: flex;
			justify-content: center;
    		align-items: center;	
    		.tab-item{
    			flex: 1;
    			text-align: center;
    			font-size: 22px;   
    			.iconfont{
    				font-size: 28px;
    			}
    			&.active{
    				color: #f03d37;
    			}
    			&.router-link-active{
    				color: #f03d37;
    			}
    		}
		}
	}
</style>