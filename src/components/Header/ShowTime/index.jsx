import React, { Component } from 'react';
import './index.css'

export default class ShowTime extends Component {

    state = {
    }

    getCurTime = () => {
        const dt = new Date();
        const year = dt.getFullYear();
        const month = dt.getMonth() + 1;
        const day = dt.getDate();
        const hour = dt.getHours();
        const minute = dt.getMinutes();
        const second = dt.getSeconds();
        this.setState({ year, month, day, hour, minute, second })
    }

    componentDidMount() {
        this.t = null;
        this.t = setInterval(this.getCurTime, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.t);
    }

    render() {

        const { year, month, day, hour, minute, second } = this.state

        return (
            <div className='showTime'>
                日本標準時(JST)  {year}年{month}月{day}日{hour}時{minute}分{second}秒
            </div>
        );
    }
}
