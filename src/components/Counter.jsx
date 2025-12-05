import React,{useState} from 'react'

const Counter = ({size}) => {
    const [count,setCount]=useState(0);
    const handleClick=()=>{
        setCount(count+size)
    };
  return (
    <div>
        <p>Counter:{count}</p>
        <button onClick={handleClick}>Increment</button>
        
    </div>
  )
}

export default Counter