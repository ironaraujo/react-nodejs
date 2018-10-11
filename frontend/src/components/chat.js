import React from 'react'
import axios from "axios"
import InboxPeople from "./inbox_people"
import MessageHistory from "./message_history"


class Chat extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rooms: [
                {
                    groupName: "Grupo 1", 
                    mensagens: [{ msg: "Mensagem 1", in: true, user: 'Usuario 1' }]

                },
                {
                    
                }
            
            ]
        }
    }

    onClickChatList(groupName){
        console.log('Chat ',groupName)
        this.setState({groupName})
    }

    render() {
        return (
            <div>

                <div cla ss="inbox_msg">

                    <InboxPeople onClick={(p)=>this.onClickChatList(p)}/>
                    <MessageHistory groupName={this.state.groupName}/>

                </div>

            </div>
        )
    }
}

export default Chat