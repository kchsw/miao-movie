<template>
	<div id="mine">
		<m-header title="我の喵">
  		</m-header>
		<router-view/>
	</div>
</template>

<script>
	import MHeader from "@/components/MHeader"
	export default {
		name: 'mine',
		components: {
			MHeader,		
		}
	}
</script>

<style lang="scss" scoped>
	
</style>