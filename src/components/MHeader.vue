<template>
	<div id="m-header">
		<slot></slot>{{title}} 
	</div>
</template>

<script>
	export default{
		name: 'mheader',
		props: {
			title: {
				type: String,
				default: '喵の影'
			}
		}
	}
</script>

<style lang="scss" scoped>
	#m-header{
		width: 100%;
		line-height: 50px;
		height: 50px;
		font-size:26px;
		background: #e54847;
		text-align: center;
		color: #fff;
		font-weight: bold;
		position: relative;
		span{
			position: absolute;
			left: 10px;
			.iconfont{
				font-size: 24px;
			}
		}
	}
</style>