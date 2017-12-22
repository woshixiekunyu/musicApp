<template>
	<div class="mainPdWyyList">
		<div class="tabMenu">
			<div class="listBox" v-for="(item,idx) in tabList" :key="item.id">
				<span >{{item.title}}</span>
			</div>
		</div>
		<!--<router-view></router-view>-->
	</div>
</template>

<script>
	export default {
		name:'mpwl',
		data(){
			return {
				tabList:[
					{
						id:0,
						title:'音乐',
						routeName:'wyymusic'
					},
					{
						id:1,
						title:'视频',
						routeName:'wyyvideo'
					},
					{
						id:2,
						title:'电台',
						routeName:'wyyradio'
					}
				]
			}
		}
	}
</script>

<style scoped lang="scss">
	.mainPdWyyList{
		/*margin-top: 50px;*/
		.tabMenu{
			width: 100%;
			height: 40px;
			display: flex;
			line-height: 40px;
			text-align:center;
			padding: 0 20px;
			box-sizing:border-box;
			.listBox{
				flex: 1;
				font-size: 14px;
				padding: 0 20px;
				&:active{
					background-color: #eee;
				}
			}
		}
	}
</style>