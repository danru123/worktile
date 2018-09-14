<template>
<<<<<<< HEAD
    <div class="big-Box">
        <div class="left">
            <div class="title">
                <span>日历</span>
                <i class="iconfont icon-rili1"></i>
            </div>
            <div class="calendar-list-wrap">
              <!-- 日历 -->
              <div class="calendar-panel">
                  <rili></rili>
              </div>
            </div>
            <!-- 我的日程 -->
            <router-link to="/calendar/my" class="toc-section">
                <div class="section-header">
                    <a class=""><i class="iconfont icon-rili"></i></a>
                    <a class="">我的日程</a>
                    <a class=""><i class="iconfont icon-WiFi"></i></a>
                </div>
                
            </router-link>

            <!-- 团队日程 -->
            <router-link to="/calendar/all" class="toc-section" >
                <div class="section-header schedule" @click="rotate()">
                    <a><div class="tran" :class="{anTran:addTran}"></div></a>
                    <a>团队日程</a>
                    <a><i class="iconfont icon-shenglvehao-"></i></a>
                </div>
                <div class="section-body" :style="{height:isHeight}">
                    <ul>
                        <li>
                            <i class="side iconfont" @click="add_yes" :class="{'icon-danduduihao1':yes}"></i>
                            <span>会议安排</span>
                            <i class="iconfont icon-shenglvehao-"></i>
                        </li>
                        <li>
                            <i class="side iconfont" @click="add_yes" :class="{'icon-danduduihao1':yes}"></i>
                            <span>会议安排</span>
                            <i class="iconfont icon-shenglvehao-"></i>
                        </li>
                        <li>
                            <i class="side iconfont" @click="add_yes" :class="{'icon-danduduihao1':yes}"></i>
                            <span>会议安排</span>
                            <i class="iconfont icon-shenglvehao-"></i>
                        </li>
                        <li>
                            <i class="side iconfont" @click="add_yes" :class="{'icon-danduduihao1':yes}"></i>
                            <span>会议安排</span>
                            <i class="iconfont icon-shenglvehao-"></i>
                        </li>
                    </ul>
                </div>
            </router-link>
            <!-- 成员日程 -->
            <router-link to="/calendar/members" class="toc-section">
                <div class="section-header schedule" >
                    <a><div class="tran"></div></a>
                    <a>成员日程</a>
                    <a><i class="iconfont icon-addition"></i></a>
                </div>
            </router-link>
        </div>
        <div class="right">
            <router-view :show="isShow" @Fshow="getShow"></router-view>
        </div>
        <transition name="fade">
          <div class="mark" v-show="isShow">
            <create :isshow="isShow" @close="getCshow" :nowTime="nowTime"></create>
          </div>
        </transition>
      </div>
</template>

<script>
import rili from "./components/rili"
import create from './children/my_create'
export default {
  components: {
    rili,
    create
  },
  data() {
    return {
      year: 2018,
      month: 9,
      isShow: false,
      yes: false,
      isHeight:0,
      addTran:false
    };
  },
  methods: {
    nowTime() {
      let now = new Date();
      this.year = now.getFullYear();
      this.month = now.getMonth() + 1;
      this.start_year = now.getFullYear();
      this.start_month = now.getMonth() + 1;
      this.start_day = now.getDay();
      this.end_year = now.getFullYear();
      this.end_month = now.getMonth() + 1;
      this.end_day = now.getDay() + 1;
    },
    add_yes(event) {
      this.yes = !this.yes;
    },
    getShow(data){
      this.isShow = data;
    },
    getCshow(data){
      this.isShow = data;
    },
    rotate(){
      this.addTran = !this.addTran;
      if (this.isHeight == 0) {
        this.isHeight = 4*30+'px';
      }else{
        this.isHeight = 0;
      }
    },
    init() {
      let xinxi = localStorage.getItem('rili');
        this.nowTime();
        let thin = [];
        if (xinxi == null || xinxi == undefined) {
            localStorage.setItem('rili', JSON.stringify(thin));
        } else {
            return false;
        }
    }
  },
  created() {
    this.init();
  }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
}
a {
  text-decoration: none;
  color: #000;
}
div.left {
  width: 240px;
  height: 100%;
  border-right: 1px solid #ddd;
  background: rgba(253, 253, 253, 0.95);
  float: left;
  .title {
    height: 50px;
    width: 100%;
    span {
      display: inline-block;
      height: 100%;
      overflow: hidden;
      margin-left: 20px;
      margin-right: 20px;
      float: left;
      font-size: 16px;
      line-height: 50px;
    }
    i {
      float: right;
      margin-right: 20px;
      display: block;
      height: 50px;
      line-height: 50px;
      color: #bbb;
      cursor: pointer;
      &:hover {
        color: #22d7bb;
      }
    }
  }
}
div.right {
  width: calc(100% -240px);
  height: 100%;
  overflow: hidden;
  background: #ccc;
}
.calendar-list-wrap {
  padding: 10px;
  .calendar-panel {
    width: 100%;
    height: 200px;
    div.header {
      width: 100%;
      height: 30px;
      line-height: 30px;
    }
  }
}
.toc-section {
  display: block;
  .section-header {
    margin-bottom: 2px;
    padding: 8px 20px;
    position: relative;
    cursor: pointer;
    &:hover {
      a:last-child {
        display: block;
      }
    }
    a:last-child {
      float: right;
      display: none;
      overflow: hidden;
      i {
        color: #999;
      }
      &:hover i {
        color: #bbb;
      }
    }
    a:first-child {
      color: #999;
    }
  }
  .schedule {
    padding-left: 25px;
  }
  .section-body {
    width: 100%;
    overflow: hidden;
    transition: all 0.5s;
    ul {
      width: 100%;
      padding-left: 40px;
      padding-top: 10px;
      overflow: hidden;
      li {
        margin-bottom: 15px;
        clear: both;
        i:last-child {
          float: right;
          margin-right: 10px;
        }
      }
    }
  }
}
.toc-section:hover .section-header {
  box-shadow: 0 0 8px 2px #eee;
}
div.tran {
  width: 10px;
  height: 10px;
  border: 5px solid #999;
  border-top: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid transparent;
  display: inline-block;
  transition: all 0.5s;
  transform-origin: left bottom;
}
div.tran:hover {
  border-left: 5px solid #333;
}
.side {
  width: 15px;
  height: 15px;
  display: inline-block;
  background: #ff0;
  color: white;
  border-radius: 3px;
  vertical-align: middle;
}
.router-link-active {
  div.section-header{
    background: #e7f9f6 !important;
  border-right: 4px solid #22d7bb ;
  }
  
}

div.big-Box{
  div.mark{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
}
.anTran{
  transform: rotate(45deg);
}
=======
    <div>
        <h1>我是日历</h1>
    </div>
</template>

<script>
    export default {
        name: "calendar"
    }
</script>

<style scoped>

>>>>>>> lfm
</style>