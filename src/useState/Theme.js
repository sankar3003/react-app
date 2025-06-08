import { useState } from "react"


function Theme(){

const theme= {
     darktheme:{
        backgroundColor:"black",
        color:"white",
        padding:"30px"
     },
     lighttheme:{
        backgroundColor:"white",
        color:"black",
        padding:"30px"
     },
}
const [darkTheme , settheme]= useState(false)

    return (
        <>
        <p>Change theme</p>
        <input type="checkbox" checked={darkTheme} onChange={() => settheme(prevstate=> !prevstate)} />
        <div style={darkTheme ? theme.darktheme:theme.lighttheme}>
            this is my content 

        </div>

        </>
    )
}


export default Theme