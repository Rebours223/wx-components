// statics/components/calendarSlider/calendarSlider.js
const app = getApp();

Component({

  //选中某滑块的样式,需要!important增加权重
  externalClasses:[
    'choose-bg'
  ],
  /**
   * 组件的属性列表
   */
  properties: {
    //滑块高度
    sliderHeight:{
      type:Number,
      value:99,
      observer: function (newv, oldv, path) {
        this.data.dateTotal = newv;
      }
    },
    //日历展示的时间段,今天~n天后
    dateTotal:{
      type:Number,
      value:7,
      observer: function (newv, oldv, path) {
        this.data.dateTotal = newv;
      }
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    //时间数组,title-页面显示的日期/week-页面显示的周几/dete-yyyy-mm-dd格式的日期值
    dateArr:[],
  },

  attached:function(){
    this.initSlider(this.data.dateTotal);
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //初始化滑块组件
    initSlider(n) {
      let list = [];
      for (let i = 0; i < n; i++) {
        let now = new Date();
        let obj = {};
        now.setDate(now.getDate() + i);
        let y = now.getFullYear();
        let m = now.getMonth() + 1;
        let d = now.getDate();
        let w = now.getDay();
        obj.date = [y, m, d].map(app.$utils.formatNumber).join('-');
        obj.title = obj.date.substring(5, 10);
        switch (w) {
          case 1:
            w = "星期一";
            break;
          case 2:
            w = "星期二";
            break;
          case 3:
            w = "星期三";
            break;
          case 4:
            w = "星期四";
            break;
          case 5:
            w = "星期五";
            break;
          case 6:
            w = "星期六";
            break;
          case 0:
            w = "星期天";
            break;
        }
        obj.week = w;
        obj.checked = false;
        list[i] = obj;
      }
      list[0].checked = true;
      this.setData({
        dateArr: list
      });
    },
    //点击某一滑块
    OnDayClick(e){
      let index = e.currentTarget.dataset.index;
      let list = this.data.dateArr;
      let date = list[index].date;
      list.forEach((item) => {
        item.checked = false;
      });
      list[index].checked = true;
      this.setData({
            dateArr: list
          }
      );
      //触发页面绑定的对应方法
      this.triggerEvent('OnDayClick', date);
    }
  }
})
