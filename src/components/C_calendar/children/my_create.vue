<template>
    <div class="mark_create">
        <div class="mark"></div>
        <div class="s_box">
            <div class="s_box_header">
                <p>新建日程</p>
                <i class="iconfont icon-hao" @click="close"></i>
            </div>
            <input type="text" placeholder="日程安排，如下午2：00例会" ref="things">
            <br>
            <div class="content">
                <div class="select-one">
                    <select>
                        <option value="">搜索</option>
                        <option value="">会议安排</option>
                        <option value="">哈哈哈</option>
                        <option value="">2222</option>
                    </select>
                    <p class="tit">日历 &nbsp;&nbsp;</p> 
                </div>
                <h4>请选择开始日期</h4>
                <select name="" id="" v-model.number="start_year">
                    <option v-for="i in 49">{{i+1969}}</option>
                </select>年
                <select name="" id="" v-model.number="start_month">
                    <option v-for="i in 12">{{i}}</option>
                </select>月
                <select name="" id="" v-model.number="start_day">
                    <option v-for="i in 31">{{i}}</option>
                </select>日
                <br>
                <h4>
                    请选择结束日期
                </h4>
                <select name="" id="" v-model.number="end_year">
                    <option v-for="i in 49">{{i+1969}}</option>
                </select>年
                <select name="" id="" v-model.number="end_month">
                    <option v-for="i in 12">{{i}}</option>
                </select>月
                <select name="" id="" v-model.number="end_day">
                    <option v-for="i in 31">{{i}}</option>
                </select>日
                <br>
                <button>确定</button>
            </div>
            
            
        </div>
    </div>
</template>

<script>
export default {
    props: ['isshow'],
  data() {
    return {
      start_year: 2018,
      start_month: 1,
      start_day: 1,
      end_year: 2018,
      end_month: 1,
      end_day: 1,
    };
  },
  methods:{
      close(){
         this.$emit('close',!this.isshow);
      }
  }
};
</script>

<style lang="scss" scoped>
div.mark_create{
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    
    div.mark{
        width: 100%;
        height: 100%;
        overflow: hidden;
        background: #ccc;
        opacity: 0.3;
        position: absolute;
    }
    div.s_box{
        width: 600px;
        overflow: hidden;
        background: #fff;
        position: absolute;
        z-index: inherit;   
        top: 40px;
        left: 35%;
        box-shadow: 1px 1px 5px 3px #bbb;
        border-radius: 5px;
        padding-bottom: 20px;
        div.s_box_header{
            height: 50px;
            line-height: 50px;
            position: relative;
            border-bottom: 1px solid #bbb;
            i{
                width: 15px;
                height: 15px;
                display: block;
                position: absolute;
                right: 10px;
                top: 5px;
                color:#999;
                font-weight: 600;
                font-size: 18px;
                transform: rotate(45deg);
                cursor: pointer;
            }
            p{
                width: 100%;
                padding-left: 20px;
            }
        }
        input,input:hover{
            outline-color: #22d7bb;
            width: calc(100% - 35px);
            margin-left: 15px;
            margin-top: 10px;
            font-size: 12px;
        }
        div.content{
            padding-top: 10px;
            width: 570px;
            margin: 0 auto;
            background: #ff0;
            text-align: right;
            div.select-one{
                width: 100%;
                overflow: hidden;
                text-align: right;
                select{
                    float: right;
                    width: 500px;
                    font-size: 12px;
                    height: 20px;
                    padding-left: 10px;
                }
                p{
                    float: right;
                    font-size: 16px;
                }
            }
        }
    }
}
</style>
