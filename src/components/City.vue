<template>
	<div id="city" ref="city">
		<loading v-if="loading"></loading>
		<scroll v-else class="recommend-content" :data="cityList" ref="scroll">
			<div class="city-list">
				<div class="hot-area">
					<div class="hot-title">热门城市</div>
					<ul class="hot-list">
						<li class="hot-item" v-for="item in hotlist" :key='item.id' @tap="handleToCity(item)">
							<div class="city-item">{{item.nm}}</div>
						</li>
	                    <!-- <li class="hot-item"><div class="city-item">北京</div></li>
	                    <li class="hot-item"><div class="city-item">北京</div></li>
	                    <li class="hot-item"><div class="city-item">北京</div></li>
	                    <li class="hot-item"><div class="city-item">北京</div></li> -->
					</ul>
				</div>
				<div class="citys" ref="citys">
					<div class="city-area" v-for="item in cityList" :key='item.index'>
						<div class="city-title">{{item.index}}</div>
						<ul class="city-list">
							<li class="city" v-for="city in item.list" :key='city.nm' @tap="handleToCity(city)">{{city.nm}}</li>
						</ul>
					</div>	
				</div>			
			</div>
			<div class="city-index">
				<ul class="index-list">
					<li class="index-item" 
						v-for="(item, index) in cityList" 
						:key='item.index'
						@touchstart="handleToIndex(index)"			
					>{{item.index}}</li>
				</ul>
			</div>
		</scroll>
	</div>
</template>

<script>
	import { getCityData } from '@/api/request'
	import { mapMutations} from "vuex"
	import Bscroll from 'better-scroll'
	import Scroll from '@/components/Scroll'
	export default {
		name: 'city',
		components: {
			Scroll
		},
		data(){
			return {
				cityList: [],
				hotlist: [],
				loading: true
			}
		},
		methods: {
			...mapMutations('city', {
				setcity: 'SET_CITY'
			}),
			async getData(){
				const result = await getCityData()
				if(result.data.msg === 'ok'){
					let cities = result.data.data.cities
					this.formatCityList(cities)
					this.loading = false
				}
			},
			formatCityList(data){
				let cityList = []
				data.forEach(item => {
					let firstLetter = item.py.slice(0, 1).toUpperCase()
					if(!cityList.some(item => item.index === firstLetter)){
						cityList.push({
							index: firstLetter,
							list: [ item ]
						})
					}else{
						let index = cityList.find(item => item.index === firstLetter)
						index.list.push(item)
					}
				})
				cityList.sort((a, b) => {
					return a.index > b.index ? 1 : -1
				})
				this.cityList = cityList
				this.hotlist = data.filter(item => item.isHot === 1)
				localStorage.setItem('CITY_LIST',JSON.stringify(this.cityList))
				localStorage.setItem('HOST_LIST',JSON.stringify(this.hotlist))
			},
			handleToIndex(index){
				let cityIndex = this.$refs.citys.getElementsByClassName('city-area')
				let element = cityIndex[index]				
				this.$refs.scroll.scrollToElement(element)			
			},
			handleToCity(item){
				this.setcity(item)
				localStorage.setItem('CITY', item.nm)
				localStorage.setItem('CITY_ID', item.id)
				this.$router.push('/movie')
			}
		},
		created(){
			let cityList = JSON.parse(localStorage.getItem('CITY_LIST'))
			let hotlist = JSON.parse(localStorage.getItem('HOST_LIST'))
			if(cityList && hotlist){
				this.loading = false
				this.cityList = cityList
				this.hotlist = hotlist
			}else{
				this.getData()
			}
		},
		watch:{
			// cityList(){
			// 	this.$nextTick(() => {
			//         this.scroll = new Bscroll(this.$refs.city)
			//     })
			// }
		}

	}
</script>

<style lang="scss" scoped>
	#city{
		height: 100%;
		// position: absolute;
	 //    top: 100px;
	 //    bottom: 60px;
	 //    left: 0;
	 //    right: 0;
		overflow: hidden;
		&::-webkit-scrollbar{
			background-color:transparent;
    		width:0;
		}
		.city-list{
			.hot-area{
				.hot-title{
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
			}
			.city-area{
				.city-title{
					padding-left: 15px; 
					line-height: 40px; 
					font-size: 22px; 
					background:#F0F0F0; 
				}
				.city-list{
					.city{
						padding-left: 15px; 
						line-height: 50px; 
						border-bottom: 1px solid #eaeaea;
						color: #666;
						font-size: 22px;
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
		    	line-height: 30px;
    			color: #e54847;
    			font-size: 22px;
		    }
		}
	}
</style>