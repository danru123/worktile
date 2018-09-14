<template>
	<div class="mark_create">
		<div class="mark"></div>
		<div class="s_box">
			<div class="s_box_header">
				<p>新建日程</p> <i class="iconfont icon-hao" @click="close"></i> </div> <input type="text" placeholder="日程安排，如下午2：00例会" ref="things"> <br>
			<div class="content">
				<div class="select-one">
					<select v-model="select">
						<option>搜索</option>
						<option>会议安排</option>
						<option>哈哈哈</option>
						<option>2222</option>
					</select>
					<p class="tit">日历 &nbsp;&nbsp;</p>
				</div>
				<div class="xuanze">
					<div class="small_xuanze">
						<h4>
                    		结束日期
                		</h4>
						<div class="inp" @click="endShow = !endShow"> <span>
								{{end_year}}-{{end_month}}-{{end_day}}
							</span> <i class="iconfont icon-riliriqi"></i> 
						</div>
					</div>
					<div class="small_xuanze">
						<h4>开始日期</h4>
						<div class="inp" @click="startShow = !startShow"> 
							<span>
								{{start_year}}-{{start_month}}-{{start_day}}
							</span> <i class="iconfont icon-riliriqi"></i> 
						</div>
					</div>
				</div>
				<p class="yn">
					<span id="qu">
					</span>
					<i class="iconfont" :class="{'icon-danduduihao1':duihao}" @click="quantian"></i>
					<span>
						全天
					</span>
				</p>
				<div class="canyu">
					<span>
						参与人
					</span>
					<ul>
						<li>M</li>
						<li>+</li>
					</ul>
				</div>
				<div class="fankui yn">
					<span>
						
					</span>
					<i class="iconfont" :class="{'icon-danduduihao1':canyuren}" @click="canyu"></i>
					<span>
						参与人反馈
					</span>
				</div>
				<p class="gengduo">
					<a href="javascript:;" @click="onoroff">{{addClose}}</a>
				</p>
				<rili :syear="start_year" :smonth="start_month" :sday="start_day" @start="getStart" v-show="startShow" :sShow="startShow" @ss="getsShow"></rili>
				<endrili :syear="start_year" :eyear="end_year" :emonth="end_month" :eday="end_day" @end="getend" v-show="endShow" :eShow="endShow" @es="geteShow"></endrili>
				<div class="submit">
					<button class="ok" @click="ok">确定</button>
					<button class="no" @click="no">取消</button>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import rili from "../components/rili2"
	import endrili from "../components/rili3"
	export default {
		props: ['isshow','nowTime'],
		components:{
			rili,
			endrili
		},
		data() {
			return {
				start_year: 2018,
				start_month: 1,
				start_day: 1,
				end_year: 2018,
				end_month: 1,
				end_day: 1,
				duihao:true,
				canyuren:true,
				on_off:true,
				addClose:'添加更多选项',
				startShow:false,
				endShow:false,
				txt:"",
				select:null,
			};
		},
		methods: {
			close() {
				this.$emit('close', !this.isshow);
			},
			quantian(){
				this.duihao = !this.duihao;
			},
			canyu(){
				this.canyuren = !this.canyuren;
			},
			onoroff(){
				this.on_off = !this.on_off;
				if(this.on_off){
					this.addClose = '添加更多选项'
				}else{
					this.addClose = '隐藏更多选项'
				}
			},
			ok(){
				this.huoqu()
			},
			no(){
				this.$emit('close', !this.isshow);
			},
			getStart(data){
				var da = data[0];
				console.log(da);
				this.start_year = da.start_year;
				this.start_month = da.start_month;
				this.start_day = da.start_day;
				console.log(this.start_year,this.start_month,this.start_day)
			},
			getsShow(data){
				this.startShow = data;
			},
			getend(data){
				var da = data[0];
				console.log(da);
				this.end_year = da.end_year;
				this.end_month = da.end_month;
				this.end_day = da.end_day;
				console.log(this.end_year,this.end_month,this.end_day)
			},
			geteShow(data){
				this.endShow = data;
			},
			huoqu() {
		        function buling(n) {
		            return n.toString().length > 1 ? n.toString() : '0' + n.toString();
		        }
		        let startTime = this.start_year + '' + buling(this.start_month) + '' + buling(this.start_day);
		        let endTime = this.end_year + '' + buling(this.end_month) + '' + buling(this.end_day);

		        var se = this.select;
		        var bg;
		        if(se == '搜索'){
		        	bg = 'yellow'
		        }else if(se == '哈哈哈'){
		        	bg = 'cyan'
		        }else if(se == '会议安排'){
		        	bg = 'red'
		        }else if(se =='2222'){
		        	bg = 'blue'
		        }

		        if (this.$refs.things.value == '') {
		            return false
		        } else {
		            let xinxi = JSON.parse(localStorage.getItem('rili'));
		            xinxi.push({
		                title: this.$refs.things.value,
		                start: Number(startTime),
		                end: Number(endTime),
		                bg:bg
		            })
		            this.$refs.things.value == ''
		            this.nowTime();
		            this.isShow = !this.isShow;
		            localStorage.setItem('rili', JSON.stringify(xinxi));
		            location.reload();
		        }
    		},
		},
		created(){
			this.nowTime();
		}
	};
</script>
<style lang="scss" scoped>
	div.mark_create {
		width: 100%;
		height: 100%;
		overflow: hidden;
		position: relative;
		div.mark {
			width: 100%;
			height: 100%;
			overflow: hidden;
			background: #999;
			opacity: 0.3;
			position: absolute;
		}
		div.s_box {
			width: 650px;
			background: #fff;
			position: absolute;
			z-index: inherit;
			top: 40px;
			left: 30%;
			box-shadow: 1px 1px 5px 3px #bbb;
			border-radius: 5px;
			padding-bottom: 20px;
			div.s_box_header {
				height: 50px;
				line-height: 50px;
				position: relative;
				border-bottom: 1px solid #bbb;
				i {
					width: 15px;
					height: 15px;
					display: block;
					position: absolute;
					right: 10px;
					top: 5px;
					color: #999;
					font-weight: 600;
					font-size: 18px;
					transform: rotate(45deg);
					cursor: pointer;
				}
				p {
					width: 100%;
					padding-left: 20px;
				}
			}
			input, input:hover {
				outline-color: #22d7bb;
				width: calc(100% - 35px);
				margin-left: 15px;
				margin-top: 10px;
				font-size: 12px;
			}
			div.content {
				padding-top: 10px;
				width: 620px;
				margin: 0 auto;
				text-align: right;
				div.select-one {
					width: 100%;
					overflow: hidden;
					text-align: right;
					select {
						float: right;
						width: 530px;
						font-size: 12px;
						height: 20px;
						padding-left: 10px;
						color: #aaa;
						border: 1px solid #22D7BB;
						cursor: pointer;
						option {
							cursor: pointer;
						}
					}
					p {
						float: right;
						font-size: 16px;
						color: #ccc;
					}
				}
				div.xuanze {
					overflow: hidden;
					margin-top: 10px;
					div.small_xuanze {
						float: right;
						width: 48%;
						margin-left: 10px;
					}
					h4 {
						float: left;
						overflow: hidden;
						font-weight: normal;
						font-size: 16px;
						color: #ccc;
					}
					div.inp {
						float: left;
						overflow: hidden;
						width: 72%;
						height: 20px;
						border: 1px solid #ccc;
						margin-left: 10px;
						line-height: 20px;
						cursor: pointer;
						&:hover {
							border: 1px solid #22D7BB;
						}
						span {
							float: left;
							margin-left: 10px;
							font-size: 14px;
							color: #aaa;
						}
						i {
							display: block;
							float: right;
							color: #ccc;
						}
					}
				}
				div.yn,p.yn{
					width: 80%;
					position: relative;
					margin-top: 10px;
					margin-bottom: 20px;
					overflow: hidden;
					height: 15px;
					span:first-child{
						display: block;
						border: 1px solid #ccc;
						width: 7px;
						height: 7px;
						margin-left: 90px;
						float: left;
						border-radius: 2px;
					}
					
					i{
						position: absolute;
						left: 93px;
						top: 2px;
						color: #22D7BB;
						width: 10px;
						height: 10px;
						font-size: 10px;
						cursor: pointer;	
					}
					span:last-child{
						display: block;
						float: left;
						line-height: 10px;
						margin-left: 15px;
					}
				}
				div.canyu{
					width: 80%;
					overflow: hidden;
					span{
						float: left;
						overflow: hidden;
					margin-left: 30px;
					font-size: 16px;
					color: #ccc;
					}
					ul{
						float: left;
						margin-left: 10px;
						overflow: hidden;
						li{
							float: left;
							overflow: hidden;
							width: 20px;
							height: 20px;
							text-align: center;
							line-height: 20px;
							list-style: none;
							background: plum;
							color: white;
							border-radius: 50%;
							cursor: pointer;
							border: 2px solid plum;
							
						}
						li:last-child{
							background: transparent;
							color: #ccc;
							border: 2px dashed #ccc;
							margin-left: 10px;
						}
					}
				}
				p.gengduo{
					text-align: left;	
					a{
						display: block;
						color: #22D7BB;
						margin-left: 90px;
					}
				}
				div.startbox{
					position: absolute;
					top: 140px;
					background: #fff;
					width: 200px;
					left: 130px;
					box-shadow: 0 0 2px 2px #ccc;
				}
				div.endbox{
					position: absolute;
					top: 140px;
					background: #fff;
					width: 200px;
					left: 440px;
					box-shadow: 0 0 2px 2px #ccc;
				}
			}
		}
	}
</style>