import React, { Component } from 'react'
import { connect } from 'react-redux';
import actions from '../../store/actions/counter'
class Home extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <div>home</div>
                <p>{this.props.number}</p>
                {/* 绑定事件必须要在客户端执行 */}
                <button onClick={this.props.increment}>+</button>
            </div>
        )
    }
}

export default connect(state => state.counter, actions)(Home);