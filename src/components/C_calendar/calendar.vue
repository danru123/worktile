<template>
    <div>
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
                <div class="section-header schedule">
                    <a><div class="tran"></div></a>
                    <a>团队日程</a>
                    <a><i class="iconfont icon-shenglvehao-"></i></a>
                </div>
                <div class="section-body">
                    <transition name="fade">
                    <ul v-show="teamShow">
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
                    </transition>
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
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import rili from "./components/rili";
export default {
  components: {
    rili
  },
  data() {
    return {
      year: 2018,
      month: 9,
      start_year: 2018,
      start_month: 1,
      start_day: 1,
      end_year: 2018,
      end_month: 1,
      end_day: 1,
      isShow: false,
      yes: false,
      teamShow: false,
      memberShow: false
    };
  },
  computed: {
    schedule() {
      var arr = [];
      var s = JSON.parse(localStorage.getItem("rili"));

      for (var i = 0; i < this.calender.length / 7; i++) {
        arr.push([]);
        for (var j = 0; j < 3; j++) {
          arr[i].push([]);
          for (var k = 0; k < 7; k++) {
            console.log(this.calender[i * 7 + k]);

            arr[i][j].push({
              colspan: 1,
              fullDay: this.calender[i * 7 + k].fullDay,
              week: k
            });
          }
        }
      }

      s.forEach(item => {
        var start = new Date(
          item.start.toString().substr(0, 4),
          item.start.toString().substr(4, 2) - 1,
          item.start.toString().substr(6, 2)
        );
        var end = new Date(
          item.end.toString().substr(0, 4),
          item.end.toString().substr(4, 2) - 1,
          item.end.toString().substr(6, 2)
        );
        var during = (end - start) / 86400000 + 1;

        var flag = true;
        arr.forEach((week, weekidx) => {
          for (var i = 0; i < 3; i++) {
            // 遍历td
            for (var j = 0; j < 7; j++) {
              if (week[i][j]) {
                if (
                  week[i][j].fullDay == item.start &&
                  flag &&
                  !week[i][j].title
                ) {
                  var nowWeekDuring =
                    during + week[i][j].week <= 7
                      ? during
                      : 7 - week[i][j].week;
                  console.log(during, week[i][j]);
                  // var nowWeekDuring = during + week[i][j].week <= 7 ? during : 7 - week[i][j].week;

                  week[i][j].title = item.title;
                  week[i][j].colspan = nowWeekDuring;
                  week[i].splice(j + 1, nowWeekDuring - 1);
                  // 上锁
                  flag = false;

                  // 以下内容就是后边跨周持续时间的内容,跟第一周没有关系了
                  //信号量,剩余的事务持续时间
                  var rest = during - nowWeekDuring;
                  console.log(rest);

                  var count = 0;

                  while (rest > 0) {
                    count++;

                    var nextWeekDuring = rest >= 7 ? 7 : rest;
                    for (var n = 0; n < 3; n++) {
                      // 判断如果当前行有标题,就去下一行
                      if (arr[weekidx + count][n][0].title) {
                        continue;
                      }
                      //weekidx是起始周 count 垮了几周
                      arr[weekidx + count][n][0].title = item.title;
                      arr[weekidx + count][n][0].colspan = rest;
                      arr[weekidx + count][n].splice(1, nextWeekDuring - 1);
                      break;
                    }
                    rest -= 7;
                  }
                }
              }
            }
          }
        });
      });
      return arr;
    }
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
    
  },
  created() {
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
    height: auto;
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
</style>