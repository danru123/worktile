<template>
    <div class="box">
        <div class="header">
            <button @click="close"> <i class="iconfont icon-jiantou-copy"></i> </button>
            <div class="title">
                <span class="year">{{year}}</span>年<span class="month">{{month}}</span>月
            </div>
            <button @click="add"><i class="iconfont icon-xiangyou"></i></button>
        </div>
        <table>
            <thead>
                <th>日</th>
                <th>一</th>
                <th>二</th>
                <th>三</th>
                <th>四</th>
                <th>五</th>
                <th>六</th>
            </thead>
            <tbody id="t_box">
                <tr v-for="(item,index) in calender.length / 7">
                    <td v-for="(item,i) in 7" :class="{cur:calender[7*index+(item-1)].cur}" @click="addClass(index,i)">{{calender[7*index + (item
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
          fullDay: `${buling(months)}`,
          day: `${pyear}${buling(pmonth)}${buling(months)}`
        });
        months--;
      }

      var _a = 1;
      while (month--) {
        arr.push({
          day: _a,
          cur: false,
          fullDay: `${buling(_a)}`,
          day: `${this.year}${buling(this.month)}${buling(_a)}`
        });
        _a++;
      }

      var nextMonth = arr.length > 35 ? 42 - arr.length : 42 - arr.length;
      _a = 1;
      while (nextMonth--) {
        arr.push({
          day: _a,
          cur: true,
          fullDay: `${buling(_a)}`,
          day: `${nyear}${buling(nmonth)}${buling(_a)}`
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
        if (this.month<=0) {
            this.year--;
            this.month = 12;
        }
    },
    add(){
        this.month++;
        if (this.month>=12) {
            this.year++;
            this.month = 1;
        }
    },
    addClass(ind,i){
   		var tBox = document.getElementById('t_box');
   		var tr = tBox.getElementsByTagName('tr');
   		for (var j = 0; j < tr.length; j++) {
   			for (var k = 0; k < tr[j].getElementsByTagName('td').length; k++) {
   				tr[j].getElementsByTagName('td')[k].classList.remove('active')
   			}
   		}
   		tr[ind].getElementsByTagName('td')[i].classList.add('active')
    }
  }
};
</script>

<style lang="scss" scoped>
button {
  float: left;
  border: none;
  display: block;
  margin-top: 8px;
  background: transparent;
  width: 10px;
  height: 10px;
  outline: none;
  cursor: pointer;
  i{
      display: block;   
  }
}
div.title {
  float: left;
  overflow: hidden;
  line-height: 30px;
  width: calc(100% - 20px);
  text-align: center;
}
table{
    width: 100%;
    height: calc(100% - 30px);
    th{
        font-weight: normal
    }
    tr,td{
        text-align: center;
    }
    td{
        width: 24px;
        height: 24px;
        border-radius: 50%;
        cursor: pointer;
        &:hover{
        	box-shadow: 0 0 1px 2px #ccc;
        }
    }
}
td.active{
	background: #22d7bb;
	color: white;
}
td.cur{
    color: gray
}
</style>
