<template>
<div class="box1" id="box1">
	<swiper auto :list="list"></swiper>
	
	<ul class="ul1">
		<li>
			<img src="../../static/music.png" alt="" />
			歌手
		</li>
		<li>
			<img src="../../static/music.png" alt="" />
			排行
		</li>
		<li>
			<img src="../../static/music.png" alt="" />
			电台
		</li>
		<li>
			<img src="../../static/music.png" alt="" />
			分类歌单
		</li>
		<li>
			<img src="../../static/music.png" alt="" />
			视频MV
		</li>
		<li>
			<img src="../../static/music.png" alt="" />
			数字专辑
		</li>
	</ul>
	
	<div class="txt">歌单推荐</div>
	
	<div class="txt1">
		<ul>
			<li>
				<img src="../../static/track_radio_307_13_1.jpg" alt="alt1" />
				<div>一人一首招牌歌</div>
			</li>
			<li>
				<img src="../../static/track_radio_199_13_1.jpg" alt="alt1" />
				<div>热歌</div>
			</li>
			<li>
				<img src="../../static/300 (1).jpg" alt="alt1" />
				<div>催泪大杀器</div>
			</li>
			<li>
				<img src="../../static/300 (2).jpg" alt="alt1" />
				<div>hiphopMan</div>
			</li>
			<li>
				<img src="../../static/300 (3).jpg" alt="alt1" />
				<div>trip-top单曲</div>
			</li>
			<li>
				<img src="../../static/300.jpg" alt="alt1" />
				<div>AGG纯音乐</div>
			</li>
		</ul>	
	</div>
	
	<div class="txt2">每日为你推荐·30首</div>
	
	<div class="txt3">
		<ul>
			<li>
				<img src="../../static/T002R90x90M000002w9v2U1QksRz.jpg" alt="" />
				<h3>亲爱的今夜你在哪里</h3>
				<h5>汪峰·河流</h5>
			</li>
			<li>
				<img src="../../static/T002R90x90M000000ncx7Z0BpLBD.jpg" alt="" />
				<h3>爱的根源</h3>
				<h5>林忆莲·陪我走 In Search Of Lost Ti...</h5>
			</li>
			<li>
				<img src="../../static/T002R90x90M000001yNjcf0UAtsY.jpg" alt="" />
				<h3>我还是什么</h3>
				<h5>关楚耀·占领·《喜爱夜蒲》电影插曲</h5>
			</li>
			<li>
				<img src="../../static/T002R90x90M000003t2CqL02L76G.jpg" alt="" />
				<h3>为了让生活继续</h3>
				<h5>汪峰·怒放的生命</h5>
			</li>
			<li>
				<img src="../../static/T002R90x90M000004flVDc2IF6Js.jpg" alt="" />
				<h3>热爱</h3>
				<h5>郑钧·热爱·《摇滚藏獒》电影主题曲</h5>
			</li>
		</ul>
	</div>
	
	<div class="txt4">精选电台</div>
	<div class="txt5">
		<ul>
			<li>
				<img src="../../static/track_radio_120_10_6.jpg" alt="" />
				<p>英语</p>
			</li>
			<li>
				<img src="../../static/track_radio_167_10_3.jpg" alt="" />
				<p>网络流行</p>
			</li>
			<li>
				<img src="../../static/track_radio_523_10_1.jpg" alt="" />
				<p>话语嘻哈</p>
			</li>
		</ul>
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
	

</script>

<style scoped>

	#box1{
		height: 100%;
		width: 100%;
		margin: 0px;
		padding: 0px;
		box-sizing: border-box;
		overflow-x: hidden;
		padding-bottom: 50px;
		overflow-y:auto ;
	}
	#box1>.vux-slider{
		padding-top: 70px;
	}
	.ul1{
		list-style: none;
		width: 100%;
		display: flex;
		margin: 0px;
		padding: 0px;
		flex-wrap:wrap;
	}
	.ul1>li{
		width: 33.3%;
		font-size: 14px;
		padding-top: 50px;
		color: red;
		text-align: center;
		position: relative;
	}
	.ul1>li>img{
		width: 33.3%;
		position: absolute;
		top: 30%;
		left:50%;
		transform: translate(-50%,-50%);
	}
	.txt{
		font-size: 16px;
		font-weight: 500;
		width: 100%;
		text-align: center;
		margin-top: 20px;
	}
	.txt1>ul{
		margin: 0px;
		padding: 0px;
		list-style: none;
		width: 100%;
		height: auto;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	.txt1>ul>li{

		width: 32%;
		height: 50%;
		padding-bottom: 20px;
		text-align: center;
		position: relative;
	}
	.txt1>ul>li>img{
		width: 100%;
		height: 100%;
	}
	.txt1>ul>li>div{
		position: relative;
		bottom: 0px;
		text-align: center;
		font-size: 12px;
		line-height: 10px;
	}
	.txt2{
		text-align: center;
		font-size: 16px;
	}
	.txt3{
		margin-top: 10px;
	}
	.txt3>ul{
		
		width: 100%;
		height: auto;
		padding: 0px;
		margin: 0px;
		list-style: none;
		display: flex;
		flex-direction:column;
	}
	.txt3>ul>li{
		height: 50px;
		padding-left: 50px;
		position: relative;
		margin-top: 10px;
	}
	.txt3>ul>li>h3{
		font-size: 14px;
		font-family: Arial,Verdana,Sans-serif;
		line-height: 30px;
		font-weight: 100;
		display: block;
		position: relative;
		margin: 0px;
		top:0px;
		left: 10px;
	}
	.txt3>ul>li>h5{
		margin: 0px;
		padding: 0px;
		display: block;
		position: relative;
		top: 0px;
		left: 10px;
		font-weight: 100;
		font-size: 11px;
		color: #ADADAD;
	}
	.txt3>ul>li>img{
		width: 50px;
		height: 50px;
		position: absolute;
		left: 0;
		top:0;
	}
	.txt4{
		text-align: center;
		height: 50px;
		line-height: 50px;
	}
	.txt5>ul{
		width: 100%;
		height: auto;
		margin: 0px;
		padding: 0px;
		list-style: none;
		display: flex;
	}
	.txt5>ul>li{
		width: 33.3%;
		height: 100%;
		position: relative;
	}
	.txt5>ul>li>img{
		width: 100%;
		border-radius: 50%;
	}
	.txt5>ul>li>p{
		margin: 0px;
		position: relative;
		top: 0px;
		left: 0px;
		text-align: center;
		font-size: 12px;
	}

</style>