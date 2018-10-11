import React, { Component } from 'react'
import ReceivedMessage from './ReceivedMessage'
import SentMessage from './SentMessage'

import React from 'react'

export default () => {
  return (
    <div>
      
    </div>
  )
}


export default class Message extends Component {
  render() {

    const {message} = this.props
    const msg1 = this.props.message

    return (
      <div>
          {this.props.in ? <SentMessage message={message}/> : <ReceivedMessage message={msg1}/>}
      </div>
    )
  }
}
