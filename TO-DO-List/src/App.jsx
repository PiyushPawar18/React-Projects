import React, { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [task, setTask] = useState([])
  function handleNote() {
    if (title === "") {
      alert("enter a title")
    }
    else if (note === "") {
      alert("enter a notes")
    }
    else {
      const copyTask = [...task]
      copyTask.push({ title, note })
      console.log(copyTask);
      setTask(copyTask)


      setTitle('');
      setNote('');
    }
  }

  function removeNote(idx) {
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    console.log(copyTask, idx)
    setTask(copyTask);
  }
  function editNote(idx,title,note){
    alert("Edit your note")
    setTitle(title);
    setNote(note);
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    console.log(copyTask, idx)
    setTask(copyTask);
  }
  return (
    <div className=' bg-stone-900  text-white  lg:flex'>
      <div className=' lg:w-1/2 flex flex-col p-5 gap-3 h-screen '>
        <h2 className='text-center text-xl'>Add Notes</h2>
        <input type="text" placeholder='Enter a title' className='bg-stone-800 p-3 rounded-xl' value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea className='bg-stone-800 rounded-xl p-3' placeholder='Enter a note' cols="30" rows="8" value={note} onChange={(e) => setNote(e.target.value)}></textarea>
        <button className='bg-amber-500 w-30 self-center rounded-sm p-2 font-bold ' onClick={handleNote}>Add Note</button>

      </div>
      <div className='bg-slate-800 p-5  lg:border-l-2 lg:w-1/2'>
        <h2 className='text-center text-xl'>Recent Notes</h2>
        <div className='flex flex-wrap gap-5 mt-3 h-full pb-10'>
          {
            task.map((item, idx) => {
              return <div key={idx} className='w-50 h-50 bg-cover rounded-xl text-black bg-[url("./src/assets/note.png")] px-5 pt-10 pb-3 flex flex-col justify-between '>
                <div>
                  <h2 className='font-bold'>{item.title}</h2>
                  <p>{item.note}</p>
                </div>
                <div className='flex justify-around'>
                  <button className='p-1 bg-red-500 text-white font-bold rounded-sm active:scale-90' onClick={() => removeNote(idx)}>Delete</button>
                  <button className='p-1 bg-green-500 text-white font-bold rounded-sm active:scale-90' onClick={() => editNote(idx,item.title,item.note)}>Edit</button>
                </div>
              </div>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default App
