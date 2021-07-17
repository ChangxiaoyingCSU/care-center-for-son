const app = getApp()

Page({
  data: {
    curentDate: '',
    currentDay:{},
    dateArr:'',
    planList:[],
    planArr: [] 
  },
  onLoad() {
    var that = this;
    wx.request({
      url: 'http://localhost:8088/dietForCustomer/getOrderDietById',
      async : false,
      data:{
        custname: "张三",
        phone:"12345612312"
      },
      method:'GET',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success:(res)=>{
        var dietList = res.data;
        // console.log(dietList);
        var dayList = new Array(3);
        var breakList = new Array(3); 
        var lunchList = new Array(3); 
        var dinnerList = new Array(3); 
        for(var i = 0; i < dietList.length; i++){
          dayList[i] = dietList[i].day;
          breakList[i] = dietList[i].breakfastId;
          lunchList[i] = dietList[i].lunchId;
          dinnerList[i] = dietList[i].dinnerId;
        }
        
        let planList = this.data.planList;
        planList = dayList;
        
        that.setData({
          planList:planList,
        });
        wx.setStorageSync('planList', planList);
        wx.setStorageSync('breakList', breakList);
        wx.setStorageSync('lunchList', lunchList);
        wx.setStorageSync('dinnerList', dinnerList);
        // console.log(this.data.planList);
      },
      fail:function(res){
        console.log(".....fail.....");
      }
    });

    let planList = wx.getStorageSync('planList');
    console.log(planList);
    let dataInfo = that.getStrWeek();
    let planArr = this.getDiet();
    // let planList = this.getDay();
    // console.log(diet);
    // console.log(dataInfo);
    let curentDate= new Date();
    let year = curentDate.getFullYear();
    let month =(curentDate.getMonth() + 1).toString().toString().padStart(2,'0');
    let day = (curentDate.getDate()).toString();  
    // console.log(year + "-" + month + "-" + day);
    let currentDay = {"year":year, "month":month};
    this.setData({
      dateArr: dataInfo,
      curentDate: year + "-" + month + "-" + day,
      currentDay:currentDay,
      planList:planList,
      planArr:planArr
    });
    console.log(Object.values(this.data.planArr[0])[0].breakfastId);
    // console.log(this.data.curentDate);
  },
  getStrWeek(){
    let planList = wx.getStorageSync('planList');
 
    // console.log(planList);
    let plandate = [];
    for (let index = 0; index < planList.length; index++ ) {
      let weeks = new Array("SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT");
      // console.log(that.data.planList);
      let myDate = new Date(planList[index].replace(/-/, "/"));
      let date = new Date(myDate);
      let xinqi = date.getDay();
      let year = planList[index].substr(0,4);
      let month = planList[index].substr(5,2)
      let riqi = planList[index].substr(planList[index].length-2,2);
      let week = weeks[xinqi];
      plandate.push({ 'year':year, "month":month, 'riqi': riqi, 'week': week});
    }
    // console.log(plandate);
    return plandate;
  },

  getDiet(){
    let planList = wx.getStorageSync('planList');
    let dinnerList = wx.getStorageSync('dinnerList');
    let breakList = wx.getStorageSync('breakList');
    let lunchList = wx.getStorageSync('lunchList');
    let diet = [];
    for (let i = 0; i < lunchList.length; i++ ) {
      let day = planList[i];
      let breakfastId = breakList[i];
      let lunchId = lunchList[i];
      let dinnerId = dinnerList[i];
      diet.push({ [day]:{ 'breakfastId':breakfastId, "lunchId":lunchId, 'dinnerId': dinnerId}});
    }
    console.log(diet);
    return diet;
  },

  // getDay(){
  //   let planList = wx.getStorageSync('planList');
  //   let day1 = [];
  //   for (let i = 0; i < planList.length; i++ ) {
  //     let day = planList[i];
  //     day1.push({[day]:{'day':day}});
  //   }
  //   console.log(day1);
  //   return day1;
  // }
})
