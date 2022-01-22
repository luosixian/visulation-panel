import React, { Component } from 'react';
import axios from 'axios'
import * as echarts from 'echarts';

export default class Nightingale extends Component {

    componentDidMount() {
        this.requestData()
    }

    requestData = () => {
        axios.defaults.baseURL = 'http://127.0.0.1:5000'
        axios.get('/japan-corona-data-date', {
            params: {
                date: 20220115,
            },
        }).then(
            response => {
                console.log(response.data.itemList);
                this.initCharts()
            },
            error => {
                console.log('Error', error)
            }
        )
        this.initCharts()
    }

    initCharts = () => {
        const myChart = echarts.init(document.getElementById('NightingaleChart'))
        const option = {
            legend: {
                top: '20',
                itemWidth: 10,
                itemHeight: 10,
                textStyle: {
                    color: 'rgba(255,255,255,.5)',
                    fontSize: '12'
                }
            },
            series: [
                {
                    name: 'Nightingale Chart',
                    type: 'pie',
                    radius: [10, 70],
                    center: ['50%', '50%'],
                    roseType: 'area',
                    label: {
                        fontSize: 20,
                    },
                    labelLine: {
                        length: 6,
                        length2: 8,
                    },
                    itemStyle: {
                        borderRadius: 8
                    },
                    data: [
                        { value: 400, name: 'rose 1' },
                        { value: 38, name: 'rose 2' },
                        { value: 32, name: 'rose 3' },
                        { value: 30, name: 'rose 4' },
                        { value: 28, name: 'rose 5' },
                        { value: 26, name: 'rose 6' },
                        { value: 22, name: 'rose 7' },
                        { value: 18, name: 'rose 8' }
                    ]
                }
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
                <div className='bigChart' id='NightingaleChart'></div>
            </div>
        );;
    }
}
