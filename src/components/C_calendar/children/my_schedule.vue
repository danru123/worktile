<template>
    <div>
    <div class="box" v-for="(item,index) in schedule">
        <table>
            <tr v-for="child in item">
                <td v-for='txt of child' :style="{width:1000 / 7 * txt.colspan +'px'}" :colspan="txt.colspan" >{{txt.title}}{{txt.bgc}}</td>
            </tr>
        </table>
    </div> 
    </div>
</template>

<script>
export default {
    props: ['calender'],
  data() {
    return {};
  },
  computed:{
    schedule() {
      var arr = [];
      var s = JSON.parse(localStorage.getItem("rili"));
      
      for (var i = 0; i < this.calender.length / 7; i++) {
        arr.push([]);
        for (var j = 0; j < 3; j++) {
          arr[i].push([]);
          for (var k = 0; k < 7; k++) {
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
  }
};
</script>

<style lang="scss" scoped>
div.box{
    width: 100%;
    height: calc(100% / 7);
    table{
        width: 100%;
        margin-top: 5px;
        tr{
            width: 100%;
            td{
                border: none;
                height: 25px;
                
            }
        }
    }
}
</style>
