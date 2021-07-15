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
