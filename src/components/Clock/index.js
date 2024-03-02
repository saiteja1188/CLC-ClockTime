import {Component} from 'react'
import './index.css'

class Clock extends Component {
  state = {
    date: new Date(),
  }

  componentDidMount() {
    console.log('componentDidMount called')
    this.timeId = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
    clearInterval(this.timeId)
  }

  tick = () => {
    this.setState({date: new Date()})
  }

  render() {
    const {date} = this.state
    console.log('render called', date)
    return (
      <div className="clock-container">
        <h1 className="heading">Clock</h1>
        <p className="time">{date.toLocaleTimeString()}</p>
      </div>
    )
  }
}
export default Clock
