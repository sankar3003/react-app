import React from "react"

class User extends React.Component{

 
    render(){
         console.log(this.props);
      return(
        <p>{this.props.content} </p>
      )
    }
}

export default User