import React, { Component } from 'react';
import axios from 'axios'
import * as echarts from 'echarts';

export default class Line extends Component {

    state = {
        dataXaxis: [],
        dataYaxis: []
    }

    componentDidMount() {
        this.requestData()
    }

    requestData = () => {
        axios.defaults.baseURL = 'http://127.0.0.1:5000'
        axios.get('/japan-corona-data-site', {
            params: {
                dataName: '福岡県',
            },
        }).then(
            response => {
                const data = response.data.itemList.slice(0, 50)
                //console.log(data);
                const dataXaxis = [];
                const dataYaxis = [];
                for (let i = data.length - 1; i >= 0; i--) {
                    dataXaxis.push(data[i].date)
                    dataYaxis.push(data[i].npatients)
                }
                this.setState({ dataXaxis, dataYaxis })
                this.initCharts()
            },
            error => {
                console.log('Error', error)
            }
        )
        this.initCharts()
    }

    initCharts = () => {
        const { dataXaxis, dataYaxis } = this.state
        //console.log(dataXaxis);
        const myChart = echarts.init(document.getElementById('LineChart'))
        const option = {
            color: ['#00f2f1', '#ed3f35'],
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                textStyle: {
                    color: '#4c9bfd' // 图例文字颜色
                },
                right: '10%', // 距离右边10%
            },
            grid: {
                top: '20%',
                left: '3%',
                right: '4%',
                bottom: '3%',
                show: true,// 显示边框
                borderColor: '#012f4a',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: dataXaxis,
                axisTick: {
                    show: false
                },
                axisLabel: {
                    color: '#4c9bfd'
                },
                axisLine: {
                    show: false // 去除轴线
                },
            },
            yAxis: {
                type: 'value',
                max: Math.max(...dataYaxis) + 1000,
                min: Math.min(...dataYaxis) - 1000,
                axisTick: {
                    show: false
                },
                axisLabel: {
                    color: '#4c9bfd'
                },
                axisLine: {
                    show: false
                },
                splitLine: {
                    lineStyle: {
                        color: '#012f4a' // 分割线颜色
                    }
                }
            },
            series: [
                {
                    name: '福岡県',
                    type: 'line',
                    //stack: 'Total',
                    data: dataYaxis,
                    smooth: true,
                },
            ]
        };
        myChart.setOption(option)
        window.addEventListener('resize', function () {
            myChart.resize()
        })
    }

    render() {
        return (
            <div>
                <h2>福岡県の感染状況</h2>
                <div className='chart' id='LineChart'></div>
            </div>
        );
    }
}
