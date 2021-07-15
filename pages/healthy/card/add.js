// pages/customs/add.js
const db = wx.cloud.database(); // 初始化数据库

function initPage(){
   var customer = wx.getStorageSync('customer');
}

Page({

   /**
    * 页面的初始数据
    */
   data: {
      avatar:'/assets/home/Headportrait/s04.png',
      customer:[{
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
         "attention": "null"
     }],
   },
   confirm(){
      wx.showToast({
                 title: '已确认',
               })
               return ;
   },

   // 更换头像
   // chooseImg(){
   //    var that = this;
   //    wx.chooseImage({
   //      count: 1,
   //      sizeType:['compressed'],
   //      sourceType:['album','camera'],
   //      success:function(res){
   //         var tempFilePaths = res.tempFilePaths;
   //         that.setData({
   //             avatar:tempFilePaths[0]
   //         })
   //      }
   //    })
   // },

   /**
    * 添加用户信息
    * 微信昵称 nickname、用户名称 username、性别 sex、电话 phone
    */ 
   // addInfo:function(e){
   //    console.log(e);
   //    let {nickname, username, sex,city, phone, tag, remark} = e.detail.value;
   //    // 输入数据检测
   //    if(!nickname || !username){
   //       wx.showToast({
   //         title: '微信昵称或姓名或电话或标签为空',
   //       })
   //       return ;
   //    }
   //    if( !phone || !tag){
   //       wx.showToast({
   //          title: '电话或标签为空',
   //        })
   //        return ;
   //    }
   //    //数据存储
   //    db.collection('user').add({
   //       data: {
   //          nickname: username,
   //          username: username,
   //          sex: sex,
   //          city:city,
   //          phone: phone,
   //          tag: tag,
   //          remark: remark,
   //          createTime:db.serverDate()
   //       }
   //    }).then(res=>{
   //       console.log(res)
   //       //获取前一页面并传参
   //       const pages = getCurrentPages();
   //       const prevPage = pages[pages.length - 2];//上一页
   //       prevPage.setData({
   //          fresh:true
   //       })
   //       //返回到列表
   //       wx.navigateBack({
   //         delta: 1,
   //       })
   //    }).catch(err=>{
   //       console.log(err)
   //    })


      
   // },

   
   /**
    * 生命周期函数--监听页面加载
    */
   onLoad: function () {
      var that = this;

      wx.request({
         url: 'http://localhost:8088/healthyForSun/getHealthyVO',
         data:{
           custname: "张三",
           phone:"12345612312"
         },
         method:'GET',
         header: {
           'content-type': 'application/json' // 默认值
         },
         success:function(res){
         //   var healthy = res.data;
            that.data.customer = res.data;
            wx.setStorageSync('customer', that.data.customer);
            console.log(that.data.customer);
   
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