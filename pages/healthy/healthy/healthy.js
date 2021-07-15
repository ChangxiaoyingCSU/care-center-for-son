import * as echarts from '../../../ec-canvas/echarts';

const app = getApp();

function initChartTemp(canvas, width, height, dpr) {
  const colorList = ["#9E87FF", '#73DDFF', '#fe9a8b', '#F56948', '#87ffcf']
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);

  var option = {
    backgroundColor: '#fff',
    title: {
      text: '一周健康信息表',
			left: 'center',
			fontsize:8
    },
    legend: {
      icon: 'circle',
			top: '5%',
			right: '5%',
			itemWidth: 6,
			itemGap: 20,
			textStyle: {
				color: '#556677'
			}
    },
    grid: {
      containLabel: true
    },
    tooltip: {
      trigger: 'axis',
			axisPointer: {
				label: {
					show: true,
					backgroundColor: '#fff',
					color: '#556677',
					borderColor: 'rgba(0,0,0,0)',
					shadowColor: 'rgba(0,0,0,0)',
					shadowOffsetY: 0
				},
				lineStyle: {
					width: 0
				}
			},
			backgroundColor: '#fff',
			textStyle: {
				color: '#5c6c7c'
			},
			padding: [10, 10],
			extraCssText: 'box-shadow: 1px 0 2px 0 rgba(163,163,163,0.5)'
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      axisLine: {
				lineStyle: {
					color: '#1a5692'
				}
			},
			axisTick: {
				show: false
			},
			axisLabel: {
				interval: 0,
				textStyle: {
					color: '#DCE2E8'
				},
				// 默认x轴字体大小
				fontSize: 12,
				// margin:文字到x轴的距离
				margin: 15
			},
			boundaryGap: false
      // show: false
    },
    yAxis: [{
			type: 'value',
			axisTick: {
				show: false
			},
			axisLine: {
				show: true,
				lineStyle: {
					color: '#DCE2E8'
				}
			},
			axisLabel: {
				textStyle: {
					color: '#556677'
				}
			},
			splitLine: {
				show: false
			}
		}, {
			type: 'value',
			position: 'right',
			axisTick: {
				show: false
			},
			axisLabel: {
				textStyle: {
					color: '#556677'
				},
				formatter: '{value}'
			},
			axisLine: {
				show: true,
				lineStyle: {
					color: '#DCE2E8'
				}
			},
			splitLine: {
				show: false
			}
		}],
    series: [{
      name: '体温',
			type: 'line',
			data: [34,32,37,34,36,39,36],
			symbolSize: 1,
			symbol: 'circle',
			smooth: true,
			yAxisIndex: 0,
			showSymbol: false,
			lineStyle: {
				width: 5,
				color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
					offset: 0,
					color: '#9effff'
				},
					{
						offset: 1,
						color: '#9E87FF'
					}
				]),
				shadowColor: 'rgba(158,135,255, 0.3)',
				shadowBlur: 10,
				shadowOffsetY: 20
			},
			itemStyle: {
				normal: {
					color: colorList[0],
					borderColor: colorList[0]
				}
			}
    }]
  };
  chart.setOption(option);
  return chart;
}
function initChartWeight(canvas, width, height, dpr) {
  const colorList = ["#9E87FF", '#73DDFF', '#fe9a8b', '#F56948', '#9E87FF']
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);

  var option = {
    backgroundColor: '#fff',
    title: {
      text: '一周健康信息表',
			left: 'center',
			fontsize:8
    },
    legend: {
      icon: 'circle',
			top: '5%',
			right: '5%',
			itemWidth: 6,
			itemGap: 20,
			textStyle: {
				color: '#556677'
			}
    },
    grid: {
      containLabel: true
    },
    tooltip: {
			trigger: 'axis',
			axisPointer: {
				label: {
					show: true,
					backgroundColor: '#fff',
					color: '#556677',
					borderColor: 'rgba(0,0,0,0)',
					shadowColor: 'rgba(0,0,0,0)',
					shadowOffsetY: 0
				},
				lineStyle: {
					width: 0
				}
			},
			backgroundColor: '#fff',
			textStyle: {
				color: '#5c6c7c'
			},
			padding: [10, 10],
			extraCssText: 'box-shadow: 1px 0 2px 0 rgba(163,163,163,0.5)'
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      axisLine: {
				lineStyle: {
					color: '#1a5692'
				}
			},
			axisTick: {
				show: false
			},
			axisLabel: {
				interval: 0,
				textStyle: {
					color: '#DCE2E8'
				},
				// 默认x轴字体大小
				fontSize: 12,
				// margin:文字到x轴的距离
				margin: 15
			},
			boundaryGap: false
      // show: false
    },
    yAxis: [{
			type: 'value',
			axisTick: {
				show: false
			},
			axisLine: {
				show: true,
				lineStyle: {
					color: '#DCE2E8'
				}
			},
			axisLabel: {
				textStyle: {
					color: '#556677'
				}
			},
			splitLine: {
				show: false
			}
		}, {
			type: 'value',
			position: 'right',
			axisTick: {
				show: false
			},
			axisLabel: {
				textStyle: {
					color: '#556677'
				},
				formatter: '{value}'
			},
			axisLine: {
				show: true,
				lineStyle: {
					color: '#DCE2E8'
				}
			},
			splitLine: {
				show: false
			}
		}],
    series: [{
      name: '体重',
			type: 'line',
			data: [34,32,37,34,36,39,36],
			symbolSize: 1,
			symbol: 'circle',
			smooth: true,
			yAxisIndex: 0,
			showSymbol: false,
			lineStyle: {
				width: 5,
				color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
					offset: 0,
					color: '#73DD39'
				},
					{
						offset: 1,
						color: '#73DDFF'
					}
				]),
				shadowColor: 'rgba(115,221,255, 0.3)',
				shadowBlur: 10,
				shadowOffsetY: 20
			},
			itemStyle: {
				normal: {
					color: colorList[1],
					borderColor: colorList[1]
				}
			}
    }]
  };
  chart.setOption(option);
  return chart;
}
function initChartPress(canvas, width, height, dpr) {
  const colorList = ["#9E87FF", '#73DDFF', '#fe9a8b', '#F56948', '#9E87FF']
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);

  var option = {
    backgroundColor: '#fff',
    title: {
      text: '一周健康信息表',
			left: 'center',
			fontsize:8
    },
    legend: {
      icon: 'circle',
			top: '5%',
			right: '5%',
			itemWidth: 6,
			itemGap: 20,
			textStyle: {
				color: '#556677'
			}
    },
    grid: {
      containLabel: true
    },
    tooltip: {
			trigger: 'axis',
			axisPointer: {
				label: {
					show: true,
					backgroundColor: '#fff',
					color: '#556677',
					borderColor: 'rgba(0,0,0,0)',
					shadowColor: 'rgba(0,0,0,0)',
					shadowOffsetY: 0
				},
				lineStyle: {
					width: 0
				}
			},
			backgroundColor: '#fff',
			textStyle: {
				color: '#5c6c7c'
			},
			padding: [10, 10],
			extraCssText: 'box-shadow: 1px 0 2px 0 rgba(163,163,163,0.5)'
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      axisLine: {
				lineStyle: {
					color: '#1a5692'
				}
			},
			axisTick: {
				show: false
			},
			axisLabel: {
				interval: 0,
				textStyle: {
					color: '#DCE2E8'
				},
				// 默认x轴字体大小
				fontSize: 12,
				// margin:文字到x轴的距离
				margin: 15
			},
			boundaryGap: false
      // show: false
    },
    yAxis: [{
			type: 'value',
			axisTick: {
				show: false
			},
			axisLine: {
				show: true,
				lineStyle: {
					color: '#DCE2E8'
				}
			},
			axisLabel: {
				textStyle: {
					color: '#556677'
				}
			},
			splitLine: {
				show: false
			}
		}, {
			type: 'value',
			position: 'right',
			axisTick: {
				show: false
			},
			axisLabel: {
				textStyle: {
					color: '#556677'
				},
				formatter: '{value}'
			},
			axisLine: {
				show: true,
				lineStyle: {
					color: '#DCE2E8'
				}
			},
			splitLine: {
				show: false
			}
		}],
    series: [{
      name: '血压',
			type: 'line',
			data: [34,32,37,34,36,39,36],
			symbolSize: 1,
			symbol: 'circle',
			smooth: true,
			yAxisIndex: 0,
			showSymbol: false,
			lineStyle: {
				width: 5,
				color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
					offset: 0,
					color: '#fe9a'
				},
					{
						offset: 1,
						color: '#fe9a8b'
					}
				]),
				shadowColor: 'rgba(158,135,255, 0.3)',
				shadowBlur: 10,
				shadowOffsetY: 20
			},
			itemStyle: {
				normal: {
					color: colorList[2],
					borderColor: colorList[2]
				}
			}
    }]
  };
  chart.setOption(option);
  return chart;
}
function initChartSugar(canvas, width, height, dpr) {
  const colorList = ["#9E87FF", '#73DDFF', '#fe9a8b', '#F56948', '#9E87FF']
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);

  var option = {
    backgroundColor: '#fff',
    title: {
      text: '一周健康信息表',
			left: 'center',
			fontsize:8
    },
    legend: {
      icon: 'circle',
			top: '5%',
			right: '5%',
			itemWidth: 6,
			itemGap: 20,
			textStyle: {
				color: '#556677'
			}
    },
    grid: {
      // containLabel: true
    },
    tooltip: {
			trigger: 'axis',
			axisPointer: {
				label: {
					show: true,
					backgroundColor: '#fff',
					color: '#556677',
					borderColor: 'rgba(0,0,0,0)',
					shadowColor: 'rgba(0,0,0,0)',
					shadowOffsetY: 0
				},
				lineStyle: {
					width: 0
				}
			},
			backgroundColor: '#fff',
			textStyle: {
				color: '#5c6c7c'
			},
			padding: [10, 10],
			extraCssText: 'box-shadow: 1px 0 2px 0 rgba(163,163,163,0.5)'
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      axisLine: {
				lineStyle: {
					color: '#1a5692'
				}
			},
			axisTick: {
				show: false
			},
			axisLabel: {
				interval: 0,
				textStyle: {
					color: '#DCE2E8'
				},
				// 默认x轴字体大小
				fontSize: 12,
				// margin:文字到x轴的距离
				margin: 15
			},
			boundaryGap: false
      // show: false
    },
    yAxis: [{
			type: 'value',
			axisTick: {
				show: false
			},
			axisLine: {
				show: true,
				lineStyle: {
					color: '#DCE2E8'
				}
			},
			axisLabel: {
				textStyle: {
					color: '#556677'
				}
			},
			splitLine: {
				show: false
			}
		}, {
			type: 'value',
			position: 'right',
			axisTick: {
				show: false
			},
			axisLabel: {
				textStyle: {
					color: '#556677'
				},
				formatter: '{value}'
			},
			axisLine: {
				show: true,
				lineStyle: {
					color: '#DCE2E8'
				}
			},
			splitLine: {
				show: false
			}
		}],
    series: [{
      name: '血糖',
			type: 'line',
			data: [34,32,37,34,36,39,36],
			symbolSize: 1,
			symbol: 'circle',
			smooth: true,
			yAxisIndex: 0,
			showSymbol: false,
			lineStyle: {
				width: 5,
				color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
					offset: 0,
					color: '#F569FF'
				},
					{
						offset: 1,
						color: colorList[3]
					}
				]),
				shadowColor: 'rgba(158,135,255, 0.3)',
				shadowBlur: 10,
				shadowOffsetY: 20
			},
			itemStyle: {
				normal: {
					color: colorList[3],
					borderColor: colorList[3]
				}
			}
    }]
  };
  chart.setOption(option);
  return chart;
}
function initChartPulse(canvas, width, height, dpr) {
  const colorList = ["#9E87FF", '#73DDFF', '#fe9a8b', '#F56948', '#9E87FF']
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);

  var option = {
    backgroundColor: '#fff',
    title: {
      text: '一周脉搏信息表',
			left: 'center',
			fontsize:8
    },
    legend: {
      icon: 'circle',
			top: '5%',
			right: '5%',
			itemWidth: 6,
			itemGap: 20,
			textStyle: {
				color: '#556677'
			}
    },
    grid: {
      containLabel: true
    },
    tooltip: {
      trigger: 'axis',
			axisPointer: {
				label: {
					show: true,
					backgroundColor: '#fff',
					color: '#556677',
					borderColor: 'rgba(0,0,0,0)',
					shadowColor: 'rgba(0,0,0,0)',
					shadowOffsetY: 0
				},
				lineStyle: {
					width: 0
				}
			},
			backgroundColor: '#fff',
			textStyle: {
				color: '#5c6c7c'
			},
			padding: [10, 10],
			extraCssText: 'box-shadow: 1px 0 2px 0 rgba(163,163,163,0.5)'
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      axisLine: {
				lineStyle: {
					color: '#1a5692'
				}
			},
			axisTick: {
				show: false
			},
			axisLabel: {
				interval: 0,
				textStyle: {
					color: '#DCE2E8'
				},
				// 默认x轴字体大小
				fontSize: 12,
				// margin:文字到x轴的距离
				margin: 15
			},
			boundaryGap: false
      // show: false
    },
    yAxis: [{
			type: 'value',
			axisTick: {
				show: false
			},
			axisLine: {
				show: true,
				lineStyle: {
					color: '#DCE2E8'
				}
			},
			axisLabel: {
				textStyle: {
					color: '#556677'
				}
			},
			splitLine: {
				show: false
			}
		}, {
			type: 'value',
			position: 'right',
			axisTick: {
				show: false
			},
			axisLabel: {
				textStyle: {
					color: '#556677'
				},
				formatter: '{value}'
			},
			axisLine: {
				show: true,
				lineStyle: {
					color: '#DCE2E8'
				}
			},
			splitLine: {
				show: false
			}
		}],
    series: [{
      name: '脉搏',
			type: 'line',
			data: [34,32,37,34,36,39,36],
			symbolSize: 1,
			symbol: 'circle',
			smooth: true,
			yAxisIndex: 0,
			showSymbol: false,
			lineStyle: {
				width: 5,
				color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
					offset: 0,
					color:'#D000FF'
				},
					{
						offset: 1,
						color: '#FF5353'
					}
				]),
				shadowColor: 'rgba(254,154,139, 0.3)',
				shadowBlur: 10,
				shadowOffsetY: 20
			},
			itemStyle: {
				normal: {
					color: colorList[4],
					borderColor: colorList[4]
				}
			}
    }]
  };
  chart.setOption(option);
  return chart;
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
 		ec1: {
      onInit: initChartWeight
		},
		ec2: {
      onInit: initChartTemp
		},
		ec3: {
      onInit: initChartPress
		},
		ec4: {
      onInit: initChartSugar
		},
		ec5: {
      onInit: initChartPulse
    },
    // tab切换，方法二
    selected: 0,
    list: ['体重', '体温', '血压', '血糖','脉搏'],
  
  },
  //tab框切换 方法二
  selected: function (e) {
    console.log(e)
    let that = this
    let index = e.currentTarget.dataset.index
    console.log(index)
    if (index == 0) {
      that.setData({
        selected: 0
      })
    } else if (index == 1) {
      that.setData({
        selected: 1
      })
    } else if (index == 2) {
      that.setData({
        selected: 2
      })
		} else if (index == 3){
			that.setData({
        selected: 3
      })
		} else {
      that.setData({
        selected: 4
      })
    }
  },
/**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    /** 
     * 获取系统信息,系统宽高
     */
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }
 
    });
},
})
