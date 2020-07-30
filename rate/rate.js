Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //评分个数
    rateNum: {
      type: Number,
      value: 5,
      observer: function (newv, oldv, path) {
        this.data.rateNum = newv;
      }
    },
    //初始评分
    rateScore: {
      type: Number,
      value: 0,
      observer: function (newv, oldv, path) {
        this.data.rateScore = newv;
        this.initRate();
      }
    },
    //是否可点击
    isEditable:{
      type: Boolean,
      value: 1,
      observer: function (newv, oldv, path) {
        this.data.isEditable = newv;
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    ratelist: [],
    rateName:['差','一般','满意','较满意','非常满意'],
    text:'',
  },

  attached: function () {
    this.initRate();
  },

  /**
   * 组件的方法列表
   */
  methods: {

    //初始化评分列表
    initRate() {
      let list = [];
      for (let i = 0, length = this.data.rateNum; i < length; i++) {
        let obj = { checked: false };
        if (i <= this.data.rateScore - 1) {
          obj.checked = true;
        }
        list.push(obj); 
      }
      this.setData({
        ratelist: list,
        text:this.data.rateName[this.data.rateScore - 1]
      })
    },

    //点击评分
    onRateChange(e) {
      if (!this.data.isEditable){
        return;
      }
      let index = e.currentTarget.dataset.index / 1;
      let list = JSON.parse(JSON.stringify(this.data.ratelist));
      list.forEach((item, i) => {
        if (i <= index) {
          list[i].checked = true;
        } else {
          list[i].checked = false;
        }
      });
      this.setData({
        ratelist: list,
        text:this.data.rateName[index]
      });
      let res = {
        list: list,
        score: index + 1
      }
      this.triggerEvent('OnRateChange', res);
    },
  }
})
