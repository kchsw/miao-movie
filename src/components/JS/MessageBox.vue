<template>
	<div id="msg-wrapper">
		<div class="messageBox">
	        <h2 class="msg-title">{{ title }}</h2>
	        <p class="msg-content">{{ content }}</p>
	        <div class="msg-confirm">
	            <div class="option" @touchstart="handleCancel">{{ cancel }}</div>
	            <div class="option" @touchstart="handleOk">{{ sure }}</div>
	        </div>
	    </div>
	</div>
    
</template>

<script>
	export default {
	    name : 'MessageBox'
	}
</script>

<style lang="scss" scoped>
	#msg-wrapper{
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		background: rgba(0, 0, 0, .5);
		display: flex;
		justify-content: center;
		align-items: center;

		.messageBox{
			width:320px;
			background: #fff;
			text-align: center;
			border-radius: 5px;
			font-size: 26px;
			.msg-title{
				line-height: 50px;
			}
			.msg-content{
				padding: 20px 0;
			}
			.msg-confirm{
				display: flex;
				justify-content: center;
				align-items: center;
				border-top:1px #bbb solid;
				.option{
					flex: 1;
					padding: 15px 0;
					font-size: 22px;
					border-right:1px #bbb solid;
					&:last-child{
						border:none;
					}
				}
			}
		}
	}
</style>

