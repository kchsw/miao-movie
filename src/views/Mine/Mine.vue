<template>
	<div id="mine">
		<m-header title="我の喵">
  		</m-header>
		<login/>
	</div>
</template>

<script>
	import MHeader from "@/components/MHeader"
	import Login from "@/components/Login"
	export default {
		name: 'mine',
		components: {
			MHeader,
			Login
		}
	}
</script>

<style lang="scss" scoped>
	
</style>