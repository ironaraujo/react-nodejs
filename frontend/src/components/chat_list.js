import React, { Component } from 'react'

export default class ChatList extends Component {

    render() {
        return (
            <div onClick={()=>this.props.onClick(this.props.groupName)}>
                <div class= {`chat_list ${this.props.active}`}>
                    <div class="chat_people">
                        <div class="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                        <div class="chat_ib">
                            <h5>{this.props.groupName} <span class="chat_date">Dec 25</span></h5>
                            <p>Test, which is a new approach to have all solutions
                    astrology under one roof.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
