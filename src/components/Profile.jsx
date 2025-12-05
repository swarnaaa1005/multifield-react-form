import React from 'react'
import PersonImage from '../assets/person.jpg'
const Profile = (props) => {
    console.log(props.person.name)
    const{name,img,phone,email}=props.person
  return (
    <div className='main'>
        <h1>My Contacts</h1>
        <div>
            <div>
                <h2>{name}</h2>
                <img src={img} alt="imaage of person" />
            </div>
        </div>
        <div>
            <p>{phone}</p>
            <p>{email}</p>
        </div>
    </div>
  )
}

export default Profile