<template>
	<div>
		<div class="pageTop">
			<i class="top-left iconfont icon-ellipsis-v"></i>
			<div class="menu">
				<div class="menu_con">
					<span v-for="(item,idx) in menuList" 
						:style="{color:menuIdx == idx?'#fff':'#c2c2c2c',opacity:menuIdx == idx?1:'.6'}" 
						:class="item.classname" :key="item.id"
						@click="chMenu(idx,item.routername)"></span>
				</div>
			</div>
			<i class="top-right iconfont icon-search"></i>
		</div>
		<transition :name="mainAnimate">
			<router-view class="mainAnimate"></router-view>
		</transition>
	</div>
</template>

<script>
	export default {
		name:'mainList',
		data(){
			return {
				mainAnimate:'to-left',
				menuIdx:0,
				menuList:[
					{
						classname:'iconfont icon-music-note',
						routername:'mainMylist',
						id:0
					},
					{
						classname:'iconfont icon-wangyiyunyinle',
						routername:'mainwyylist',
						id:1
					},
					{
						classname:'iconfont icon-qunzhong',
						routername:'maindtlist',
						id:2
					},
				]
			}
		},
		beforeRouteUpdate(to,from,next){
			console.log(to.meta.mainIdx,from.meta.mainIdx);
			if(to.meta.mainIdx>=0){
				if(to.meta.mainIdx > from.meta.mainIdx){
					this.mainAnimate = 'to-left'
				}else if(to.meta.mainIdx < from.meta.mainIdx){
					this.mainAnimate = 'to-right'
				}
			}
			next()
		},
		methods:{
			chMenu(idx,routername){
				this.menuIdx = idx;
				this.$router.push({
					name:routername
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.pageTop{
		height: 40px;
		display: flex;
		background-color: #f00;
		&>i{
			flex: 1.5;
			font-size: 30px;
			line-height: 40px;
			color: #fff;
			text-align: center;
		}
		.menu{
			flex: 7;
			.menu_con{
				width: 60%;
				margin: 0 auto;
				display: flex;
				span{
					flex: 1;
					line-height: 40px;
					text-align: center;
					font-size: 20px;
				}
			}
		}
	}
	.mainAnimate{
		position: absolute;
		transition: all .1s linear;
	}
	.to-left-enter,
	.to-right-leave-avtive,
	.to-right-leave-to{
		transform: translateX(-100%);
	}
	.to-right-enter,
	.to-left-leave-avtive,
	.to-left-leave-to{
		transform: translateX(100%);
	}
</style>