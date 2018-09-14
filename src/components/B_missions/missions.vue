<template>
    <div>
        <h1>我是项目</h1>
    </div>
</template>

<script>
    export default {
        name: "items"
    }
</script>

<style scoped>

	.C-l .body-list ul li,.C-l .body-list ul .lis{
		font-size:14px;
		width: 240px;
		margin-bottom: 2px;
	    padding: 8px 20px;
	    position: relative;
	    transition: all 0.5s ease;
	}
	.C-l .body-list ul .lis:hover{
		box-shadow: 0 0 8px 2px #eee;
	}
	.C-l .body-list ul li:hover{
		box-shadow: 0 0 8px 2px #eee;
	}
	.C-l .body-list ul li a{
		font-size:14px;
	    cursor: pointer;
	    color:#333;
	}
	.C-l .body-list ul li .iconfont,.C-l .body-list ul .iconfont{
		color: #aaa;
		font-size:12px;
		transition: all 0.5s ease;
		margin-right: 6px;
	    display: inline-block;
	    width: 14px;
	    vertical-align: middle;
	}
	.icon-sousuo{
		position: absolute;
	    top: 10px;
	    left: 30px;
	    color: #8f8f8f;
	}
	.rotate-caret {
	    -webkit-transform: rotate(45deg);
	    transform: rotate(45deg);
	}
	.C-l .body-list .box{
		width:100%;
		overflow: hidden;
		transition: all 0.5s ease;
	}
	.C-l .body-list .box .work{
		padding:0;
	}
	.C-l .body-list .box .work a{
		color: #666;
	    display: block;
	    padding: 9px 20px 9px 39px;
	    position: relative;
	    overflow: hidden;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    transition: box-shadow .2s,-webkit-box-shadow .2s;
	    border-right: 4px solid transparent;
	    font-size:14px;
	}
	.active{
		background: #e7f9f6;
	    text-decoration: none;
	    border-right: 4px solid #22d7bb;
	}
	.active a{
	    color: #22d7bb;
	}
	.C-l .body-list .box .work a .iconfont{
		color: #22d7bb;
		display: inline-block;
	    margin-right: 8px;
	    font-size: 15px;
	    position: relative;
	    top: 1px;
	    width:16px;
	    height:24px;
	}
	.C-l .body-list .box .work:hover a{
		background:#fff;
		box-shadow: 0 0 8px 2px #eee;
		color: #22d7bb;
	}
	.C-r{
		width: 100%;
		flex:1 1 0;
		overflow:scroll;
	}
</style>