// pages/home/home.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    nurContent:null,
		img:[
			"/assets/banner.png",
			"/assets/main.png",
			],
			info:[
				"我是数据一",
				"我是数据二",
				"我是数据三",
				"我是数据四"
			],
      /**轮播图数据接口 */
      swiperImg:[
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
      /**房东直卖  优选房源 图标接口数据 */
      maifangImg:[
        {
          img:'/assets/location.png',
          title:'实时定位'
        },
        {
          img:'/assets/healthy.png',
          title:'健康情况'
        },
        {
          img:'/assets/food.png',
          title:'膳食情况'
        },
        {
          img:'/assets/doctor.png',
          title:'护工信息'
        }
      ],
    homeListItemYx: [
      {
        id: '1',
        zd:'1',
        img: '/assets/doctor/1.jpg',
        title: '梅岭社区颐养中心服务，营养配餐、清洁卫生、居室安全',
        stmel: '天心区',
        stmels: '梅岭社区',
        number: '200',
        specifications: '从业7年',
        squaremeter: '98.6',
        homesuper: '任劳任怨',
        avatar: '../../assets/home/Headportrait/s01.png',
        type: '个人'
      },
      {
        id: '2',
        img: '/assets/doctor/2.jpg',
        title: '梅岭社区颐养中心服务，护理卫生、衣物清洗、协助沐浴',
        stmel: '天心区',
        stmels: '梅岭社区',
        number: '180',
        specifications: '从业3年',
        squaremeter: '89.7',
        homesuper: '热情干练',
        avatar: '../../assets/home/Headportrait/s02.png',
        type: '个人'
      },
      {
        id: '3',
        img: '/assets/doctor/3.jpg',
        title: '梅岭社区颐养中心服务，健康保健，常见老年病的护理，正确掌握给药途径',
        stmel: '天心区',
        stmels: '梅岭社区',
        number: '220',
        specifications: '从业4年',
        squaremeter: '91.5',
        homesuper: '知识充沛',
        avatar: '../../assets/home/Headportrait/s03.png',
        type: '企业'
      },
      {
        id: '4',
        img: '/assets/doctor/4.jpg',
        title: '梅岭社区颐养中心服务，沟通陪伴，针对病患存在和潜在的心理问题，给予关怀、支持和帮助',
        stmel: '天心区',
        stmels: '梅岭社区',
        number: '200',
        specifications: '从业6年',
        homesuper: '学历优秀',
        squaremeter: '97.3',
        avatar: '../../assets/home/Headportrait/s04.png',
        type: '企业'
      }
    ],
      /**客服数据接口 */
      KeHuItme:[
        {
          img:'../../assets/svg/Khu.svg',
          title:"签约服务网点",
          txt:"一触即达,分分钟解决问题"
        },
        {
          img:'../../assets/svg/Phone.svg',
          title:"客服电话",
          txt:"400-890-88900"
        }
      ],
      /**homeFeuer */
      homeFeuerFd:[
        {
          title01:"高级护理",
          title02:"查看更多",
          img:"../../assets/svg/fhui.svg"
        }
      ],
    homeFeuerYx: [
      {
        title01: "优选护工",
        title02: "查看更多",
        img: "../../../assets/svg/fhui.svg"
      }
    ]
  },
  gotoWyue:function(){
    wx.navigateTo({
      url:"/pages/home/homeWYue/homeWYue",
    })
  },
  gotoSellBuy:function(){
    wx.navigateTo({
      url:'/pages/home/homeSellBuy/homeSellBuy'
    })
  },
  gotoGods:function(){
    wx.navigateTo({
      url:'/pages/home/homeGods/homeGods'
    })
  },
  gotoSelf:function(e){
    var num = e.currentTarget.dataset.index;
    if(num == 0){
      wx.navigateTo({
        url: '/pages/healthy/map/map'
      })
    } else if (num == 1){
      if(getApp().globalData.phone == ""){
        console.log(getApp().globalData.phone),
  
        wx.showModal({
          title: '提示',
          content: '您还未登录',
          success: function(res) {
           if (res.confirm) {
            console.log('用户点击确定')
           }
          }
         })
  
      }else{
        wx.request({
          url: 'http://localhost:8088/healthyForSun/getHealthyList',
          data:{
            // custname:"张三",
            // phone:"12345612312"
            custname:getApp().globalData.custName,
            phone:getApp().globalData.custPhone,
          },
          method:'GET',
          header: {
            'content-type': 'application/json' // 默认值
          },
          success:function(res){
            wx.setStorageSync('healthyList', res.data);
            console.log(res.data)
    
          },
          fail:function(res){
            console.log(".....fail.....");
          }
        });

        wx.navigateTo({
          url: '/pages/healthy/healthy/healthy'
        })
      }
     
    }else if (num == 2){
      
      if(getApp().globalData.phone == ""){
  
        wx.showModal({
          title: '提示',
          content: '您还未登录',
          success: function(res) {
           if (res.confirm) {
            console.log('用户点击确定')
           }
          }
         })
  
      }else{
        var that = this;
        wx.request({
          url: 'http://localhost:8088/dietForCustomer/getOrderDietById',
          async : false,
          data:{
            custname: getApp().globalData.custName,
            phone:getApp().globalData.custPhone
          },
          method:'GET',
          header: {
            'content-type': 'application/json' // 默认值
          },
          success:function(res){
            var dietList = res.data;
            var planList = new Array(1);
            var breakList = new Array(1); 
            var lunchList = new Array(1); 
            var dinnerList = new Array(1); 
            for(var i = 0; i < dietList.length; i++){
              planList[i] = dietList[i].day;
              breakList[i] = dietList[i].breakfastId;
              lunchList[i] = dietList[i].lunchId;
              dinnerList[i] = dietList[i].dinnerId;
            }
            wx.setStorageSync('planList', planList);
            wx.setStorageSync('breakList', breakList);
            wx.setStorageSync('lunchList', lunchList);
            wx.setStorageSync('dinnerList', dinnerList);
          },
          fail:function(res){
            console.log(".....fail.....");
          }
        });
        wx.navigateTo({
          url: '/pages/timeline/index'
        })
      }

    }else if (num == 3){
      if(getApp().globalData.phone == ""){
  
        wx.showModal({
          title: '提示',
          content: '您还未登录',
          success: function(res) {
           if (res.confirm) {
            console.log('用户点击确定')
           }
          }
         })
  
      }else{
        
        var that = this;
        wx.request({
          url: 'http://localhost:8088/nurseContent/getNurseContent',
          data:{
            // custname:"张三",
            // phone:"12345612312"
            custname:getApp().globalData.custName,
            phone:getApp().globalData.custPhone
          },
          method:'GET',
          header: {
            'content-type': 'application/json' // 默认值
          },
          success:function(res){
            
            wx.setStorageSync('nurContent', res.data);
          },
          fail:(res)=>{
            console.log(".....fail.....");
          }
        });

        wx.navigateTo({
          url: '/pages/home/nurse/nurse?nurContent'
        });
       
      }
    }else if (num == 4){
      wx.navigateTo({
        url: '/pages/home/newHouseList/newHouseList?id='+num
      })
    }else if (num == 5){
      // wx.navigateTo({
      //   url: '/pages/home/homeLeiBo/homeLeiBo?id='+num
      // })
    }
  },
	phone() {
		wx.makePhoneCall({
			phoneNumber: "10086",
		})
	},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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