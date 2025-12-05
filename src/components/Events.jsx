import React from 'react'

const Events = () => {

    const handleClick=()=>{
        console.log("You clicked me")
    }
    const handleEnter=()=>{
        console.log("Entering")
    }
    const handleLeave=()=>{
        console.log("Exiting")
    }
    
 const handleSubmit=(e)=>{
    e.preventDefault(
        alert("Form submitted")
    )
 }
  return (
    <div>
        <button onClick={handleClick} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>Click Me</button>
        <button onClick={()=>{
            alert('Hello')}
            }>Alert Me</button>
            
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Enter your text' 
                onChange={(e)=>{
                    console.log(e.target.value)
                }}/>
                <button type='submit'>Submit</button>
            </form>
    </div>
  
  )
}

export default Events