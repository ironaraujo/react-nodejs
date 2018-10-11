import React, { Component } from 'react'

export default class SentMessage extends Component {
  render() {
    return (
      <div>
        <div class="outgoing_msg">
          <div class="sent_msg">
            <p>`{this.props.message}`</p>
            <span class="time_date"> 11:01 AM    |    June 9</span> </div>
        </div>
      </div>
    )
  }
}
