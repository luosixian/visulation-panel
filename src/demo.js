import * as echarts from 'echarts';

//初始化echarts实例对象
const myChart = echarts.init(document.querySelector('.box'))
//指定配置项和数据 + 将配置项给echarts实例对象
myChart.setOption({
    title: {
        text: 'ECharts 入门示例'
    },
    tooltip: {},
    xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    yAxis: {},
    series: [
        {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }
    ]
});