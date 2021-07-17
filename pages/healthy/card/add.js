// pages/customs/add.js
import * as echarts from '../../../ec-canvas/echarts';

const app = getApp();
const db = wx.cloud.database(); // 初始化数据库

function initPage(){
   var customer = wx.getStorageSync('customer');
   var that = this;
   that.data.customer = wx.getStorageSync('customer');
}
function initChartRadar(canvas, width, height, dpr) {
    var customer = wx.getStorageSync('customer');
   var temp = customer.pressure.split("/");
   var d = [customer.weight,customer.temp,customer.sugar,temp[1],temp[0],customer.pulse];
   const chart = echarts.init(canvas, null, {
     width: width,
     height: height,
     devicePixelRatio: dpr // new
   });
   canvas.setChart(chart);
 
   var option = {
     backgroundColor: "#ffffff",
     xAxis: {
       show: false
     },
     yAxis: {
       show: false
     },
     radar: {
       // shape: 'circle',
       indicator: [{
         name: '体重',
         max: 150
       },
       {
         name: '体温',
         max: 45
       },
       {
         name: '血糖',
         max: 15
       },
       {
         name: '舒张压',
         max: 150
       },
       {
         name: '收缩压',
         max: 120
       },
       {
         name: '脉搏',
         max: 200
       }
       ]
     },
     series: [{
       name: '正常 vs 当前',
       type: 'radar',
       data: [{
         value: [67, 36.6, 6, 90, 120, 130],
         name: '正常'
       },
       {
         value: d,
         name: '当前状况'
       }
       ]
     }]
   };
 
   chart.setOption(option);
   return chart;
 }
Page({

   /**
    * 页面的初始数据
    */
   data: {
    canvasHidden:true,
    winWidth: '',
      avatar:'/assets/home/Headportrait/3.png',
      customer:{
         "custId": 1,
         "temp": 0.0,
         "pressure": null,
         "sugar": 0.0,
         "weight": 0.0,
         "pulse": 0,
         "selfCare": null,
         "day": "星期五",
         "height": 170.0,
         "sex": "男",
         "name": "张三",
         "attention": 1
     },
     ec6: {
      onInit: initChartRadar
    },
    swiperImg:[
      {
        img:"/assets/publish/temp1.png"
      },
      {
        img:"/assets/publish/temp4.png"
      },
      {
        img:"/assets/publish/temp3.png"
      }
    ],
    swiperImg2:[
      {
        img:"/assets/home/1.png"
      },
      {
        img:"/assets/home/2.png"
      },
      {
        img:"/assets/home/3.png"
      }
    ],
    KeHuItme:[
      {
        img:'/assets/svg/Khu.svg',
        title:"签约服务网点",
        txt:"一触即达,分分钟解决问题"
      },
      {
        img:'/assets/svg/Phone.svg',
        title:"客服电话",
        txt:"400-890-88900"
      }
    ],
   },
   confirm(){
      wx.showToast({
                 title: '已确认',
               })
               return ;
   },
   saveImageToPhotosAlbum:function () {
       wx.showLoading({
           title: '保存中...',
       })
       var that = this;
       //设置画板显示，才能开始绘图
       that.setData({
           canvasHidden: false
       })
       var unit = that.data.winWidth / 375
       var path1 = "/assets/export1.png"
       var context = wx.createCanvasContext('share')
       var temp = this.data.customer.temp
       var pressure = this.data.customer.pressure
       var sugar = this.data.customer.sugar
       var weight = this.data.customer.weight
       var pulse = this.data.customer.pulse
      //  var selfCare = this.data.customer.selfCare
       var day = this.data.customer.day
       var height = this.data.customer.height
       var sex = this.data.customer.sex
       var name = this.data.customer.name
       var attention = this.data.customer.attention
       context.drawImage(path1, 0, 0, unit * 375, unit * 462.5)
       //   context.drawImage(path4, 48, 200, 280, 128)
       context.setFontSize(20)
       context.setFillStyle("#ffffff")
       context.fillText(name, unit * 120, unit * 138) 
       context.fillText(sex, unit * 120, unit * 170) 

       context.fillText(height, unit * 120, unit * 205) 
       context.fillText(weight, unit * 250, unit * 205) 

       context.fillText(sugar, unit * 120, unit * 240) 
       context.fillText(pressure, unit * 250, unit * 240) 

       context.fillText(temp, unit * 120, unit * 272)  //绘制文字
       context.fillText(pulse, unit * 250, unit * 272) 
     
       context.fillText(attention, unit * 120, unit * 338) 
       
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
   /**
    * 生命周期函数--监听页面加载
    */
   onLoad: function () {
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

      wx.request({
         url: 'http://localhost:8088/healthyForSun/getHealthyVO',
         data:{
           custname:"张三",
           phone:"12345612312"
          //  custname:getApp().globalData.custName,
          //  phone:getApp().globalData.custPhone
         },
         method:'GET',
         header: {
           'content-type': 'application/json' // 默认值
         },
         success:function(res){
            that.data.customer = res.data;
            wx.setStorageSync('customer', that.data.customer);
   
         },
         fail:function(res){
           console.log(".....fail.....");
         }
       });
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
      var customer1 = wx.getStorageSync('customer');
      console.log(customer1.custId);
      this.setData({
         customer :{
            "custId": 1,
            "temp": customer1.temp,
            "pressure": customer1.pressure,
            "sugar": customer1.sugar,
            "weight": customer1.weight,
            "pulse": customer1.pulse,
            "selfCare": customer1.selfCare,
            "day": customer1.day,
            "height": customer1.height,
            "sex": customer1.sex,
            "name": customer1.name,
            "attention": customer1.attention,
         } 
      })
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