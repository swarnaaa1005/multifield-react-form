import React from 'react'

const Tasks = () => {

    const taskList=[
        {id:1,name:'a'},
        {id:2,name:'b'},
        {id:3,name:'c'},

    ]

  return (
    <div>
        <ul>
            {

                taskList.map((task)=>(
                    <li key={task.id}>{task.name}</li>
                ))

            }
        </ul>

        <ul>
            {
                taskList.map((task)=>{
                
                    return <li key={task.id} style={{color:task.id%2===0 ? 'red':'blue',}} >{task.name}</li>

                })
            }
        </ul>

    </div>
  )
}

export default Tasks