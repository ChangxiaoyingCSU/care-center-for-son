// pages/pay/pay.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
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
    // let allMoney = this.getAllMoney();
    // this.setData({
    //   allMoney:allMoney
    // })
    // let allMoney = this.getAllMoney();
    // this.setData({
    //   allMoney:allMoney
    // })
    this.setData({
      name:options.name,
      days:options.days,
      money:options.money,
      allMoney:options.allMoney
    })
    let startDay = this.getStartDay();
    let endDay = this.getEndDay();
    this.setData({
      startDay:startDay,
      endDay:endDay
    })
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

  }
})