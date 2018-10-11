import React from "../../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react"
import axios from "axios"


class User extends React.Component {

    constructor(props){
        super(props);
        this.state = {usuarios : []}
    }
    


    componentDidMount() {
        axios.get("http://localhost:3001/users")
          .then(res => {
            const users = res.data;
            this.setState({ usuarios 
            : users});
          })
        }


    render(){
        return (
            <div>
                <h1>asasls</h1>
                {this.state.usuarios.toString()}
                {this.state.usuarios.map(usuario =>   JSON.stringify(usuario)  )}
            </div>
        )
    }
}

export default User