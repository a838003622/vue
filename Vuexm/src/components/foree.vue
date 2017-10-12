<template>
	
	<div class="box3" id="box3">
		<div class="txtt">
			<ul>
				<li>
					<svg class="icon" aria-hidden="true">
	  					<use xlink:href="#icon-zuanshi-copy"></use>
					</svg>
					<h4>升级VIP</h4>
				</li>
				<li>
					<svg class="icon" aria-hidden="true">
	  					<use xlink:href="#icon-10116-copy"></use>
					</svg>
					<img src="" alt="" />
					<h4>个性化中心</h4>
				</li>
				<li>
					<svg class="icon" aria-hidden="true">
	  					<use xlink:href="#icon-xiaoxizhongxin"></use>
					</svg>
					<img src="" alt="" />
					<h4>消息中心</h4>
				</li>
			</ul>
		</div>
		<div class="txtt1">
			<ul>
				<li>仅WIFI-联网</li>
				<li>定时关闭</li>
				<li>免流量服务</li>
				<li>听歌偏好</li>
				<li>微云音乐网盘</li>
				<li>传歌到手机</li>
				<li>清理占用空间</li>
				<li>帮助与反馈</li>
				<li>关于QQ音乐</li>
			</ul>
		</div>
		<div class="txtt2">
			<a href="">设置</a>
			<a href="">退出微信登录</a>
		</div>
	</div>
</template>

<script src="../../font/iconfont.js">
</script>

<style scoped>
#box3 .icon {
   width: 3em; height: 3em;
   vertical-align: -0.15em;
   fill: currentColor;
   overflow: hidden;
   position: absolute;
   width: 100%;
   height: 50px;
   left: 0px;
   
}
	#box3{
		width: 100%;
		height: 100%;
		padding-top: 70px;
	}
	.txtt>ul{
		width: 100%;
		height: auto;
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		border-bottom: 1px solid gray;
		padding-bottom: 20px;
		margin-top: 10px;
	}
	.txtt>ul>li{
		width: 33.3%;
		height: 70px;
		text-align: center;
		position: relative;
	}

	.txtt>ul>li>h4{
		margin: 0px;
		padding-top: 50px;
		height: 20px;
		position: relative;
		bottom: 0px;
		font-size: 14px;
		line-height: 20px;
		font-weight: 100;
	}
	.txtt1{
		margin-top: 20px;
	}
	.txtt1>ul{
		list-style: none;
		width: 100%;
		height: 100%;
		padding: 0px;
		margin: 0px;
		display: flex;
		flex-direction: column;
	}
	.txtt1>ul>li{
		margin-bottom: 10px;
	}
	.txtt2{
		text-align: center;
		padding-top: 10px;
		border-top: 10px solid black;
	}
	.txtt2>a{
		text-decoration: none;
		color: #000000;
		font-size: 18px;
		margin-left: 20px;
	}
</style>