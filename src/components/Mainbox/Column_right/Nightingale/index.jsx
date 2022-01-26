import React, { Component } from 'react';
import { DatePicker } from 'antd'
import 'antd/dist/antd.css'
import axios from 'axios'
import * as echarts from 'echarts'

export default class Nightingale extends Component {

    componentDidMount() {
        this.requestData()
    }

    onChange = (_, dateString) => {
        //console.log(dateString);
        const time = dateString.slice(0, 4) + dateString.slice(5, 7) + dateString.slice(8, 10)
        this.requestData(time)
    }

    requestData = (date) => {
        axios.defaults.baseURL = 'http://127.0.0.1:5000'
        axios.get('/japan-corona-data-date', {
            params: {
                date: date ? date : 20220120,
            },
        }).then(
            response => {
                const orderArr = response.data.itemList.sort((a, b) => b.npatients - a.npatients)
                const data = [];
                for (let i = 0; i < 15; i++) {
                    data.push({ value: orderArr[i].npatients, name: orderArr[i].name_jp })
                }
                this.setState({ data })
                this.initCharts()
            },
            error => {
                console.log('Error', error)
            }
        )
    }

    initCharts = () => {
        const { data } = this.state
        const myChart = echarts.init(document.getElementById('NightingaleChart'))
        const option = {
            tooltip: {
                trigger: 'item'
            },
            legend: {
                bottom: '5%',
                itemWidth: 30,
                itemHeight: 30,
                textStyle: {
                    color: 'rgba(255,255,255,.5)',
                    fontSize: '12'
                }
            },
            series: [
                {
                    //name: 'Nightingale Chart',
                    clockwise: false,
                    type: 'pie',
                    radius: ['40%', '180%'],
                    center: ['57%', '57%'],
                    roseType: 'area',
                    label: {
                        show: false,
                        fontSize: 10,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '40',
                            fontWeight: 'bold'
                        }
                    },
                    /* labelLine: {
                        length: 1,
                        length2: 2,
                    }, */
                    itemStyle: {
                        borderRadius: 3
                    },
                    data: data
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
                <h2>
                    累積の陽性者数&nbsp;&nbsp;&nbsp;<DatePicker onChange={this.onChange} />
                </h2>
                <div className='bigChart' id='NightingaleChart'></div>
            </div>
        );;
    }
}
