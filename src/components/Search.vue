<template>
	<div id="search">
		<div class="search-input">
			<div class="input-wrapper">
                <i class="iconfont icon-sousuo"></i>
                <input type="text">
            </div>
		</div>
		<div class="search-result">
			<h3>电影/电视剧/综艺</h3>
			<div class="result-list">
				<div class="result-item">
					<div class="pic-show"><img src="https://p0.meituan.net/movie/f29c0f9ff0340d00085f4bc1a395ecf02603950.jpg@160w_220h_1e_1c"></div>
	                <div class="info-list">
	                    <h2>无名之辈</h2>
	                    <span class="grade">9.2</span>
	                    <p>A Cool Fish</p>
                        <p>剧情,喜剧,犯罪</p>
                        <p>2018-11-16</p>
	                </div>	              
				</div>
				<div class="result-item">
					<div class="pic-show"><img src="https://p0.meituan.net/movie/f29c0f9ff0340d00085f4bc1a395ecf02603950.jpg@160w_220h_1e_1c"></div>
	                <div class="info-list">
	                    <h2>无名之辈</h2>
	                    <span class="grade">9.2</span>
	                    <p>A Cool Fish</p>
                        <p>剧情,喜剧,犯罪</p>
                        <p>2018-11-16</p>
	                </div>	              
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'search'
	}
</script>

<style lang="scss" scoped>
	#search{
		.search-input{
			padding: 10px 10px; 
			background-color: #f5f5f5; 
			border-bottom: 1px solid #e5e5e5;
			.input-wrapper{
				padding: 0 10px; 
				border: 1px solid #e6e6e6; 
				border-radius: 5px; 
				background-color: #fff; 
				display: flex; 
				align-items: center;
				.iconfont{
					font-size: 28px;
					padding: 4px 0;
				}
				input{
					width: 100%;
					height: 30px;
					line-height: 30px;
					font-size: 28px;
					border: none; 
					color: #333; 
					padding: 10px 0; 
					outline: none; 
					margin-left: 5px;
				}
			}
		}
		.search-result{
			h3{
				font-size: 24px; 
				color: #999; 
				padding: 12px 15px; 
				border-bottom: 1px solid #e6e6e6;
			}
			.result-list{
				.result-item{
					padding: 14px 20px;
					border-bottom:1px #c9c9c9 dashed;
					display: flex; 
					align-items:center;

					.pic-show{
						width: 110px;
						img{
							width: 100%;
							display: block;
						}
					} 
					.info-list{
						flex: 1;
						padding-left: 20px;
						align-self: self-start;
						position: relative;
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
							line-height: 34px; 
							overflow: hidden; 
							white-space: nowrap; 
							text-overflow:ellipsis;	
						}
						.grade{
							font-weight: 700; 
							color:#fc7103; 
							font-size: 24px;
							position: absolute;
    						top: 10px;
    						right: 10px;
						}
					}
				}
			}
		}
	}
</style>