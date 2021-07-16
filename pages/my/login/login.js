Page({
    data: {
      custName:null,
      custPhone:null,
      phone:null,
      pickerHidden: true,
      chosen: ''
    },
  
    pickerConfirm: function(e) {
      this.setData({
        pickerHidden: true
      })
      this.setData({
        chosen: e.detail.value
      })
    },
    pickerCancel: function(e) {
      this.setData({
        pickerHidden: true
      })
    },
    pickerShow: function(e) {
      this.setData({
        pickerHidden: false
      })
    },
    formSubmit: function(e) {
      var _this = this
  
      wx.request({
        url: 'http://localhost:8088/custAndSon/insert',
        data: 
          {
            name: this.data.custName,
            phone: this.data.custPhone,
            wechat: this.data.phone
          }
        ,
        method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        header: {
          'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        success: function(res){
          var err = res.data.error
        //   if(err) {
        //     _this.setData({
        //        error:err
        //     })
        //   }
        //   else {
        //     wx.redirectTo({
        //     //  url:'create_photo'
        //     })
        //   }
            console.log(res.data);
            getApp().globalData.custName = res.data.name;
            getApp().globalData.custPhone = res.data.phone;
            getApp().globalData.phone = res.data.wechat;
            wx.switchTab({
               
                url: '../my'
            })
        },
        fail: function(res) {
            console.log("fail...")
        },
      })
  
    },
    formReset: function(e) {
      console.log('form发生了reset事件，携带数据为：', e.detail.value)
      this.setData({
        chosen: ''
      })
    },
        // 获取输入账号 
    custNameInput: function (e) {
      this.setData({
        custName: e.detail.value
      })
    },

    custPhoneInput: function (e) {
      this.setData({
        custPhone: e.detail.value
      })
    },
  
    // 获取输入密码 
    phoneInput: function (e) {
      this.setData({
        phone: e.detail.value
      })
    },
  })