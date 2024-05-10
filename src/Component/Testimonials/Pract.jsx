import React, { useState } from 'react'
import * as emailjs from "emailjs-com"
function Pract() {
    const [Name, setName] = useState("")
    const [Email, setEmail] = useState("")

function SendEmail(){
    const Data={
        user_name:Name,
        user_email:Email
    }
    

const service_id ="service_5s17ldt";
const Template_id= "template_9bh4up9";
const user_id= "dKfacZlS99quvBOgO";

emailjs.send(service_id,Template_id,Data,user_id).
then(function(res){
alert("msg send succesfully")
},function(error){
    console.log("error.." +error)
})
}
    return (
        <>
            <form action='' >
                <input type='text' name='user_name' placeholder='Enter your name' onChange={(e) => { setName(e.target.value) }} />
                <input type='email' name='user_email' placeholder='Enter your Email address' onChange={(e) => { setEmail(e.target.value) }} />
                <button onClick={()=>{SendEmail()}} >Join Now</button>
            </form>
        </>
    )
}

export default Pract;