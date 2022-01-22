import React, { Component } from 'react';
import axios from 'axios'
import * as echarts from 'echarts';

export default class Bar extends Component {

    state = {
        site: [],
        npatients: []
    }

    componentDidMount() {
        //this.requestData()
    }

    requestData = () => {
        axios.defaults.baseURL = 'http://127.0.0.1:5000'
        axios.get('/japan-corona-data-date', {
            params: {
                date: 20220115,
            },
        }).then(
            response => {
                const orderArr = response.data.itemList.sort((a, b) => b.npatients - a.npatients)
                const site = [];
                const npatients = [];
                for (let i = 0; i <= 7; i++) {
                    site.push(orderArr[i].name_jp)
                    npatients.push(orderArr[i].npatients)
                }
                this.setState({ site, npatients })
                this.initCharts()
            },
            error => {
                console.log('Error', error);
            }
        )
    }

    initCharts = () => {
        const { site, npatients } = this.state
        //console.log(site,npatients);
        const myChart = echarts.init(document.getElementById('barChart'))
        const option = {
            color: ['#2f89cf'],
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                left: '0',
                top: '10px',
                right: '0',
                bottom: '4%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: site,
                    axisTick: {
                        alignWithLabel: true
                    },
                    axisLabel: {
                        color: 'rgba(255,255,255,.6)',
                        fontSize: '12',
                        interval: 0,
                    },
                    axisLine: {
                        show: false,
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    axisLabel: {
                        color: 'rgba(255,255,255,.6)',
                        fontSize: '12',
                    },
                    axisLine: {
                        lineStyle: {
                            color: 'rgba(255,255,255,.1)',
                            width: 2
                        },
                        show: true,
                    },
                    splitLine: {
                        lineStyle: {
                            color: 'rgba(255,255,255,.1)',
                        }
                    }
                }
            ],
            series: [
                {
                    name: '累積の陽性者数',
                    type: 'bar',
                    barWidth: '35%',
                    data: npatients,
                    itemStyle: {
                        borderRadius: 5
                    }
                }
            ]
        }
        myChart.setOption(option)
        window.addEventListener('resize', function () {
            myChart.resize()
        })
    }

    render() {
        return (
            <div>
                <h2>全国の感染状況</h2>
                <div className='chart' id='barChart'></div>
            </div>
        );
    }
}
