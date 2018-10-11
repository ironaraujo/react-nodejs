import React, { Component } from 'react'

export default class ReceivedMessage extends Component {
    render() {
        return (
            <div>
                <div class="incoming_msg">
                    <div class="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                    <div class="received_msg">
                        <div class="received_withd_msg">
                            <p>`{this.props.message}`</p>
                            <span class="time_date"> 11:01 AM    |    Yesterday</span></div>
                    </div>
                </div>
            </div>
        )
    }
}
