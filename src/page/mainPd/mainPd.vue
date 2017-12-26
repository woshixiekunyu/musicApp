<template>
	<div class="pageTop">
		<div class="tabMenu">
			<i class="menu iconfont icon-ellipsis-v"></i>
			<div class="tab">
				<div class="middleTab">
					<span v-for="(item,idx) in tabList" @touchstart="ctab(idx,item.routeName)" :class="item.className" :style="{color:tabIdx==idx?'#fff':'#bbb',opacity:tabIdx==idx?'1':'0.7'}" :key="item.id"></span>
				</div>
			</div>
			<i class="search iconfont icon-search"></i>
		</div>
		<transition :name="pageTabMoveName">
			<keep-alive>
				<router-view class="pageTabAnimate"></router-view>
			</keep-alive>
		</transition>
	</div>
</template>

<script>
	export default {
		name:'pageTop',
		data(){
			return {
				pageTabMoveName:'toleft',
				tabIdx:1,
				tabList:[
					{
						id : 0,
						className:'song iconfont icon-music-note',
						routeName:'mpml'
					},
					{
						id : 1,
						className:'wyy iconfont icon-wangyiyunyinle',
						routeName:'mpwl'
					},
					{
						id : 2,
						className:'qz iconfont icon-qunzhong',
						routeName:'mpdL'
					}
				]
			}
		},
		beforeRouteUpdate(to,from,next){
			if(from.meta.idx<to.meta.idx){
				this.pageTabMoveName = 'toright'
			}else{
				this.pageTabMoveName = 'toleft'
			}
			next()
		},
		methods:{
			ctab(idx,routeName){
				this.tabIdx = idx;
				this.$router.push({
					name:routeName
				})
			},
		},
		mounted(){
			console.log(this.$route)
			this.tabList.forEach((item,idx)=>{
				if(this.$route.name == item.routeName){
					this.tabIdx = idx
				}
			})
		},
		attached(){
			this.tabList.forEach((item,idx)=>{
				if(this.$route.name == item.routeName){
					this.tabIdx = idx
				}
			})
		}
	}
</script>

<style scoped lang="scss">
	.pageTop{
		width: 100%;
		/*position: fixed;*/
		.tabMenu{
			position: fixed;
			left: 0;
			top: 0;
			width: 100%;
			height: 50px;
			line-height: 50px;		
			background-color: #f00;
			box-sizing: border-box;
			padding: 0 10px;
			display: flex;
			z-index: 10000;
			.menu{
				width: 20%;
				font-size: 24px;
				color: #fff;
			}
			.tab{
				width: 60%;
				/*padding: 0 5%;*/
				box-sizing: border-box;
				.middleTab{
					width: 80%;
					display: flex;
					margin: 0 auto;
					span{
						flex: 1;
						/*margin: 0 auto;*/
						/*width: 30%;*/
						font-size: 24px;
						text-align: center;
					}
				}
			}
			.search{
				width: 20%;
				text-align: right;
				font-size: 24px;
				color: #fff;
			}
		}
		.pageTabAnimate{
			position: absolute;
			left: 0;
			top: 50px;
			width:100%;
	  		transition: all .2s linear;
		}
		.toleft-enter,
		.toright-leave-active{
			transform: translateX(-100%);
		}
		.toright-enter,
		.toleft-leave-active{
			transform: translateX(100%);
		}
	}
</style>