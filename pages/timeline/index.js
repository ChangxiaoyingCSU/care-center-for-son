const app = getApp()

Page({
  data: {
    curentDate: '',
    dateArr:'',
    planList:['2021-03-26', '2021-03-27', '2021-03-28', '2021-03-29'],
    planArr: [{'2021-03-26': [{'name': '我是26号事件1'}]}, {'2021-03-27': [{'name': '我是27号事件1'}]}, {'2021-03-28': [{'name': '我是28号事件1'}]},  {'2021-03-29': [{'name': '我是29号计划1'}]}] 
  },
  onLoad() {
    let dataInfo = this.getStrWeek()
    console.log(this.data.curentDate);
    let curentDate= new Date()
    let year = curentDate.getFullYear();
    let month =(curentDate.getMonth() + 1).toString().toString().padStart(2,'0');
    let day = (curentDate.getDate()).toString();  
    console.log(year + "-" + month + "-" + day)
    this.setData({
      dateArr: dataInfo,
      curentDate: year + "-" + month + "-" + day
    })

  },
  getStrWeek(){
    let plandate = []
    for (let index = 0; index < this.data.planList.length; index++ ) {
      let weeks = new Array("SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT");
      let myDate = new Date(this.data.planList[index].replace(/-/, "/"));
      let date = new Date(myDate)
      let xinqi = date.getDay()
      let riqi = this.data.planList[index].substr(this.data.planList[index].length-2,2)
      let week = weeks[xinqi];
      plandate.push({ 'riqi': riqi, 'week': week})
    }
    return plandate
  }
})
