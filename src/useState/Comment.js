import React, {useState }from "react";

function Comment(){
    const [title, changeTitle]= useState("Good moring ")
// console.log(user)

    return(
        <>
        
    <div>
        <h1> hi there {title} </h1>

    <button onClick={()=>changeTitle("Good evening")}>Click</button>
    </div>
        </>
    )
}

export default Comment