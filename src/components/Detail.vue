<template>
	<div id="detail" class="slide-enter-active">
		<m-header title="影片详情">
			<span><i class="iconfont icon-right" @touchstart="handleToBack"></i></span>
  		</m-header>
  		<loading v-if="loading"></loading>
  		<div v-else class="detail-wrapper"">
	  		<scroll  :data="detailMovie" ref="scroll">
		  		<div>
		  			<div class="detail-info">
						<div class="detail-bg">
							<img :src="detailMovie.img | setWH('148.208')" alt="">
						</div>
						<div class="detail-filter"></div>
						<div class="detail-content">
							<div class="detail-img">
								<img :src="detailMovie.img | setWH('148.208')" alt="">
							</div>
							<div class="detail-list">
								<h2>{{detailMovie.nm}}</h2>
								<p>{{detailMovie.enm}}</p>
								<p>{{detailMovie.sc}}</p>
								<p>{{detailMovie.cat}}</p>
								<p>{{detailMovie.src}} / {{detailMovie.dur}}</p>
								<p>{{detailMovie.pubDesc}}</p>
							</div>
						</div>
					</div>
					<div class="detail-intro">
						<div class="tip">
							剧情简介:
						</div>
						<p>{{detailMovie.dra}}</p>
					</div>
					<div class="detail-Stills">
						<div class="tip">
							影人剧照:
						</div>
						<!-- <ul class="swiper-wrapper">
							<li v-for="(item,index) in detailMovie.photos" :key="index" class="swiper-slide">
								<div>
									<img :src="item | setWH('210.191')" alt="">
								</div>
							</li>
						</ul> -->
						<div class="detail-slider">
							<swiper :options="options">
								<swiper-slide v-for="(item,index) in detailMovie.photos" :key="index">
										<div class="slider-pic">
											<img :src="item | setWH('210.191')" alt="">
										</div>									
								</swiper-slide>							
							</swiper>
						</div>
					</div>
		  		</div>
		  	</scroll>
	  	</div>
	</div>
</template>

<script>
	import MHeader from "@/components/MHeader"
	import { getDetailData  } from '@/api/request'
	import Scroll from '@/components/Scroll'
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	export default {
		name: 'detail',
		components: {
			MHeader,
			Scroll,
			swiper,
    		swiperSlide
		},
		props: ['id'],
		data(){
			return {
				loading: true,
				detailMovie: {},
				options: {
					// autoplay: true,
					// loop: true,
					slidesPerView: 3,
	                spaceBetween: 20,
	                freeMode: true,
	                // notNextTick: false,
				}
			}
		},
		methods: {
			handleToBack(){
				this.$router.back()
			},
			async getData(){
				const result = await getDetailData(this.id)
				if(result.data.msg === 'ok'){
					let detailMovie = result.data.data.detailMovie
					this.detailMovie = detailMovie
					this.loading = false
				}
			}
		},
		created(){
			this.getData()
		}
	}
</script>

<style lang="scss" scoped>
@import "~swiper/dist/css/swiper.css";
@keyframes slideMove{
    0%{ transform : translateX(100%); }
    100%{ transform : translateX(0); }
}
	.slide-enter-active{
		animation:.3s slideMove;
	}
	#detail{
		position: fixed;
	    top: 0;
	    bottom: 0;
	    left: 0;
	    right: 0;
	    background: #fff;
	    z-index: 100;
	    .detail-wrapper{
	    	position: absolute;
    		right: 0;
    		left: 0;
    		top: 50px;
    		bottom: 0;
    		overflow: hidden;
		    .detail-info{
		    	width: 100%;
		    	height: 300px;
		    	background: red;
		    	position: relative; 
		    	overflow: hidden;
		    	display: flex;
			    align-items: center;
		    	.detail-bg{
		    		width:100%; 
		    		height:100%;
		    		// background-image: url('http://p0.meituan.net/256.360/movie/47af2656af6cd0110057bc527b862c665484423.jpg');
		    		// // background: border-box;
		    		// background-size:cover; 
		    		position: absolute; 
		    		left: 0; 
		    		top: 0;
		    		img{
		    			filter: blur(10px); 
		    			transform: scale(1.2);
		    			width:100%; 
		    		    height:100%;
		    		}
		    	}
		    	.detail-filter{
		    		width:100%; 
		    		height:100%; 
		    		position: absolute;
		    		background-color: #40454d;
		    		opacity: .55; 
		    		position: absolute; 
		    		left: 0; 
		    		top: 0; 
		    		z-index: 1;
		    	}
				.detail-content{
					display: flex; 
					width:100%; 
					// height:100%; 
					// position: absolute; 
					// left: 0; 
					// top: 0; 
					z-index: 2;
					.detail-img{
						margin: 0 30px 0 50px;
						img{
							width: 160px;
							border: solid 1px #f0f2f3;
						}
					}
					.detail-list{
						h2{
							font-size: 28px; 
							color:white; 
							font-weight: normal; 
							line-height: 50px;
						}
						p{ 
							line-height: 32px; 
							font-size: 24px; 
							color:#ccc;
						}	
					}
				}
		    }
		    .detail-intro{
				padding: 20px;
				.tip{
					font-size: 26px;
					color: #666;
					margin-bottom: 10px;
				}
				p{
					text-indent: 40px;
					line-height: 30px;
				}
			}
			.detail-Stills{
				width: 100%;
				padding: 0 20px 20px;
				.tip{
					font-size: 26px;
					color: #666;
					margin-bottom: 10px;
				}
				.detail-slider{
					width: 100%;

					.slider-pic{
						height: 160px;
						// display: flex;
						// justify-content: center;
						img{
							width: 100%;
							height: 100%;
						}
					}					
				}
			}
		}
	}
</style>