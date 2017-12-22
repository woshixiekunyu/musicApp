<template>
	<p style="background-color: #0f0;">1</p>
</template>

<script>
	export default {
		name:'mpml',
		data(){
			return {
				
			}
		},
		mounted(){
			console.log(this.$http)	
			this.$http.get('http://localhost:3000/personalized/djprogram',{params:{
				keywords:'海阔天空'
			}}).then(res=>{
				//跨域
				console.log(res)
			})
		}
	}
</script>

<style>
</style>