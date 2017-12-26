<template>
	<div class="mainPdWyyList">
		<div class="tabMenu">
			<div class="listBox" v-for="(item,idx) in tabList" @click="chTab($event,idx,item.routeName)" v-bw :key="item.id">
				<span>{{item.title}}</span>
				<i class="listBox_s"></i>
			</div>
		</div>
		<transition :name="slideName">
			<keep-alive>
				<router-view class="mainwyyslide"></router-view>
			</keep-alive>
		</transition>
	</div>
</template>

<script>
	import bw from '@/assets/js/bw'
	export default {
		name:'mpwl',
		data(){
			return {
				slideName:'mainslide-left',
				tabIdx:0,
//				animateName:'left-in listBox_s',
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
		},
		beforeRouteUpdate(to,from,next){
			if(to.meta.idx>from.meta.idx){
				this.slideName = 'mainslide-left'
			}else{
				this.slideName = 'mainslide-right'
			}
			next()
		},
		directives:{
			bw(e){
				e.addEventListener('click',function(evt){
//					console.log(this)
//					console.log(evt)
//					console.log(bw)
					bw.install(evt,this)
				})
			}
		},
		methods:{
			chTab(e,idx,routeName){
//				console.log(e)
//				bw.install(e,document.getElementsByClassName('listBox')[idx]);
//				if(this.tabIdx<idx){
//					this.animateName = 'left-in listBox_s'
//				}
				var dom = document.getElementsByClassName('listBox_s');
//				var domobj = dom[idx].getBoundingClientRect()
//				var lastobj = document.getElementsByClassName('listBox')[this.tabIdx].getBoundingClientRect()
//				var thisobj = document.getElementsByClassName('listBox')[idx].getBoundingClientRect()
				if(idx-this.tabIdx == 1){
					dom[this.tabIdx].style.left = '100%';
					dom[idx].style.left = '10px';
				}else if(idx - this.tabIdx == -1){
					dom[this.tabIdx].style.left = '-100%';
					dom[idx].style.left = '10px';
				}else if(idx - this.tabIdx == 2){
					for(let i=0;i<dom.length;i++){
						if(i == idx){
							continue;
						}
						dom[i].style.left = '100%'
					}
					dom[idx].style.left = '10px';
				}else if(idx - this.tabIdx == -2){
					for(let i=0;i<dom.length;i++){
						if(i == idx){
							continue;
						}
						dom[i].style.left = '-100%'
					}
					dom[idx].style.left = '10px';
				}
				this.tabIdx = idx;
				this.$router.push({
					name:routeName
				})
			}
		},
		mounted(){
			this.tabList.forEach((item,idx)=>{
				if(this.$route.name == item.routeName){
					this.tabIdx = idx;
					document.getElementsByClassName('listBox_s')[0].style.left='-100%';
					document.getElementsByClassName('listBox_s')[idx].style.left='10px';
				}
			})
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
			position: relative;
			.listBox{
				flex: 1;
				font-size: 14px;
				padding: 0 10px;
				position: relative;
				overflow: hidden;
				&:active{
					background-color: rgba(0,0,0,.1);
				}
				.listBox_s{
					position: absolute;
					bottom: 1px;
					left: 10px;
					display: inline-block;
					width: 100%;
					height: 1px;
					box-sizing: border-box;
					background-color: #f00;
					transition: all .2s;
				}
				&:nth-child(2),
				&:nth-child(3){
					i{
						left: -100%;
					}						
				}
				/*.left-in{
					transition: all 1s forwards;
				}*/
			}
		}
		.mainwyyslide{
			width: 100%;
			position: absolute;
			left: 0;
			transition: all .2s linear;
		}
		.mainslide-left-enter,
		.mainslide-right-leave-active{
			transform: translateX(-100%);
		}
		.mainslide-right-enter,
		.mainslide-left-leave-active{
			transform: translateX(100%);
		}
	}
</style>