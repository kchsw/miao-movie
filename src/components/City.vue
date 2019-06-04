<template>
	<div id="city">
		<div class="city-list">
			<div class="area">
				<div class="title">热门城市</div>
				<ul class="hot-list">
					<li class="hot-item"><div class="city-item">北京</div></li>
                    <li class="hot-item"><div class="city-item">北京</div></li>
                    <li class="hot-item"><div class="city-item">北京</div></li>
                    <li class="hot-item"><div class="city-item">北京</div></li>
                    <li class="hot-item"><div class="city-item">北京</div></li>
				</ul>
			</div>
			<div class="area">
				<div class="title">A</div>
				<ul class="city-list">
					<li class="city">阿拉善盟</li>
                    <li class="city">鞍山</li>
                    <li class="city">安庆</li>
                    <li class="city">安阳</li>
				</ul>
			</div>
			<div class="area">
				<div class="title">A</div>
				<ul class="city-list">
					<li class="city">阿拉善盟</li>
                    <li class="city">鞍山</li>
                    <li class="city">安庆</li>
                    <li class="city">安阳</li>
				</ul>
			</div>
			<div class="area">
				<div class="title">A</div>
				<ul class="city-list">
					<li class="city">阿拉善盟</li>
                    <li class="city">鞍山</li>
                    <li class="city">安庆</li>
                    <li class="city">安阳</li>
				</ul>
			</div>
			<div class="area">
				<div class="title">A</div>
				<ul class="city-list">
					<li class="city">阿拉善盟</li>
                    <li class="city">鞍山</li>
                    <li class="city">安庆</li>
                    <li class="city">安阳</li>
				</ul>
			</div>
		</div>
		<div class="city-index">
			<ul class="index-list">
				<li class="index-item">A</li>
				<li class="index-item">B</li>
				<li class="index-item">C</li>
				<li class="index-item">D</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'city'
	}
</script>

<style lang="scss" scoped>
	#city{
		height: 100%;
		overflow: auto;
		&::-webkit-scrollbar{
			background-color:transparent;
    		width:0;
		}
		.city-list{
			.area{
				.title{
					padding-left: 15px; 
					line-height: 40px; 
					font-size: 22px; 
					background:#F0F0F0; 
				}
				.hot-list{
					padding: 10px 50px 10px 10px;
					overflow: hidden;
					.hot-item{
						float: left;
						width: 33.333333%;
						.city-item{
							margin: 10px;
						    padding: 10px 0;
						    text-align: center;
						    border: 1px solid #ccc;
						    border-radius: 5px;
						    font-size: 22px;
						    color: #666;						 
						}
					}				
				}
				.city-list{
					.city{
						padding-left: 15px; 
						line-height: 50px; 
						border-bottom: 1px solid #eaeaea;
						color: #666;
					}
				}
			}
		}
		.city-index{
			position: absolute;
		    top: 0;
		    bottom: 0;
		    right: 0;
		    width: 40px;
		    text-align: center;
		    display: flex;
		    justify-content: center;
		    align-items: center;
		    .index-item{
		    	line-height: 40px;
    			color: #e54847;
		    }
		}
	}
</style>