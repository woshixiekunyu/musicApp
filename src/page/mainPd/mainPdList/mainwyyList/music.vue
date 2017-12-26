<template>
	<div class="mainwyymusic">
		<swiper :imgList="imgList"></swiper>
		<div class="nav">
			<ul>
				<li v-for="(item,idx) in navList" :key="item.id">
					<span @click="">
						<i :class="item.className"></i>
					</span>
					<p>{{item.title}}</p>
				</li>
			</ul>
		</div>
		<div class="main">
			<tj-list :type="'music'"></tj-list>
			<tj-list :type="'alone'"></tj-list>
			<tj-list :type="'mv'"></tj-list>
		</div>
	</div>
</template>

<script>
	import swiper from '@/components/swiper'
	export default {
		name:'wyymusic',
		data(){
			return {
               	imgList:[],
               	navList:[
               		{
               			id:0,
               			title:'私人FM',
               			className:'iconfont icon-shouyinjishoutingguangboyinle',
               			rl:false,
               			routename:'myfm'
               		},
               		{
               			id:1,
               			title:'每日推荐',
               			className:'iconfont icon-rili',
               			rl:false,
               			routename:'tuijian'
               		},
               		{
               			id:2,
               			title:'歌单',
               			className:'iconfont icon-yinle',
               			rl:false,
               			routename:'gedan'
               		},
               		{
               			id:3,
               			title:'排行版',
               			className:'iconfont icon-paixing',
               			rl:false,
               			routename:'rank'
               		}
               	]
			}
		},
		computed:{
			swiper(){
				return this.$refs.mySwiper.swiper;
			}
		},
		watch:{
//			imgList(){
//			}
		},
		mounted(){
			this.$gets('banner').then(res=>{
				this.imgList = res.data.banners;
			})

		},
		components:{
			swiper,
			tjList:r=>require(['@/components/list/tjList'],r)
		}
	}
</script>
<style scoped lang="scss">
	.mainwyymusic{
		/*overflow-y: scroll;*/
		/*width: 100%;*/
		/*height: 100%;*/
		/*padding-top: 40px;*/
		.nav{
			width: 100%;
			height: 5.4rem;
			border-bottom: 1px solid #eee;
			ul{
				padding: 0 5%;
				box-sizing: border-box;
				display: flex;
				padding-top: 0.5rem;
				flex-direction:row;
				justify-content: space-between;
				text-align: center;
				li{
					/*width: 2.4rem;*/
					flex: 1;
					height: 4.4rem;
					span{
						box-sizing: border-box;
						display: inline-block;
						width: 2.6rem;
						height: 2.6rem;
						border: 1px solid #f00;
						border-radius: 50%;
						text-align: center;
						/*padding-top: 0.7rem;*/
						i{
							color: #f00;
							font-size: 1rem;
							line-height: 2.6rem;
						}
						&:active{
							background-color: #f00;
						}
						&:active i{
							color: #fff;
						}
					}
					p{
						font-size: 0.875rem;
						line-height: 2rem;
					}
					
				}
			}
		}
		.main{
			
		}
	}
</style>