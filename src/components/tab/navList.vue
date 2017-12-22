<template>
	<!--<div class="navList">
		<div class="tabList">
			<span v-for="(item,idx) in tabList" :key="item.id">{{item.title}}</span>
		</div>
		<!--<router-view></router-view>-->
	</div>-->
</template>

<script>
	export default {
		name:'wyyNList',
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

<style>
</style>