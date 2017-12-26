<template>
	<div>
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="(item,idx) in imgList">
					<!--<img :src="item.src" alt="" onerror="this.src='/vue/static/img/test1.png'"/>-->
					<!--{{item}}-->
					<img :src="item.pic" alt="" />
					<span :style="{backgroundColor:item.titleColor}">
						<i>{{item.typeTitle.substring(0,2)}}</i>
					</span>
				</div>
			</div>
			<div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets">
			</div>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue'
	import '../../static/swiper.js'
	
	export default {
		name:'swiper',
		data(){
			return {
				mylb:[1,2,3,4,5,6,7,8]
			}
		},
		props:{
			imgList:{
				type:Array,
				default:[]
			}
		},
		watch:{
			imgList(){
				var vm = this;
				console.log(this.imgList)
				Vue.nextTick(function(){
					var mySwiper = new Swiper('.swiper-container', {
						autoplay: 3000, //可选选项，自动滑动
						autoplayDisableOnInteraction : false,//用户操作后不禁止
						loop:true, //无线循环
						loopAdditionalSlides:2, //复制一次 
						pagination: '.swiper-pagination', //分页
						paginationClickable: true,
//						observer:true,//修改swiper自己或子元素时，自动初始化swiper
//  					observeParents:true
					})
				})
			}
		},
		mounted(){
//			console.log(Swiper)
		
		}
	}
</script>

<style lang="scss">
	.swiper-container{
		width: 100%;
		height: 60%;
		overflow: hidden;
		.swiper-wrapper{
			.swiper-slide{
				width: 100%;
				position: relative;
				/*max-height: 180px;*/	
				img{
					width: 100%;
					/*max-height: 200px;*/
				}
				&>span{
					display: block;
					width: 40px;
					height: 18px;
					background-color: #f00;
					opacity: 0.8;
					position: absolute;
					bottom: 10px;
					right: 0;
					border-top-left-radius: 18px;
					border-bottom-left-radius: 18px;
					text-align: center;
					line-height: 18px;
					font-size: 12px;
					color: rgba(255,255,255,1);
					i{
						opacity: 1;
						z-index: 1111;
					}
				}
			}
		}
		
		.swiper-pagination-bullet-active{
			background: #fe8a25;
		    width: 16px;
		    border-radius: 4px;
		}
	}
</style>