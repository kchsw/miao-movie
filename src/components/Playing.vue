<template>
	<div id="playing">
		<div class="movie">
			<div class="movie-item" v-for="item in movieList" :key="item.id">
				<div class="pic-show"><img :src="item.img | setWH('128.180')"></div>
                <div class="info-list">
                    <h2>{{item.nm}}</h2>
                    <p>观众评分: <span class="grade">{{item.sc}}</span></p>
                    <p>主演: {{item.star}}</p>
                    <p>{{item.showInfo}}</p>
                    <img class="version" :src='version' v-if="item.version">
                </div>
                <div class="btn-mall">
                    购票
                </div>
			</div>
			<!-- <div class="movie-item">
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
			</div> -->
		</div>
	</div>
</template>

<script>
	import { getPlayingData } from '@/api/request'
	export default {
		name: 'playing',
		data(){
			return {
				movieList: [],
				version: require("@/assets/maxs.png")
			}
		},
		methods: {
			async getData(){
				const result = await getPlayingData(10)
				if(result.data.msg === 'ok'){
					let movieList = result.data.data.movieList
					this.movieList = movieList
				}
			}
		},
		created(){
			this.getData()
		},
		watch: {

		}
	}
</script>

<style lang="scss" scoped>
	#playing{
		height: 100%;
		padding: 0 16px;
		box-sizing: border-box;
		overflow: hidden;
		&::-webkit-scrollbar{
			background-color:transparent;
    		width:0;
		}
		.movie{
			.movie-item{
				margin-top:12px; 
				display: flex; 
				align-items:center; 
				border-bottom: 
				1px #e6e6e6 solid; 
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
					position: relative;
					.version{
						position: absolute;
    					right: 0px;
    					top: 12px;
					}
					h2{
						width: 320px;
						font-size: 28px; 
						line-height: 42px; 					
						overflow: hidden; 
						white-space: nowrap; 
						text-overflow:ellipsis;
					}
					p{
						width: 360px;
						font-size: 21px; 
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