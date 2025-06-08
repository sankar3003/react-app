import { useState } from "react"


function User(){

const userList=[
    {id:"1", name:"Sankar"},
    {id:"2", name:"Rahu"},
    {id:"3", name:"santhose"},
]

const [users , setUser ] = useState(userList)

function handleUser(e){
console.log(e.target.value)
setUser([
    ...users,
   {
    id:users.length+1,
    name:e.target.value
   }
])
}
    return(<>
  
    <label>User name</label>
    <input type="text"  placeholder="user name" name="username" onBlur={handleUser} />
    <br></br>

      {JSON.stringify(users)}
    </>)

}

export default User