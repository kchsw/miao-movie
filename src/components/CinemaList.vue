<template>
	<div id="cinema-list">
		<div class="cinema-item">
			<div class="name">
                <span>大地影院(澳东世纪店)</span>
                <span class="money"><span class="price">22.9</span> 元起</span>
            </div>
            <div class="address">
                <span>金州区大连经济技术开发区澳东世纪3层</span>
                <span>1763.5km</span>
            </div>
            <div class="card">
                <div class="type">小吃</div>
                <div class="type">折扣卡</div>
            </div>
		</div>
		<div class="cinema-item">
			<div class="name">
                <span>大地影院(澳东世纪店)</span>
                <span class="money"><span class="price">22.9</span> 元起</span>
            </div>
            <div class="address">
                <span>金州区大连经济技术开发区澳东世纪3层</span>
                <span>1763.5km</span>
            </div>
            <div class="card">
               	<div class="type">小吃</div>
                <div class="type bl">折扣卡</div>
            </div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'cinema-list'
	}
</script>

<style lang="scss" scoped>
	#cinema-list{
		height: calc(100vh - 160px);
		padding: 0 20px 20px;
		box-sizing: border-box;
		overflow: auto;
		&::-webkit-scrollbar{
			background-color:transparent;
    		width:0;
		}
		.cinema-item{
			padding: 12px 0;
			border-bottom:1px solid #e6e6e6;
			div{
				margin-top: 12px;
			}
			.name{
				font-size: 30px;
				.money{
					margin-left: 14px;
					font-size: 20px; 
					color:#f03d37;
					.price{
						font-size: 30px; 
					}
				}
			}
			.address{
				font-size: 24px; 
				color:#666;
				span{
					&:nth-of-type(2){ 
						float:right; 
					}
				}
			}
			.card{
				display: flex;
				.type{
					padding: 6px 8px; 
					// height: 20px; 
					// line-height: 20px; 
					border-radius: 4px; 
					color: #f90; border: 1px solid #f90; 
					font-size: 18px; 
					margin: 0 10px 0 0;
					&.bl{
						color: #589daf; 
						border: 1px solid #589daf;
					}
				}
			}
		}
	}
</style>