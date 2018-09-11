<template>
    <div>
        <div class="t">
        	<i class="iconfont icon-huishouzhan"></i>
        	回收站
        </div>
        <div class="b">
        	<div class="tu">
        		<img src="../../../assets/B-k.png">
        	</div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
	.t{
		height:50px;
		width: 100%;
		background: #fff;
		font-size:14px;
		line-height: 50px;
		padding-left: 20px;
	}
	.t i{
		font-size:14px;
		color: #22d7bb;
		line-height: 50px;
		margin-right:10px;
	}
	.b{
    	flex: 1;
	    display: flex;
	    flex-direction: column;
	    padding: 15px;
	    height: calc(100% - 50px);
	}
	.b .tu{
		width: 100%;
		height:100%;
    	background: #fff;
    	position: relative;
	}
	.b .tu img{
		position: absolute;
		top:45%;
		left:45%;
	}
	div{
		height:100%;
	}
	*{
		box-sizing: border-box;
	}
</style>
