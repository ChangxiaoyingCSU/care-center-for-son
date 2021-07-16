// pages/home/home.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
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
          img:'/assets/money.png',
          title:'护工信息'
        }
      ],
      /**测试数据  已废 */
      Directsale:[
        {
          img:'/assets/swiper/1505369912_OSsyYi.jpg',
          title:'地铁电梯,套二,中庭好房有车库'
        },
        {
          img:'/assets/swiper/1505369912_OSsyYi.jpg',
          title:'地铁电梯,套二,中庭好房有车库'
        }
      ],
      /**房东直租数据接口 */
      homeListItemFd:[ 
        {
          id:'1',
          zd: '0',
          img:'../../assets/doctor/1.jpg',
          title:'海港广场，精装标准套三出售，带家具家电靠地铁',
          stmel:'芙蓉区',
          stmels:'长房东立',
          number:'700000',
          specifications:'2室1厅',
          squaremeter:'67.7',
          homesuper:'精装修',
          avatar:'../../assets/home/Headportrait/s01.png',
          type:'个人'
        },
        {
          id:'2',
          zd: '0',
          img:'../../assets/doctor/2.jpg',
          title:'中心广场中心.领包入住，精装修房东直租',
          stmel:'开福区',
          stmels:'宽属大厦',
          number:'900000',
          specifications:'3室1厅',
          squaremeter:'77.7',
          homesuper:'精装修',
          avatar:'../../assets/home/Headportrait/s02.png',
          type:'个人'
        },
        {
          id:'3',
          zd: '0',
          img:'../../assets/doctor/3.jpg',
          title:'南儿街顶楼地段好地铁房双林小学 带花园',
          stmel:'梅溪湖',
          stmels:'鼎奥国际',
          number:'1450000',
          specifications:'2室',
          squaremeter:'127.7',
          homesuper:'精装修',
          avatar:'../../assets/home/Headportrait/s03.png',
          type:'个人'
        },
        {
          id:'4',
          zd:'0',
          img:'../../assets/doctor/4.jpg',
          title:'溪岛精装套三，靠地铁',
          stmel:'长沙县',
          stmels:'小遂溪岛',
          number:'900000',
          specifications:'3室1厅',
          homesuper:'精装修',
          squaremeter:'57.7',
          avatar:'../../assets/home/Headportrait/s04.png',
          type:'个人'
        },
        {
          id: '5',
          zd:'1',
          img: '../../assets/doctor/1.jpg',
          title: 'sssssssss三，靠',
          stmel: '长沙县',
          stmels: '小遂溪岛',
          number: '900000',
          specifications: '3室1厅',
          homesuper: '精装修',
          squaremeter: '57.7',
          avatar: '../../assets/home/Headportrait/s04.png',
          type: '个人'
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
      wx.navigateTo({
        url: '/pages/home/homeLeiBo/homeLeiBo?id='+num
      })
    }else if (num == 2){
      wx.navigateTo({
        url: '/pages/home/homeWYue/homeWYue'
      })
    }else if (num == 3){
      wx.navigateTo({
        url: '/pages/my/nurContent/nurContent'
      })
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