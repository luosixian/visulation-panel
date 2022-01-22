import React, { Component } from 'react';
import axios from 'axios'
import * as echarts from 'echarts';

export default class Pie extends Component {

    state = {}

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
                //console.log(response.data.itemList)
                const site = ['福岡県', '佐賀県', '長崎県', '熊本県', '大分県', '宮崎県', '鹿児島県']
                const data = []
                response.data.itemList.forEach((dataObj) => {
                    if (site.indexOf(dataObj.name_jp) !== -1) {
                        data.push({ value: dataObj.npatients, name: dataObj.name_jp })
                    }
                })
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
        //console.log(data);
        const myChart = echarts.init(document.getElementById('PieChart'))
        const option = {
            tooltip: {
                trigger: 'item'
            },
            legend: {
                bottom: '0%',
                itemWidth: 10,
                itemHeight: 10,
                textStyle: {
                    color: "rgba(255,255,255,.5)",
                    fontSize: "12"
                }
            },
            series: [
                {
                    //name: 'Access From',
                    type: 'pie',
                    radius: ['40%', '65%'],
                    avoidLabelOverlap: false,
                    center: ['50%', '43%'],
                    label: {
                        show: false,
                        position: 'center'
                    },
                    labelLine: {
                        show: false
                    },
                    data: data,
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
                <h2>九州の感染状況</h2>
                <div className='chart' id='PieChart'></div>
            </div>
        );
    }
}
