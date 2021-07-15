
// pages/home/homeGod/homeGodList/homeGodList.js
Page({

	/**
	 * 页面的初始数据
	 */
	collect: false,
	msg:"位置:此房,前面是小区的绿化带,景观绝好,下楼2m出小区,上班方便。+户型:1室1卫0阳台45m²,保养的太好了,看房方便。装修:普通服务:资深经纪人24h服务热线*承诺:所有离源均为真实有效房源,恭候您的来电咨询！",
	data: {

		nurContent: null,
		info:{
			name: "客服",
			img:"../../../assets/home/Headportrait/s01.png",
			phone:10086
		},
		images1:"../../../assets/0bb3c290e353d785fa1bd27391cab43.png",
		images: [
			"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587310939038&di=e248b575af0fe89bfd3dda3e60d3e35b&imgtype=0&src=http%3A%2F%2Fimg5.cache.netease.com%2Fhouse%2F2014%2F6%2F5%2F2014060513434168c46_550.jpg",
			"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587310939038&di=e248b575af0fe89bfd3dda3e60d3e35b&imgtype=0&src=http%3A%2F%2Fimg5.cache.netease.com%2Fhouse%2F2014%2F6%2F5%2F2014060513434168c46_550.jpg",
			"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587310939038&di=e248b575af0fe89bfd3dda3e60d3e35b&imgtype=0&src=http%3A%2F%2Fimg5.cache.netease.com%2Fhouse%2F2014%2F6%2F5%2F2014060513434168c46_550.jpg"
		],
		// name不赋值  只赋值price
		houseInfo: [
			
			// {
			// 	name: "编号",
			// 	price: "1"
			// },
			// {
			// 	name: "姓名",
			// 	price: "aaa"
			// },
			// {
			// 	name: "性别",
			// 	price: "女"
			// },
			// {
			// 	name: "年龄",
			// 	price: "56"
			// },
			// {
			// 	name: "工资",
			// 	price: "8K"
			// },
			// {
			// 	name: "性格",
			// 	price: "负责、有耐心"
			// },
			// {
			// 	name: "服务编号",
			// 	price: "1"
			// },
			// {
			// 	name: "服务等级",
			// 	price: "高级"
			// },
			{
				name: "学历",
				price: "普通本科"
			},
			{
				name: "婚姻状况",
				price: "已婚"
			},
			{
				name: "服务年限",
				price: "待商定"
			},
			{
				name: "服务内容",
				price: "照料起居"
			},
		],
		observe: [{
				name: "服务地址",
				price: "长沙市天心区韶山南路22号"
			},
			{
				name: "建筑面积",
				price: "62.55m²"
			},
			{
				name: "成立性质",
				price: "私人所有"
			},
			{
				name: "创立时间",
				price: "2008年"
			},
			{
				name: "所属地区",
				price: "湖南省长沙市"
			},
			{
				name: "创立类别",
				price: "梅岭社区颐养中心"
			},
			{
				name: "发展历史",
				price: "由湖南三所养老中心合并"
			},
			{
				name: "服务特色",
				price: "智能颐养"
			},
			{
				name: "专业模式",
				price: "一体化设计、系统管理"
			},
			{
				name: "现任董事",
				price: "常晓颖"
			},
			{
				name: "联系电话",
				price: "400-890-88900"
			},
		],
		excellentHouse: [{
				id: '1',
				zd: '1',
				img: '/assets/doctor/1.jpg',
				title: '梅岭社区颐养中心服务，营养配餐、清洁卫生、居室安全',
				stmel: '天心区',
				stmels: '梅岭社区',
				number: '7',
				specifications: '从业7年',
				squaremeter: '93.7',
				homesuper: '任劳任怨',
				avatar: '../../../assets/home/Headportrait/s01.png',
				type: '个人'
			},
			{
				id: '2',
				img: '/assets/doctor/2.jpg',
				title: '梅岭社区颐养中心服务，护理卫生、衣物清洗、协助沐浴',
				stmel: '天心区',
				stmels: '梅岭社区',
				number: '9',
				specifications: '从业3年',
				squaremeter: '89.7',
				homesuper: '热情干练',
				avatar: '../../../assets/home/Headportrait/s02.png',
				type: '个人'
			}
		],
		personalHousing: [{
				id: '1',
				zd: '1',
				img: '/assets/doctor/3.jpg',
				title: '梅岭社区颐养中心服务，健康保健，常见老年病的护理，正确掌握给药途径',
				stmel: '天心区',
				stmels: '梅岭社区',
				number: '6',
				specifications: '从业4年',
				squaremeter: '91.5',
				homesuper: '知识充沛',
				avatar: '../../assets/home/Headportrait/s01.png',
				type: '企业'
			},
			{
				id: '2',
				img: '/assets/doctor/4.jpg',
				title: '梅岭社区颐养中心服务，帮助老人洗脸、擦身、洗澡、喂饭、锻炼身体',
				stmel: '天心区',
				stmels: '梅岭社区',
				number: '5',
				specifications: '从业2年',
				squaremeter: '93.2',
				homesuper: '细致用心',
				avatar: '../../assets/home/Headportrait/s02.png',
				type: '个人'
			},
			{
				id: '3',
				img: '/assets/doctor/1.jpg',
				title: '梅岭社区颐养中心服务，沟通陪伴，针对病患存在和潜在的心理问题，给予关怀、支持和帮助',
				stmel: '天心区',
				stmels: '梅岭社区',
				number: '10',
				specifications: '从业6年',
				squaremeter: '97.8',
				homesuper: '学历优秀',
				avatar: '../../assets/home/Headportrait/s03.png',
				type: '企业'
			}
		],
		nearbyNewHouse: [{
				id: '1',
				zd: '1',
				img: '/assets/doctor/2.jpg',
				title: '梅岭社区颐养中心服务，照顾老人起居、保持良好的生活环境',
				stmel: '天心区',
				stmels: '梅岭社区',
				number: '10000',
				specifications: '从业9年',
				squaremeter: '99.7',
				homesuper: '能力突出',
				q1: "服务保障",
				q2: "内容详实",
				homeN: 1,
				homeS: "休假"
			},
			{
				id: '2',
				img: '/assets/doctor/3.jpg',
				title: '梅岭社区颐养中心服务，基本老人保洁、洗衣熨烫、煲汤做饭',
				stmel: '天心区',
				stmels: '梅岭社区',
				number: '4000',
				q1: "入职体检",
				q2: "即时签约",
				homeN: 2,
				homeS: "在职"
			},
			{
				id: '3',
				img: '/assets/doctor/4.jpg',
				title: '梅岭社区颐养中心服务，管理有规律的饮食、睡眠、大小便',
				stmel: '天心区',
				stmels: '梅岭社区',
				number: '6000',
				q1: "服务周到",
				q2: "企业合约",
				homeN: 2,
				homeS: "在职"
			}
		]
	}, 

	/**
	 * 生命周期函数--监听页面加载
	 */
	collect() {
		if (this.data.collect) {
			this.setData({
				collect: false
			});
			wx.showToast({
				title: "取消收藏成功",
				icon: "none"
			})
		} else {
			this.setData({
				collect: true
			});
			wx.showToast({
				title: "收藏成功",
				icon: "none"
			})
		}
	},
	call() {
		wx.makePhoneCall({
			phoneNumber: this.info.phone
		})
	},
	previewImage() {
		wx.previewImage({
			urls: this.data.images
		})
	},
	goodHouse() {
		wx.navigateBack({
			delta: 1
		})
	},
	personal() {
		let pages = getCurrentPages();
		let currPage = pages[pages.length - 1];
		let prevPage = pages[pages.length - 2];
		prevPage.setData({
			currentInexs: 0,
		});
		wx.navigateBack({
			delta: 1
		})
	},
	newHouse() {
		wx.navigateTo({
			url: "/pages/home/newHouseList/newHouseList"
		})
	},
	onLoad: function(options) {
		console.log(options);
		var that = this;
		that.setData({nurContent:JSON.parse(options.nurContent)});
		// this.data.nurContent = JSON.parse(options.nurContent);
		console.log(this.data.nurContent.nurseId);
	},
	serve() {
		wx.navigateTo({
			url: '/components/homeGod/homeGodDetail/homeGodDetail/homeGodDetailOther/homeGodDetailOther'
		})
	},

	other() {
		wx.navigateTo({
			url: '/pages/home/homeGod/homeGodDetail/homeGodDetail/homeGodDetailServe/homeGodDetailServe'
		})
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

	}
})
