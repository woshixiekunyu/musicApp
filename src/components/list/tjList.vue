<template>
	<div v-if="type !=''">
		<div class="tjList">
			<p class="maintitle">{{title}} 〉</p>
			<ul class="mylist musicList" v-if="type == 'music'">
			<!--<ul class="mylist musicList" v-if="type == 'music'||type == 'newmusic'">-->
				<li v-for="(item,idx) in list">
					<span>
						<img :src="item.picUrl" alt="" />
					</span>
					<p :title="item.name">{{item.name}}</p>
					<!--<p :title="item.name">{{item.name}}</p>-->
				</li>
			</ul>
			<ul class="mylist mvList" v-if="type == 'mv'">
				<li v-for="(item,idx) in list">
					<span>
						<img :src="item.picUrl" alt="" />
					</span>
					<p :title="item.name">{{item.name}}</p>
					<p :title="item.artistName">{{item.artistName}}</p>
				</li>
			</ul>
			<ul class="mylist aloneList" v-if="type == 'alone'">
				<li v-for="(item,idx) in list">
					<span>
						<img :src="item.sPicUrl" alt="" />
					</span>
					<p :title="item.name">{{item.copywriter}}</p>
					<!--<p :title="item.artistName">{{item.name}}</p>-->
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name:'tjList',
		data(){
			return {
				list:[],
				mytype:'',
				title:''
			}
		},
		props:{
			type:{
				type:String,
				default:''
			}
		},
		mounted(){
			var url = '';
			switch(this.type){
				case 'music':
					url = 'personalized';
					this.title = '推荐歌单';
					break;
				case 'mv':
					url = 'personalized/mv';
					this.title = '推荐MV';
					break;
				case 'alone':
					url = 'personalized/privatecontent';
					this.title = '独家放送';
					break;
//				case 'newmusic':
//					url= 'personalized/newsong';
//					this.title = '最新音乐';
//					break;
			}
			this.$gets(url).then(res=>{
				console.log(res.data);
				if(res.data.result.length>6){
					this.list = res.data.result.slice(0,6)
					console.log(this.list)
				}else{
					this.list = res.data.result
				}
			})
		}
	}
</script>

<style scoped lang="scss">
	.tjList{
		width: 100%;
		margin-top: 1rem;
		.maintitle{
			line-height: 3rem;
			font-size: 1rem;
			position: relative;
			text-indent: 10px;
			&::before{
				display: block;
				content: '';
				height: 1rem;
				width: 3px;
				background-color: #f00;
				position: absolute;
				left: 0;
				top: 50%;
				margin-top: -0.5rem;
			}
		}
		.mylist{
			width: 100%;
			height: 18rem;
			overflow: hidden;
			/*height: 2rem;*/
			/*display: flex;*/
			/*overflow: hidden;*/
			/*overflow-x: scroll;*/
			/*flex-wrap: wrap;*/
			li{
				float: left;
				font-size: 12px;
				margin-right: 1%;
				/*overflow: hidden;*/
				span{
					display: inline-block;
					overflow: hidden;
					img{
						width: 100%;
					}
				}
				p{
					box-sizing: border-box;
					width: 100%;
					line-height: 1rem;
					font-size: 12px;
					padding-left: 5px;
					overflow:hidden; 
					text-overflow:ellipsis;
					display:-webkit-box; 
					-webkit-box-orient:vertical;
					
				}
			}
		}
		.musicList{
			li{
				height: 9rem;
				width: (98/3/100)*100%;
				p{
					height: 2rem;
					-webkit-line-clamp:2; 
				}
				&:nth-child(3n){
					margin-right: 0;
				}
			}
		}
		.mvList{
			li{
				width: (98/2/100)*100%;
				height: 9rem;
				p{
					height: 1rem;
					-webkit-line-clamp:1; 
				}
				&:nth-child(2n){
					margin-right: 0;
				}
			}
		}
		.aloneList{
			li{
				width: (98/2/100)*100%;
				height: 9rem;
				p{
					height: 2rem;
					-webkit-line-clamp:2; 
				}
				&:nth-child(3){
					height: 10rem;
					margin-right: 0;
					width: 100%;
					span{
						height: 8rem;
					}
				}
			}
		}
	}
</style>