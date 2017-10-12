<template>
  <div id="app">
  	<x-header >
	   		<ul>
	   			<li><router-link to="/one">我的</router-link></li>
		   		<li><router-link to="/two">音乐馆</router-link></li>
		   		<li><router-link to="/three">发现</router-link></li>
	   		</ul>
	   		<p slot="right"><router-link to="/foree">登录</router-link></p>
	   		<input class="ipt" type="text"id="ipt" value="搜索" />
	   		<div class="hh">

	   		</div>
	  </x-header>  
	  <router-view ></router-view>
		<div class="footer">
			<div></div>
		</div>
	   



  </div>
</template>
<script>
import {ViewBox} from 'vux'
import { XHeader } from 'vux'
import { Tab, TabItem } from 'vux'
import { Swiper } from 'vux'
import { Tabbar, TabbarItem } from 'vux'
import { Panel } from 'vux'
export default {
  name: 'app',
  components:{
  	ViewBox,XHeader,Tab,TabItem,Swiper,Tabbar, TabbarItem,Panel
  },
  data(){
  	return{
  		list:[
  		  {
				  url: 'javascript:',
				  img: '/static/lb1.jpg',
				  title: 'Nike官方'
				}, 
				{
					url: 'javascript:',
					img: '/static/lb2.jpg',
					title: 'adidas官方'
				}, 
				{
					url: 'javascript:',
					img: '/static/lb3.jpg',
					title: 'jordan官方',
					fallbackImg: 'https://static.vux.li/demo/3.jpg'
				},
				{
					url: 'javascript:',
					img: '/static/lb4.jpg',
					title: 'jordan官方',
					fallbackImg: 'https://static.vux.li/demo/3.jpg'
				},
				{
					url: 'javascript:',
					img: '/static/lb5.jpg',
					title: 'jordan官方',
					fallbackImg: 'https://static.vux.li/demo/3.jpg'
				}
				]
	  	}
	  }
	}
window.onload = function(){
	var Txt = document.querySelector(".ipt"); 
	var txt2 = document.querySelector('.hh');
			Txt.addEventListener("touchstart", function(){  
			Txt.value="";
			txt2.style.display = 'block';
			});
			document.addEventListener("touchmove", function(){  
			txt2.style.display = 'none';
			console.log(1)
			});
			
		
}
$(function(){
	
	 $("#ipt").click(function(){
	 var txt = $("#ipt").val(); 
  	$.ajax({
							type:"get",
							url:"https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp?g_tk=5381&uin=0&format=jsonp&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&w="+txt+"&zhidaqu=1&catZhida=1&t=0&flag=1&ie=utf-8&sem=1&aggr=0&perpage=30&n=30&p=1&_=1489396018874&jsonpCallback=_jsonpky20i0jqjfr",
							dataType:"jsonp",
							jsonp:"jsonpCallback",
							async:true,
							success:function(data){
								console.log(data)
						  }
					});	
				 
   })
	

})
</script>



<style lang="less" scoped >
@import '~vux/src/styles/reset.less';
html,body{
	margin: 0px;
	padding: 0px;
	width:100%;
	height: 100%;
	overflow-x: hidden;
	font-size: 14px;
}
img{
	width: 20px;
	height:20px;
}
ul{
	list-style: none;
	width: 100%;
	text-align: center;
	display: flex;
}
.vux-header{
	height: 70px;
}
.ipt{
	position: absolute;
	left: 0px;
	bottom: 0px;
	width: 100%;
	height: 24px;
	box-sizing: border-box!important;
	padding: 0px;
}
.ipt:hover{
	border: 1px solid red;
}
ul>li{
	flex-wrap:nowrap;
	width: 33.3%;
	font-size: 16px;
}
ul>li>a{
	color: white;
}
.vux-header-title{
	display: flex;
}
#app {
	 height: 100%;
}
.vux-header{
	background: #31C27C!important;
	position: fixed!important;
	top: 0px;
	width: 100%;
	z-index: 1;
}
.vux-header-title>p{
	font-size: 14px;
	text-align: center;
}
.vux-header-back{
	font-size: 16px;
	color: white!important;
}
.left-arrow:before{
 background: white;
}
.footer{
	position: fixed;
	bottom: 0px;
	width: 100%;
	height: 50px;
	z-index: 1;
	background: #31C27C!important;
}
.hh{
	background: white;
	display: none;
	height: 180px;
	width: 100%;
	position: absolute;
	top: 70px;
	left: 0;
	
}


</style>
