import React, { Component } from 'react'
import { timingSafeEqual } from 'crypto'

export default class Home extends Component {
    state = {
        number: 0
    }
    render() {
        return (
            <div>
                <div>home</div>
                <p>{this.state.number}</p>
                {/* 绑定事件必须要在客户端执行 */}
                <button onClick={() => this.setState({
                    number: this.state.number + 1
                })}>+</button>
            </div>
        )
    }
}
