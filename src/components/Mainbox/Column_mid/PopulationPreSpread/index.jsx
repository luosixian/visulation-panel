import React, { Component } from 'react';
import axios from 'axios'
import * as echarts from 'echarts'

export default class PopulationPreDay extends Component {

    componentDidMount() {
        this.requestData()
    }

    requestData = () => {
        axios.get('http://localhost:3000/data/reduction_rate.json', {
            params: {

            },
        }).then(
            response => {
                const dataOrder = response.data.sort((a, b) => Math.abs(b.comparisonPreSpread) - Math.abs(a.comparisonPreSpread))
                const dataSiteName = [];
                const dataPercent = [];
                const data100 = [];
                const len = 15
                for (let i = 0; i < len; i++) {
                    // handle dataName
                    const str = dataOrder[i].dataName.replace('<br>', '-')
                    dataSiteName.push(str)

                    //handle comparisonPreSpread
                    const num = Math.abs(parseFloat(dataOrder[i].comparisonPreSpread))
                    dataPercent.push(num)

                    data100.push(50)
                }
                this.setState({ dataSiteName, dataPercent, data100 })
                this.initCharts()
            },
            error => {
                console.log('Error', error)
            }
        )
    }

    initCharts = () => {
        const { dataSiteName, dataPercent, data100 } = this.state
        const myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
        const myChart = echarts.init(document.getElementById('populationChart'))
        const option = {
            grid: {
                top: "5%",
                left: "27%",
                bottom: "3%"
                // containLabel: true
            },
            // 不显示x轴的相关信息
            xAxis: {
                show: false
            },
            yAxis: [
                {
                    type: "category",
                    inverse: true,
                    data: dataSiteName,
                    // 不显示y轴的线
                    axisLine: {
                        show: false
                    },
                    // 不显示刻度
                    axisTick: {
                        show: false
                    },
                    // 把刻度标签里面的文字颜色设置为白色
                    axisLabel: {
                        color: "#fff",
                        fontSize: '14',
                    },
                },
                {
                    data: [],
                    inverse: true,
                    // 不显示y轴的线
                    axisLine: {
                        show: false
                    },
                    // 不显示刻度
                    axisTick: {
                        show: false
                    },
                    // 把刻度标签里面的文字颜色设置为白色
                    axisLabel: {
                        show: false,
                        //color: "#fff"
                    }
                }
            ],
            series: [
                {
                    name: "条",
                    type: "bar",
                    data: dataPercent,
                    yAxisIndex: 0,
                    // 修改第一组柱子的圆角
                    itemStyle: {
                        borderRadius: 20,
                        // 此时的color 可以修改柱子的颜色
                        color: (params) => myColor[params.dataIndex % myColor.length],
                    },
                    // 柱子之间的距离
                    barCategoryGap: 50,
                    //柱子的宽度
                    barWidth: 10,
                    // 显示柱子内的文字
                    label: {
                        show: true,
                        position: "inside",
                        // {c} 会自动的解析为 数据  data里面的数据
                        formatter: "-{c}%"
                    }
                },
                {
                    name: "框",
                    type: "bar",
                    barCategoryGap: 30,
                    barWidth: 15,
                    yAxisIndex: 1,
                    data: data100,
                    itemStyle: {
                        color: "none",
                        borderColor: "#00c1de",
                        borderWidth: 3,
                        borderRadius: 15
                    }
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
                <div className='midChart' id='populationChart'></div>
            </div>
        );
    }
}
