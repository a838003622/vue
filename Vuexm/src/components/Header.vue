<template>
<div class="box" id="box">
	<ul class="ul1">
		<li>
			<img src="../../static/music.png" alt="" />
			全部歌曲
		</li>
		<li>
			<img src="../../static/music.png" alt="" />
			下载歌曲
		</li>
		<li>
			<img src="../../static/music.png" alt="" />
			最近播放
		</li>
		<li>
			<img src="../../static/music.png" alt="" />
			我喜欢
		</li>
		<li>
			<img src="../../static/music.png" alt="" />
			下载MV
		</li>
		<li>
			<img src="../../static/music.png" alt="" />
			已购音乐
		</li>
	</ul>
	<div class="oDiv">
		<img src="../../static/T002R90x90M000004flVDc2IF6Js.jpg" alt="" />
		<h3>个性电台</h3>
		<h4>来听听专门为你定制的音乐吧</h4>
	</div>
	<div class="oDiv1">
		<img src="../../static/T002R90x90M000003t2CqL02L76G.jpg" alt="" />
		<h3>跑步电台</h3>
		<h4>QQ音乐 xNike,让运动乐在其中</h4>
	</div>
	<div class="oDiv2">
		<ul>
			<li>自建歌单</li>
			<li>收藏歌单</li>
			<li>加号</li>
			<li>菜单</li>
		</ul>
	</div>
	<div class="oDiv3">
		<ul>
			<li>
				<img src="../../static/300 (2).jpg" alt="" />
				<h3>新建歌单</h3>
			</li>
			<li>
				<img src="../../static/300.jpg" alt="" />
				<h3>我喜欢</h3>
			</li>
			<li>
				<img src="../../static/300 (3).jpg" alt="" />
				<h3>新建歌单</h3>
			</li>
		</ul>
	</div>
</div>
</template>


<script>


</script>

<style scoped >
	html,body{
		margin: 0px;
		padding: 0px;
		width:100%;
		height: 100%;
		overflow-x: hidden;
		font-size: 14px;
	}
	#box{
		width: 100%;
		height: 100%;
	}
	.ul1{
		list-style: none;
		width: 100%;
		display: flex;
		margin: 0px;
		padding: 0px;
		flex-wrap:wrap;
		padding-top: 70px;
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
	.oDiv{
		height: 50px;
	    padding-left: 50px;
	    position: relative;
	    margin-top: 10px;
	}
	.oDiv>h3{
		font-size: 14px;
	    font-family: Arial,Verdana,Sans-serif;
	    line-height: 30px;
	    font-weight: 100;
	    display: block;
	    position: relative;
	    margin: 0px;
	    top: 0px;
	    left: 10px;
	}
	.oDiv>h4{
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
	.oDiv1{
		height: 50px;
	    padding-left: 50px;
	    position: relative;
	    margin-top: 10px;
	}
	.oDiv1>h3{
		font-size: 14px;
	    font-family: Arial,Verdana,Sans-serif;
	    line-height: 30px;
	    font-weight: 100;
	    display: block;
	    position: relative;
	    margin: 0px;
	    top: 0px;
	    left: 10px;		
	}
	.oDiv1>h4{
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
	.oDiv>img{
		width: 50px;
	    height: 50px;
	    position: absolute;
	    left: 0;
	    top: 0;
	}
	.oDiv1>img{
		width: 50px;
	    height: 50px;
	    position: absolute;
	    left: 0;
	    top: 0;
	}
	.oDiv2>ul{
		list-style: none;
		padding: 0px;
		margin: 0px;
		width: 100%;
		height: auto;
		display: flex;
		flex-direction:row;
		flex-wrap: nowrap;
		padding-top: 40px;
		padding-bottom: 5px;
		border-bottom: 3px solid darkgray;
	}
	.oDiv2>ul>li{
		width: 25%;
		text-align: center;
		line-height: 21px;
		font-size: 14px;
	}
	.oDiv3>ul{
		list-style: none;
		padding: 0px;
		margin: 0px;
		width: 100%;
		height: auto;
		display: flex;
		flex-direction:column;
		flex-wrap:wrap;
		padding-top: 10px;
	}	
	.oDiv3>ul>li{
		width: 100%;
		height: 50px;
		padding-left: 50px;
		position: relative;
		margin-top: 10px;
	}
	.oDiv3>ul>li>h3{
		margin: 0px;
		padding: 0px;
		font-size: 14px;
		line-height: 50px;
		font-weight: 100;
	}
	.oDiv3>ul>li>img{
		width: 50px;
		height: 50px;
		position: absolute;
		top: 0px;
		left: 0px;
	}
</style>