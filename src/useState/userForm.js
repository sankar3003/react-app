import { useState } from "react"


function UserForm(){

const initalaObj ={
    username:"",
    password:""
}
    const [user, setUser] = useState(initalaObj)
    // console.log(user,"sdfdsf")
function handleChanege(e){
    console.log(e.target.value)
    setUser({
        ...user,
        [e.target.name]: [e.target.value]
    })
}

    console.log(user)

    return(
        <>
        {JSON.stringify(user)}
        <h3>User form</h3>
<p>User name: <input type="text" name='username' onChange={handleChanege} /></p>

<br></br>
  <h3>Password</h3>
<p>password: <input type="text"  name='password' onChange={handleChanege} /></p>

        </>
    )
}

export default UserForm