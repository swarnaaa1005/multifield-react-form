import React from 'react'
import {useState} from 'react'

const MultiFieldForm = () => {

    //    const [name,setName]=useState("")
    //     const [email,setEmail]=useState("")
    //      const [age,setAge]=useState("")
    //       const [city,setCity]=useState("")
    //         const handleSubmit=(e)=>{
    //             e.preventDefault()
    //             console.log("Name:",name)
    //             console.log("Email:",email)
    //             console.log("Age:",age)
    //             console.log("City:",city)
    //             alert("Form Submitted")
    //         }
    const [formData,setFormData]=useState({
        name:"",
        email:"",
        age:"",
        city:""
    })
    const handleChange=(e)=>{
        const{name,value}=e.target;

        setFormData((prevData)=>({
            ...prevData,
            [name]:value,
        }));
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(formData);
        alert(JSON.stringify(formData,null,2));
        setFormData({name:"",email:"",age:"",city:""})
    };


  return (
    <div>
     
            <div>
                <h2 class="text-3xl font-bold">Multi Field Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    
                    <input name="name"type="text" placeholder="Enter name"value={formData.name} 
                    onChange={handleChange}/>
                </div>
                <div>
                    
                    <input name="email"type="email"  placeholder="Enter email" value={formData.email} 
                    onChange={handleChange}/>
                </div>
                 <div>
                 
                    <input name="age"type="text"  placeholder="Enter age" value={formData.age} 
                     onChange={handleChange}/>
                </div>
                 <div>
                   
                    <input name="city"type="text"  placeholder="Enter city" value={formData.city} 
                     onChange={handleChange}/>
                </div>
                <button type='submit' className='border-2 bg-amber-200 '>Submit</button>
            </form>
             </div>
    </div>
  )
}

export default MultiFieldForm