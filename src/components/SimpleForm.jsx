import React from 'react'
import {useState} from 'react'

const SimpleForm = () => {

    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log("Name",name)
        console.log("Email",email)
        alert("Form Submitted")
    }

  return (
    <div>
        <h2>Simple react Form</h2>
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="">Name:</label>
            <input type="text" value={name} 
            onChange={(e)=>{
                setName(e.target.value)
            }}/>
        </div>
        <div>
            <label htmlFor="">Email:</label>
            <input type="email" value={email} 
            onChange={(e)=>{
                setEmail(e.target.value)
            }}/>
        </div>
        <button type='submit'>Submit</button>
    </form>
     </div>
  )
}

export default SimpleForm