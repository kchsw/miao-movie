<template>
  <div id="app">
  	<div class="content">
  		<keep-alive>
  			<router-view/>
  		</keep-alive>	
  	</div>
    <m-footer></m-footer>
  </div>
</template>

<script>
	import MFooter from "./components/MFooter"
	export default{
		components: {
			MFooter
		}
	}
</script>

<style lang="scss" scoped>
#app{
	font-size: 22px;
	height: 100%;
	.content{
		// height: calc(100vh - 60px);
		height: 100%;
		// margin-bottom: 50px;
	}
}
</style>
