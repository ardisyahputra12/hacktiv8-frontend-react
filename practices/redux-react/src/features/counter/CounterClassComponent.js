import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  increment,
  decrement,
  incrementByAmount
} from './counterSlice'

export class CounterClass extends Component {
  state = {
    incrementAmount: 0
  }

  setIncrementAmount = (val) => {
    this.setState({
      incrementAmount: Number(val) || 0
    })
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h2>Class Component Counter</h2>
        <h2>{this.props.localCount}</h2>
        <button onClick={() => this.props.dispatch(decrement())}>-</button>
        <button onClick={() => this.props.dispatch(increment())}>+</button>
        <input
          type='text'
          value={this.state.incrementAmount}
          onChange={(e) => this.setIncrementAmount(e.target.value)}
        />
        <button onClick={() => this.props.dispatch(incrementByAmount(this.state.incrementAmount))}>
          Add Amount
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  localCount: state.counter.count
})

export default connect(mapStateToProps)(CounterClass)