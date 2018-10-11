import React, { Component } from 'react'

import ChatList from './chat_list'

export default class InboxPeople extends Component {

    

    render() {
        return (
            <div>
                <div class="inbox_people">
                    <div class="headind_srch">
                        <div class="recent_heading">
                            <h4>Recent</h4>
                        </div>
                        <div class="srch_bar">
                            <div class="stylish-input-group">
                                <input type="text" class="search-bar" placeholder="Search" />
                                <span class="input-group-addon">
                                    <button type="button"> <i class="fa fa-search" aria-hidden="true"></i> </button>
                                </span> </div>
                        </div>
                    </div>
                    <div class="inbox_chat">
                        
                        <ChatList groupName="Grupo 1" active='active_chat' onClick={(param)=>this.props.onClick(param)}/>
                        <ChatList groupName="Grupo 2" onClick={(param)=>this.props.onClick(param)}/>
                        <ChatList groupName="Grupo 3" onClick={(param)=>this.props.onClick(param)}/>                     
                    

                    </div>
                </div>
            </div>
        )
    }
}
