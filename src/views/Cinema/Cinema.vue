<template>
	<div id="cinema">
		<m-header title="喵の院">
  		</m-header>
  		<div class="cinema-menu">
			<div class="menu-item">
				全城 <i class="iconfont icon-lower-triangle"></i>
			</div>
			<div class="menu-item">
				品牌 <i class="iconfont icon-lower-triangle"></i>
			</div>
			<div class="menu-item">
				特色 <i class="iconfont icon-lower-triangle"></i>
			</div>
		</div>
		<cinema-list/>
	</div>
</template>

<script>
	import MHeader from "@/components/MHeader"
	import CinemaList from "@/components/CinemaList"
 	export default {
		name: 'cinema',
		components: {
			MHeader,
			CinemaList
		}
	}
</script>

<style lang="scss" scoped>
	#cinema{
		.cinema-menu{
			width: 100%; 
			height: 50px; 
			border-bottom:1px solid #e6e6e6; 
			display: flex; 
			justify-content:space-around; 
			align-items:center; 
			background:white;
			.menu-item{
				font-size: 24px;
				.iconfont{
					font-size: 24px;
				}
			}
		}
	}
</style>