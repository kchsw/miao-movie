<template>
	<div id="coming">
		<div class="movie">
			<div class="movie-item">
				<div class="pic-show"><img src="https://p0.meituan.net/movie/f29c0f9ff0340d00085f4bc1a395ecf02603950.jpg@160w_220h_1e_1c"></div>
                <div class="info-list">
                    <h2>无名之辈</h2>
                    <p>观众评分 <span class="grade">9.2</span></p>
                    <p>主演: 陈建斌,任素汐,潘斌龙</p>
                    <p>今天55家影院放映607场</p>
                </div>
                <div class="btn-mall">
                    购票
                </div>
			</div>
			<div class="movie-item">
				<div class="pic-show"><img src="https://p0.meituan.net/movie/f29c0f9ff0340d00085f4bc1a395ecf02603950.jpg@160w_220h_1e_1c"></div>
                <div class="info-list">
                    <h2>无名之辈</h2>
                    <p>观众评分 <span class="grade">9.2</span></p>
                    <p>主演: 陈建斌,任素汐,潘斌龙陈建斌,任素汐,潘斌龙</p>
                    <p>今天55家影院放映607场</p>
                </div>
                <div class="btn-mall">
                    购票
                </div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'coming'
	}
</script>

<style lang="scss" scoped>
	#coming{
		height: 100%;
		padding: 0 16px;
		box-sizing: border-box;
		overflow: auto;
		&::-webkit-scrollbar{
			background-color:transparent;
    		width:0;
		}
		.movie{
			.movie-item{
				margin-top:12px; 
				display: flex; 
				align-items:center; 
				border-bottom: 1px #e6e6e6 solid; 
				padding-bottom: 10px;
				.pic-show{
					width: 110px;
					img{
						width: 100%;
						display: block;
					}
				}
				.info-list{
					flex: 1;
					padding-left: 16px;
					align-self: self-start;
					h2{
						width: 320px;
						font-size: 30px; 
						line-height: 42px; 					
						overflow: hidden; 
						white-space: nowrap; 
						text-overflow:ellipsis;
					}
					p{
						width: 360px;
						font-size: 22px; 
						color:#666; 
						line-height: 34px; 
						overflow: hidden; 
						white-space: nowrap; 
						text-overflow:ellipsis;
						.grade{
							font-weight: 700; 
							color: #faaf00; 
							font-size: 22px;
						}
					}
				}
				.btn-mall{
					width:70px;  
					line-height: 44px; 
					text-align: center; 
					background-color: #f03d37; 
					color: #fff; border-radius: 6px; 
					font-size: 20px; 
					cursor: pointer;
				}
			}
		}
	}
</style>