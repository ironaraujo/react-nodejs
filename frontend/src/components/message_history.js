import React, { Component } from 'react'

import SentMessage from './SentMessage'
import ReceivedMessage from './ReceivedMessage';
import Message from './message'

export default class MessageHistory extends Component {
    render() {
        console.log(this.props.groupName)
        return (
            <div>
                <div class="mesgs">
                    <div class="msg_history">
                        
                        <Message message="Mensage Enviadaa!!!" />
                        <Message in message="Mensagem Recebidaaa!! 1" />


                    </div>

                    <div class="type_msg">
                        <div class="input_msg_write">
                            <input type="text" class="write_msg" placeholder="Type a message" />
                            <button class="msg_send_btn" type="button"><i class="fa fa-paper-plane-o" aria-hidden="true"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
