<template>
    <div class="box">
        <div class="header"> 
            <div class="logo">
                <i class="iconfont icon-riliriqi"></i>
                <span>成员日程</span>
            </div>
            <div class="header_right">
                <button class="create">+ 新建日程</button>
                <ul>
                    <li><button>月</button></li>
                    <li><button>周</button></li>
                    
                </ul>
            </div>
            <div class="center">
                <button @click="close"> <i class="iconfont icon-jiantouarrowhead7"></i> </button>
            <div class="title">
                <span class="year">{{year}}</span>年<span class="month">{{month}}</span>月
            </div>
            <button @click="add"><i class="iconfont icon-jiantou2"></i></button>
            </div>
            
        </div>
        <table>
            <thead>
                <th>周日</th>
                <th>周一</th>
                <th>周二</th>
                <th>周三</th>
                <th>周四</th>
                <th>周五</th>
                <th>周六</th>
            </thead>
            <tbody>
                <tr v-for="(item,index) in calender.length / 7">
                    <td v-for="item in 7" :class="{cur:calender[7*index+(item-1)].cur}">{{calender[7*index + (item
                        -1)].fullDay}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
  data() {
    return {
      year: 1970,
      month: 1
    };
  },

  created() {
    this.nowYM();
  },
  computed: {
    calender() {
      var arr = [];
      var month = new Date(this.year, this.month, 0).getDate(); // 本月天数
      var months = new Date(this.year, this.month - 1, 0).getDate(); // 上月天数
      var week = new Date(this.year, this.month - 1).getDay(); // 本月第一天是周几

      var pmonth = this.month == 1 ? 12 : this.month - 1;
      var pyear = this.month == 1 ? this.year - 1 : this.year;
      var nmonth = this.month == 12 ? 1 : this.month + 1;
      var nyear = this.year == 12 ? this.year + 1 : this.year;

      function buling(n) {
        return n.toString().length > 1 ? n.toString() : "0" + n.toString();
      }

      while (week--) {
        arr.unshift({
          day: months,
          cur: true,
          fullDay: `${buling(months)}`
        });
        months--;
      }

      var _a = 1;
      while (month--) {
        arr.push({
          day: _a,
          cur: false,
          fullDay: `${buling(_a)}`
        });
        _a++;
      }

      var nextMonth = arr.length > 35 ? 42 - arr.length : 42 - arr.length;
      _a = 1;
      while (nextMonth--) {
        arr.push({
          day: _a,
          cur: true,
          fullDay: `${buling(_a)}`
        });
        _a++;
      }

      return arr;
    }
  },
  methods: {
    nowYM() {
      var now = new Date();
      var nowYear = now.getFullYear();
      var nowMonth = now.getMonth() + 1;
      this.year = nowYear;
      this.month = nowMonth;
    },
    close() {
      this.month--;
      if (this.month <= 0) {
        this.year--;
        this.month = 12;
      }
    },
    add() {
      this.month++;
      if (this.month >= 12) {
        this.year++;
        this.month = 1;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
table {
  width: calc(100% - 20px);
  height: 100%;
  margin: 10px;
  margin-right: 10px;
  background: #fff;
  border-collapse: collapse;
}
div.header {
  width: 100%;
  height: 50px;
  line-height: 50px;
  position: relative;
  background: #fff;
  div.logo {
    float: left;
    margin-left: 10px;
    i {
      display: inline-block;
      font-size: 20px;
      cursor: pointer;
      color: #22d7bb;
    }
    span {
      display: inline-block;
      margin-left: 20px;
      font-size: 16px;
    }
  }
  div.center {
    text-align: center;
    float: right;
    width: 150px;
    font-size: 16px;
    margin-right: 120px;
    overflow: hidden;
    height: 50px;
    line-height: 50px;
  }
  div.header_right {
    float: right;
    overflow: hidden;
    button.create {
      width: 110px;
      height: 30px;
      background: #22d7bb;
      border-color: #22d7bb;
      color: white;
      border-radius: 20px;
      margin-right: 20px;
      margin-top: 10px;
      &:hover {
        box-shadow: 0 2px 5px 1px rgba(34, 215, 187, 0.6);
      }
    }
    ul {
      overflow: hidden;
      height: 20px;
      border-radius: 3px;
      margin: 18px 10px 0 0;
      border-left: none;
      li {
        border: 1px solid #ccc;
        float: left;
        list-style-type: none;
        overflow: hidden;
        border-left: none;
        box-sizing: border-box;
        &:first-child {
          border-left: 1px solid #ccc;
        }
        &:hover {
          border: 1px solid #22d7bb;
        }
        button {
          width: 70px;
          height: 100%;
          margin: 0;
          font-size: 12px;
        }
      }
    }
  }
}
button {
  float: left;
  border: none;
  display: block;
  margin-top: 16px;
  background: transparent;
  width: 15px;
  height: 20px;
  outline: none;
  color: #ccc;
  cursor: pointer;
  overflow: hidden;
  text-align: center;
  i {
    display: block;
  }
  &:last-child {
    margin-right: 10px;
  }
}
div.title {
  float: left;
  overflow: hidden;
  line-height: 50px;
  width: calc(100% - 40px);
  text-align: center;
}
table {
  th {
    font-weight: normal;
    height: 40px;
  }
  tr,
  td {
    text-align: center;
  }
  td {
    width: calc(100% / 7);
    height: 100px;
    border: 1px solid #aaa;
    border-left: 0px;
    border-bottom: 0px;
    text-align: left;
    vertical-align: top;
  }
}
td.cur {
  color: gray;
}
</style>
