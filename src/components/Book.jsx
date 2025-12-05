import React from 'react'
import '../styles/Book.css'

const Book = (props) => {
    const {name,img,price,author} = props.person

    return (
        <div className='book-card'>  
            <h2>{name}</h2>
            <img src={img} alt="" />
            <p>{price}</p>
            <p>{author}</p>
        </div>
    )
}

export default Book