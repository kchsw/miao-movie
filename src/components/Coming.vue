<template>
	<div id="coming">
		<loading v-if="loaing"></loading>
		<scroll  v-else :data="comingList" ref="scroll">
			<div class="movie">
				<div class="movie-item" v-for="item in comingList" :key="item.id">
					<div class="pic-show" @tap="handleToDetail(item.id)"><img :src="item.img | setWH('128.180')"></div>
	                <div class="info-list" @tap="handleToDetail(item.id)">
	                    <h2>{{item.nm}}</h2>
	                    <p><span class="grade">{{item.wish}}</span> 人想看</p>
	                    <p>主演: {{item.star}}</p>
	                    <p>{{item.showInfo}}</p>
	                    <img class="version" :src='version' v-if="item.version">
	                </div>
	                <div class="btn-pre">
	                    预售
	                </div>
				</div>
			</div>
		</scroll>
	</div>
</template>

<script>
	import { getMovieComingData } from '@/api/request'
	import { mapState,mapMutations,mapGetters,mapActions} from "vuex"
	import Scroll from '@/components/Scroll'
	export default {
		name: 'coming',
		components: {
			Scroll
		},
		data(){
			return {
				comingList: [],
				version: require("@/assets/maxs.png"),
				loaing: true
			}
		},
		computed: {
			...mapState('city', ['id']),
		},
		methods: {
			async getData(){
				const result = await getMovieComingData(this.id)
				if(result.data.msg === 'ok'){
					let comingList = result.data.data.comingList
					this.comingList = comingList
					this.loaing = false
				}
			},
			handleToDetail(id){
				this.$router.push({
					name: 'detail',
					params: { id }
				})
			},
		},
		created(){
			this.getData()
		},
		watch: {
			id(){
				this.loaing = true
				this.getData()
			}
		}
	}
</script>

<style lang="scss" scoped>
	#coming{
		height: 100%;
		padding: 0 16px 30px;
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
				.btn-pre{
					width:70px;  
					line-height: 44px; 
					text-align: center; 
					background-color: #3c9fe6; 
					color: #fff; border-radius: 6px; 
					font-size: 20px; 
					cursor: pointer;
				}
			}
		}
	}
</style>