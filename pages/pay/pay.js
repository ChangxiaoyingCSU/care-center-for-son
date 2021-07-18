// pages/pay/pay.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    canvasHidden:true,
    winWidth: 0,
    name:null,
    days:0,
    money:0,
    allMoney:0,
    startDay:null,
    endDay:null
  },


  //已经支付完成的按钮
  alreadyPay:function(){
   
    wx.navigateTo({
      url: 'url',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      name:options.name,
      days:options.days,
      money:options.money,
      allMoney:options.allMoney,
    })
    let startDay = this.getStartDay();
    let endDay = this.getEndDay();
    this.setData({
      startDay:startDay,
      endDay:endDay
    });
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
        console(winWidth)
      }
    });
  },

  //获取订单生效日期
  getStartDay(){
    let curentDate= new Date();
    let year = curentDate.getFullYear().toString();
    let month =(curentDate.getMonth() + 1).toString().toString().padStart(2,'0');
    let day = (curentDate.getDate()).toString();  
    let startDay =  {'year':year, 'month':month ,'day': day};
    console.log(startDay);
    return startDay;
  },

  //获取订单截止日期
  getEndDay(){
    let curentDate= new Date();
    let days = this.data.days;
    console.log(curentDate.getDate());
    curentDate.setDate(curentDate.getDate() + Number(days));
    let year = curentDate.getFullYear().toString();
    let month =(curentDate.getMonth() + 1).toString().toString().padStart(2,'0');
    let day = (curentDate.getDate()).toString();  
    let startDay =  {'year':year, 'month':month ,'day': day};
    console.log(startDay);
    return startDay;
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  saveImageToPhotosAlbum:function () {
    wx.showLoading({
        title: '生成中...',
    })
    var that = this;
    //设置画板显示，才能开始绘图
    that.setData({
        canvasHidden: false
    })
    var unit = that.data.winWidth / 375
    var path1 = "/assets/protocol.png"
    var context = wx.createCanvasContext('share')
    var name = this.data.name
    var days = this.data.days
    var money = this.data.money
    var allMoney = this.data.allMoney
    var startYear = this.data.startDay.year
    var startMonth = this.data.startDay.month
    var startDays = this.data.startDay.day
    var endYear = this.data.endDay.year
    var endMonth = this.data.endDay.month
    var endDays = this.data.endDay.day
    console.log(name+days+startYear+startMonth+startDays+endYear+endMonth+endDays)
    context.drawImage(path1, 0, 0, unit * 375, unit * 462.5)
    context.setFontSize(10)
    context.setFillStyle("#000000")
    context.fillText(name, unit * 50, unit * 57) 
    // context.fillText(days, unit * 120, unit * 170) 
    context.fillText(money, unit * 55, unit * 193) 
    context.fillText(allMoney, unit * 133, unit * 193) 

    context.fillText(days+"天", unit * 140, unit * 370) 
    context.fillText(startYear, unit * 110, unit * 395) 
    context.fillText(startMonth, unit * 150, unit * 395) 
    context.fillText(startDays, unit * 180, unit * 395)  //绘制文字
    context.fillText(endYear, unit * 250, unit * 395) 
    context.fillText(endMonth, unit * 290, unit * 395) 
    context.fillText(endDays, unit * 320, unit * 395) 

    context.fillText(name, unit * 290, unit * 415) 
    
    context.fillText(startYear, unit * 42, unit * 440) 
    context.fillText(startMonth, unit * 82, unit * 440) 
    context.fillText(startDays, unit * 110, unit * 440)  //绘制文字
    context.fillText(endYear, unit * 230, unit * 440) 
    context.fillText(endMonth, unit * 270, unit * 440) 
    context.fillText(endDays, unit * 300, unit * 440) 
    context.save()
    context.beginPath()
      context.restore()
    //把画板内容绘制成图片，并回调 画板图片路径
    context.draw(false, function () {
        wx.canvasToTempFilePath({
            x: 0,
            y: 0,
            width: unit * 375,
            height: unit * 462.5,
            destWidth: unit * 375,
            destHeight: unit * 462.5,
            canvasId: 'share',
            success: function (res) {
                that.setData({
                    shareImgPath: res.tempFilePath
                })
                if (!res.tempFilePath) {
                    wx.showModal({
                        title: '提示',
                        content: '图片绘制中，请稍后重试',
                        showCancel: false
                    })
                }
                console.log(that.data.shareImgPath)
                //画板路径保存成功后，调用方法吧图片保存到用户相册
                wx.saveImageToPhotosAlbum({
                    filePath: res.tempFilePath,
                    //保存成功失败之后，都要隐藏画板，否则影响界面显示。
                    success: (res) => {
                        console.log(res)
                        wx.hideLoading()
                        that.setData({
                            canvasHidden: true
                        })
                    },
                    fail: (err) => {
                        console.log(err)
                        wx.hideLoading()
                        that.setData({
                            canvasHidden: true
                        })
                    }
                })
            }
        })
    });
  },
})