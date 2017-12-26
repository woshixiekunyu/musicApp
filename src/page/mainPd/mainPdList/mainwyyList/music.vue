<template>
	<div class="mainwyymusic">
		<swiper :imgList="imgList"></swiper>
		<div class="nav">
			<ul>
				<li>
					<span></span>
					<p>111</p>
				</li>
				<li>
					<span></span>
					<p>111</p>
				</li>
				<li>
					<span></span>
					<p>111</p>
				</li>
				<li>
					<span></span>
					<p>111</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import swiper from '@/components/swiper'
	export default {
		name:'wyymusic',
		data(){
			return {
               imgList:[]
			}
		},
		computed:{
			swiper(){
				return this.$refs.mySwiper.swiper;
			}
		},
		watch:{
			imgList(){
			}
		},
		mounted(){
			this.$http.get('http://localhost:3000/banner').then(res=>{
				console.log(res)
				this.imgList = res.data.banners;
			})

		},
		components:{
			swiper,
		}
	}
</script>
<style scoped lang="scss">
	.mainwyymusic{
		.nav{
			width: 100%;
			height: 5rem;
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
					width: 2.4rem;
					/*flex: 1;*/
					height: 2.4rem;
					span{
						box-sizing: border-box;
						display: inline-block;
						width: 100%;
						height: 100%;
						border: 1px solid #f00;
						border-radius: 50%;
					}
					p{
						font-size: 0.75rem;
					}
					
				}
			}
		}
	}
</style>