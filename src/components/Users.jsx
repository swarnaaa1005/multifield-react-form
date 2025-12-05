import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'

const Users = () => {
    const [users,setUsers]=useState([])
    const [error,setError]=useState(null)

    useEffect(()=>{
        const fetchData=async()=>{
            try {
                const response= await axios.get('https://jsonplaceholder.typicode.com/users')
                console.log(response.data)
                if(response.status!=200){
                    throw new Error("Users retrieval failed")
            }
            setUsers(response.data)
            } catch (error) {
                console.log(error)
                setError(error.message)
                
            }
        }
        fetchData()
    },[])

if(error) return (<p>Error:{error}</p>)

  return (
    <div >
        <ul>
           {
            users.map((user)=>(
                <li key={user.id}class="text-3xl font-bold bg-gray-300 ">{user.name}</li>
            ))
           } 
        </ul>
    </div>
  )
}

export default Users