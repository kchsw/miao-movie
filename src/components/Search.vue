<template>
	<div id="search">
		<div class="search-input">
			<div class="input-wrapper">
                <i class="iconfont icon-sousuo"></i>
                <input type="text" v-model="keyword">
            </div>
		</div>
		<div class="search-result">
			<scroll class="recommend-content" :data="movieList" ref="scroll">
				<div class="result-wrapper">
					<h3>电影/电视剧/综艺</h3>
					<div class="result-list">
						<div class="result-item" v-for="item in movieList" :key="item.id">
							<div class="pic-show"><img :src="item.img | setWH('128.180')"></div>
			                <div class="info-list">
			                    <h2>{{item.nm}}</h2>
			                    <span class="grade">{{item.sc | score}}</span>
			                    <p>{{item.enm}}</p>
		                        <p>{{item.cat}}</p>
		                        <p>{{item.pubDesc}}</p>
			                </div>	              
						</div>
					</div>
				</div>	
			</scroll>
			<loading v-show="loading"></loading>	
		</div>
	</div>
</template>

<script>
	import { getSearchData } from '@/api/request'
	import Scroll from '@/components/Scroll'
	export default {
		name: 'search',
		components: {
			Scroll
		},
		data(){
			return {
				movieList: [],
				keyword: '',
				timer: null,
				loading: false
			}
		},
		methods: {
			async getData(){
				this.loading = true
				const result = await getSearchData(10, this.keyword)
				const movies = result.data.data.movies
				if(result.data.msg === 'ok' && movies.list.length){
					this.movieList = movies.list
					this.loading = false
				}
			}
		},
		watch:{
			keyword(){
				if(this.timer){
					clearTimeout(this.timer)
				}
				if(!this.keyword){
					this.movieList = []
					return
				}
				this.timer = setTimeout(() => {
					this.getData()					
				}, 500)
			}
		}	
	}
</script>

<style lang="scss" scoped>
	#search{
		height: 100%;
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
					color: #999; 
					padding: 10px 0; 
					outline: none; 
					margin-left: 5px;
				}
			}
		}
		.search-result{
			height: calc(100vh - 233px);
			overflow: hidden;
			box-sizing: border-box;
    		padding-bottom: 10px;
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
							font-size: 28px; 
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