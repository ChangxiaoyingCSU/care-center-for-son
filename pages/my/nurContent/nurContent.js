// pages/home/homeGod/homeGod.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
      homeListItem: {
        type: Array,
        value: []
      },
      homeFeuer: {
        type: Array,
        value: []
      },
    },
  
    /**
     * 组件的初始数据
     */
    data: {
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
            },
            {
                id: '5',
                img: '/assets/doctor/5.png',
                title: '梅岭社区颐养中心服务，有责任心，善于沟通，较有耐心',
                stmel: '天心区',
                stmels: '梅岭社区',
                number: '150',
                specifications: '从业1年',
                homesuper: '学历优秀',
                squaremeter: '96.6',
                avatar: '../../assets/home/Headportrait/s04.png',
                type: '企业'
            },
            {
                id: '6',
                img: '/assets/doctor/6.png',
                title: '梅岭社区颐养中心服务，温柔体贴，有丰富的工作经验，勤劳能吃苦',
                stmel: '天心区',
                stmels: '梅岭社区',
                number: '210',
                specifications: '从业2年',
                homesuper: '学历优秀',
                squaremeter: '95.8',
                avatar: '../../assets/home/Headportrait/s04.png',
                type: '企业'
            }
          ]
      
    },
      
    /**
     * 组件的方法列表
     */
    methods: {
      gotoLeiBo: function (e) {
        wx.navigateTo({
          url: '/components/homeLeiBo/homeLeiBo?id=1'
        })
      },
          // detail(e){
          // 	let id=e.currentTarget.dataset.index
          // 	wx.navigateTo({
          // 		url:"/components/homeGod/homeGodDetail/homeGodDetail?id="+id
          // 	})
      // }
      detail: function(e){
        wx.request({
          url: 'http://localhost:8088/nurseForCustomer/getNurById',
          data:{
            id:e.currentTarget.dataset.index + 1
          }
          ,
          method:'GET',
          header: {
            'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
          },
          success:function(res){
            console.log(res.data)
            wx.redirectTo({
              url: '/components/homeGod/homeGodDetail/homeGodDetail?nurContent='+JSON.stringify(res.data),
            
            })
          },
          fail:function(res) {
            console.log("fail....")
          },
        })
  
      }
    }
  })
  