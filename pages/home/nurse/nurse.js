import * as echarts from '../../../ec-canvas/echarts';

const app = getApp();

function initChart(canvas, width, height, dpr) {
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
			labelLine: {
				show: false
			},
			type: 'pie',
			center: ['50%', '50%'],
			radius: ['28%', '60%'],
			data: [{
				value: 55
			}, {
				value: 20,
			}]
		}]
	};

	chart.setOption(option);
	return chart;
}
Page({
	data: {
    curentChoose:true,
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
