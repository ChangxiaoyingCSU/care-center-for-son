// pages/home/homeGod/homeGodList/homeGodList.js
Page({

	/**
	 * 页面的初始数据
	 */
	collect: false,
	msg:"位置:此房,前面是小区的绿化带,景观绝好,下楼2m出小区,上班方便。+户型:1室1卫0阳台45m²,保养的太好了,看房方便。装修:普通服务:资深经纪人24h服务热线*承诺:所有离源均为真实有效房源,恭候您的来电咨询！",
	data: {
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
		houseInfo: [{
				name: "编号",
				price: "1"
			},
			{
				name: "姓名",
				price: "小陈"
			},
			{
				name: "性别",
				price: "女"
			},
			{
				name: "年龄",
				price: "56"
			},
			{
				name: "工资",
				price: "8K"
			},
			{
				name: "性格",
				price: "负责、有耐心"
			},
			{
				name: "服务编号",
				price: "1"
			},
			{
				name: "服务等级",
				price: "高级"
			},
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
				price: "15573385311"
			},
		],
		excellentHouse: [{
				id: '1',
				zd: '1',
				img: '/assets/home/homeListItem/1231.jpg',
				title: '海港广场，精装标准套三出售，带家具家电靠地铁',
				stmel: '芙蓉区',
				stmels: '长房东立',
				number: '70',
				specifications: '2室1厅',
				squaremeter: '67.7',
				homesuper: '精装修',
				avatar: '../../../assets/home/Headportrait/s01.png',
				type: '个人'
			},
			{
				id: '2',
				img: '/assets/home/homeListItem/1231.jpg',
				title: '中心广场中心.领包入住，精装修房东直租',
				stmel: '开福区',
				stmels: '宽属大厦',
				number: '90',
				specifications: '3室1厅',
				squaremeter: '77.7',
				homesuper: '精装修',
				avatar: '../../../assets/home/Headportrait/s02.png',
				type: '个人'
			}
		],
		personalHousing: [{
				id: '1',
				zd: '1',
				img: '../../assets/home/homeListItem/01.png',
				title: '海港广场，精装标准套三出售，带家具家电靠地铁',
				stmel: '芙蓉区',
				stmels: '长房东立',
				number: '70',
				specifications: '2室1厅',
				squaremeter: '67.7',
				homesuper: '精装修',
				avatar: '../../assets/home/Headportrait/s01.png',
				type: '个人'
			},
			{
				id: '2',
				img: '../../assets/home/homeListItem/02.png',
				title: '中心广场中心.领包入住，精装修房东直租',
				stmel: '开福区',
				stmels: '宽属大厦',
				number: '90',
				specifications: '3室1厅',
				squaremeter: '77.7',
				homesuper: '精装修',
				avatar: '../../assets/home/Headportrait/s02.png',
				type: '个人'
			},
			{
				id: '3',
				img: '../../assets/home/homeListItem/03.png',
				title: '南儿街顶楼地段好地铁房双林小学 带花园',
				stmel: '梅溪湖',
				stmels: '鼎奥国际',
				number: '145',
				specifications: '2室',
				squaremeter: '127.7',
				homesuper: '精装修',
				avatar: '../../assets/home/Headportrait/s03.png',
				type: '个人'
			}
		],
		nearbyNewHouse: [{
				id: '1',
				zd: '1',
				img: '/assets/home/homeListItem/home01.png',
				title: '合力达卓越南城',
				stmel: '北海区',
				stmels: '东路101号',
				number: '15000',
				specifications: '2室1厅',
				squaremeter: '67.7',
				homesuper: '精装修',
				q1: "海景",
				q2: "别墅",
				homeN: 1,
				homeS: "停售"
			},
			{
				id: '2',
				img: '/assets/home/homeListItem/home01.png',
				title: '中心海城',
				stmel: '途家丛',
				stmels: '赤岭路110路',
				number: '11000',
				q1: "海景",
				q2: "别墅",
				homeN: 2,
				homeS: "在售"
			},
			{
				id: '3',
				img: '/assets/home/homeListItem/home01.png',
				title: '广夏大楼',
				stmel: '梅溪湖',
				stmels: '鼎奥国际',
				number: '14000',
				q1: "海景",
				q2: "别墅",
				homeN: 2,
				homeS: "在售"
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
		console.log(options)
	},
	serve() {
		wx.navigateTo({
			url: '/pages/home/homeGod/homeGodDetail/homeGodDetail/homeGodDetailOther/homeGodDetailOther'
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
