import React from 'react'
import Profile from './Profile'
import Contacts from '../data/contacts'

const Profilelist = () => {
    console.log(Contacts)
  return (
    <div>
        <h1>Profile List</h1>
        {
            Contacts.map((item)=>(
                <Profile key={item.id} person={item}/>
            )
            )
        }
    </div>
  )
}

export default Profilelist