import * as echarts from '../../../ec-canvas/echarts';

const app = getApp();

function initChart(canvas, width, height, dpr) {
	var nurContent = wx.getStorageSync('nurContent');
	const chart = echarts.init(canvas, null, {
		width: width,
		height: height,
		devicePixelRatio: dpr // new
	});
	canvas.setChart(chart);

	var option = {
		backgroundColor: "#ffffff",
		color: ["#ffb44a", "#32C5E9"],
		series: [{
			label: {
				normal: {
					fontSize: 11
				}
			},
			
			type: 'pie',
			center: ['50%', '50%'],
			radius: ['20%', '40%'],
			data: [{
				value: nurContent.allDays - nurContent.lastDays,
				name:"使用"
			}, {
				value: nurContent.lastDays,
				name:"剩余"
			}]
		}]
	};

	chart.setOption(option);
	return chart;
}
Page({
	data: {
		curentChoose:true,
		nurContent:null,
		ec: {
			onInit: initChart
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
    images: [
      {
        img:"/img/1.jpg"
      },
      {
        img:"/img/2.jpg"
      },
      {
        img:"/img/3.jpg"
      }
    ],
    /**客服数据接口 */
    KeHuItme:[
      {
        img:'../../../assets/svg/Khu.svg',
        title:"签约服务网点",
        txt:"一触即达,分分钟解决问题"
      },
      {
        img:'../../../assets/svg/Phone.svg',
        title:"客服电话",
        txt:"400-890-88900"
      }
    ],
	},
	choose() {
		this.setData({
			curentChoose: !this.data.curentChoose
		})
  },
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function(options) {
		wx.request({
      url: 'http://localhost:8088/nurseContent/getNurseContent',
      data:{
				custname:"张三",
				phone:"12345612312"
        // custname:getApp().globalData.custName,
        // phone:getApp().globalData.custPhone,
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
		
		var nurContent = wx.getStorageSync('nurContent');
		this.setData({
			nurContent:nurContent
		})
		console.log(nurContent);
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function() {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function() {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function() {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function() {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function() {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function() {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function() {

	},
})
