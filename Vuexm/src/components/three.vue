<template>
	<div class="box2" id="box2">
		<swiper auto :list="list"></swiper>
		<div class="oDiv4">
			<ul>
				<li>
					<img src="../../static/300 (1).jpg" alt="" />
					<h3>他公布恋情后却在韩网引争议</h3>
					<h4>昨天鹿晗的一条爆炸性微博让不少粉丝路人都傻了眼,一时间多条消息轮番轰炸,相信大家也都时刻...</h4>
				</li>
				<li>
					<img src="../../static/300 (2).jpg" alt="" />
					<h3>TS6发行倒计时:网瘾少女登场,监视粉丝</h3>
					<h4>最近几天,美国著名网络少女歌手霉霉Taylor&nbsp;Swift可以说是非常闲了。</h4>
				</li>
				<li>
					<img src="../../static/300 (3).jpg" alt="" />
					<h3>否定的浪漫旅程|贝多芬与英雄</h3>
					<h4>路德维希·凡·贝多芬(LUDWIG VANBEETHOVEN,1770 - 1827年)</h4>
				</li>
				<li>
					<img src="../../static/300.jpg" alt="" />
					<h3>日本NHK大河剧乐赏(下)</h3>
					<h4>上回,笔者为大家简单简单介绍了6部大河剧的配乐,这六部剧都讲述了日本历史中真真铁骨的好男..</h4>
				</li>
				<li>
					<img src="../../static/timg.jpg" alt="" />
					<h3>有生之年必看的演唱会?火星哥肯定帮上有名</h3>
					<h4>五座格莱美大奖加身、21次格莱美提名两次登上超级碗中场秀的唱作人、制作人、导演、音乐人火星...</h4>
				</li>
				<li>
					<img src="../../static/timg1.jpg" alt="" />
					<h3>重启大作《银翼杀手2049》电影原声抢先体验</h3>
					<h4>经典IP《银翼杀手2049》中国定档11月登陆,时隔35年之久,《银翼杀手2049》作为经典重启之作...</h4>
				</li>
				<li>
					<img src="../../static/timg2.jpg" alt="" />
					<h3>2018年格莱美,固守过去还是面向未来</h3>
					<h4>每年这个时候,美国音乐媒体都将推出一系列有关年度格莱美的内容专栏,对明年格莱美颁奖...</h4>
				</li>
				<li>
					<img src="../../static/track_radio_120_10_6.jpg" alt="" />
					<h3>欧美歌手爆棚,年底前可能你都要吃土了</h3>
					<h4>#什么值得听#就目前确定发片的歌手已经超过5位,而且他们都是万众瞩目的大牌歌手从Taylor Swift...</h4>
				</li>
				<li>
					<img src="../../static/track_radio_167_10_3.jpg" alt="" />
					<h3>许美静:如果王菲是冷的话,他就是凉</h3>
					<h4>好像每个人都有老歌清洁,旋律是与记忆粘连的,当那把通往时间的要是打开,我们都在歌里找到了...</h4>
				</li>
				<li>
					<img src="../../static/track_radio_523_10_1.jpg" alt="" />
					<h3>罗德里格斯:不亚于鲍勃·迪伦,却被人遗忘</h3>
					<h4>如果不是2013年的奥斯卡颁奖典礼上由马利克·本德让劳尔执导的记录片《寻找小糖人》一举夺得奥斯卡..</h4>
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

<style>
	#box2{
		padding: 0px;
		margin: 0px;
		width: 100%;
		height: 100%;
	}
	#box2>.vux-slider{
		padding-top: 70px;
	}
	.oDiv4{
		width: 100%;
		height: 100%;
		padding: 0;
		margin: 0;
	}
	.oDiv4>ul{
		padding: 0px;
		margin: 0px;
		list-style: none;
		width: 100%;
		height: auto;
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		margin-top: 20px;
	}
	.oDiv4>ul>li{
		height: 150px;
		padding-bottom: 5px;
		border-bottom: 1px solid gray!important;
		padding-right: 100px;
		position: relative;
	}
	.oDiv4>ul>li>h3{
		width: 200px;
		padding: 0px;
		margin: 0px;
		font-size: 18px;
		font-weight: 100;
		color: red;
	}
	.oDiv4>ul>li>h4{
		width: 200px;
		margin: 0px;
		padding: 0px;
		font-size: 14px;
		color: #CCCCCC;
		font-weight: 100;
	}
	.oDiv4>ul>li>img{
		width: 100px;
		height: 100px;
		position: absolute;
		right: 0px;
		top: 0px;
	}
</style>