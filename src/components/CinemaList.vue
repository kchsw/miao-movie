<template>
	<div id="cinema-list">
		<scroll class="recommend-content" :data="cinemaList" ref="scroll">
			<div class="cinema-wrapper">					
				<div class="cinema-item" v-for="item in cinemaList" :key="item.id">
					<div class="name">
		                <span>{{item.nm}}</span>
		                <span class="money"><span class="price">{{item.sellPrice}}</span> 元起</span>
		            </div>
		            <div class="address">
		                <div>地址: {{item.addr}}</div>
		                <div>距离: {{item.distance}}</div>
		            </div>
		            <div class="card">
		                <div class="type" 
		                	v-for="(num,key) in item.tag"
		                	v-if="num===1"
		                	:class="type[key].class"
		                >{{type[key].desc}}</div>          
		            </div>
				</div>
			</div>
		</scroll>
		<loading v-show="loaing"></loading>
	</div>
</template>

<script>
	import { getCinemaData } from '@/api/request'
	import Scroll from '@/components/Scroll'
	export default {
		name: 'cinema-list',
		components: {
			Scroll
		},
		data(){
			return {
				cinemaList: [],
				loaing: true
			}
		},
		methods: {
			async getData(){
				const result = await getCinemaData(10)
				if(result.data.msg === 'ok'){
					let cinemas = result.data.data.cinemas
					this.cinemaList = cinemas
					this.loaing = false			
				}
			}
		},
		created(){
			this.getData()
			this.type = {
				allowRefund: { desc: "改签", class: 'bl' },
				endorse: { desc: "退", class: 'bl' },
				sell: { desc: "折扣卡", class: 'ol' },
				snack: { desc: "小吃", class: 'ol' }
			}
		}
	}
</script>

<style lang="scss" scoped>
	#cinema-list{
		height: calc(100vh - 160px);
		padding: 0 22px 22px;
		box-sizing: border-box;
		overflow: hidden;
		font-size: 22px;
		&::-webkit-scrollbar{
			background-color:transparent;
    		width:0;
		}
		.cinema-item{
			padding: 12px 0;
			border-bottom:1px solid #e6e6e6;
			div{
				// margin-top: 12px;
			}
			.name{
				font-size: 28px;
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
				overflow: hidden;
				font-size: 22px; 
				color:#666;
				line-height: 30px;
				margin: 10px 0;
				// span{
				// 	&:nth-of-type(2){ 
				// 		float:right; 
				// 	}
				// }
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
						color: #f90; 
						border: 1px solid #f90;
					}
					&.ol{
						color: #589daf; 
						border: 1px solid #589daf;
					}
				}
			}
		}
	}
</style>