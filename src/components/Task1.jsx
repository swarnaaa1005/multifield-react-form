import React from 'react'

const Task1 = () => {
  return (
    <div className="min-h-screen w-full bg-white flex flex-col items-center justify-center p-8">

      
      <div className="w-full max-w-3xl">
       
        
        <h1 className="text-3xl font-semibold text-gray-800 mb-10 text-left">
          Lets Build This
        </h1>

        
        <div className="bg-purple-100/40 rounded-2xl shadow-md p-10 flex flex-col items-center text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Build Beautiful UIs <span className="text-purple-600">Fast</span>
          </h2>

          <p className="text-gray-600 mt-3 max-w-md">
            Tailwind + React makes web design unbelievably fast. Style everything
            using small, reusable utility classes.
          </p>

          <button className="mt-8 bg-purple-600 hover:bg-purple-700 text-white font-medium px-6 py-3 shadow-lg transition rounded-2xl">
            Get Started
          </button>
        </div>

      </div>

    </div>
  )
}

export default Task1