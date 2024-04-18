// "use client"
import React, { useState } from 'react';

function App() {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])
  const submitHandler = (e) =>{
    e.preventDefault()
    setmainTask([...mainTask,{title,desc}])
    setdesc("")
    settitle("")
  }

  const deleteHandler = (i)=>{
    let copyTask = [...mainTask]
    copyTask.splice(i,1)
    setmainTask(copyTask)

  }

  let renderTask = <h2> No task available</h2>
  if(mainTask.length>0){
    renderTask = mainTask.map((t,i) =>{
      return (
        <li key={i} className='flex items-center justify-between mr-10 mb-3'>
          <div className='flex items-center gap-2 w-2/3'>
            <h5 className='ml-3 text-xl font-semibold'>{t.title}</h5>
            <h6 className='text-xl font-semibold'>{t.desc}</h6>
          </div>
          <button onClick={()=>{deleteHandler(i)}}className='bg-red-400 font-semibold rounded px-4 py-2'>delete</button>
        </li>

      )
    }

    )
  }

  return (
    <>
    <h1 className='bg-black text-white w-full h-22 font-semibold text-center text-5xl p-5 '>My Todo List</h1>
    <form onSubmit={submitHandler}>
      <input type="text" className='border-4 text-2xl border-zinc-700 p-1 m-5 px-2 py-2' placeholder='Enter your Title here..'value={title} onChange={(e)=>{settitle(e.target.value)}} />
      <input type="text" className='border-4 text-2xl border-zinc-700 p-1 m-5 px-2 py-2'placeholder='Enter description here..' value={desc} on onChange={(e)=> {setdesc(e.target.value)}}/>
      <button className='bg-black text-white px-4 py-2 text-2xl font-semibold rounded m-5'> Add task</button>

    </form>
    <hr />
    <div className='p-8 bg-slate-200'>
      <ul>{renderTask}</ul>
    </div>
    
    
    
    </>
  )
}

export default App