import React, { useState, useEffect } from 'react'
import noteSevices from './sevices/notes'
import Note from './component/Notes'

const App = () => {

  const [notes, setNotes] = useState([])
  //添加按钮表单
  const [newNote, setNewNote] = useState('')
  const noteChange = (event) => {
    setNewNote(event.target.value)
  }
  //修改重要性
  const modify = (id)=>{
    const note = notes.find(note => note.id === id)
    const obj = {...note,important:!note.important}
    noteSevices.modify(id,obj).then(res=>{
      setNotes(notes.map(note => note.id !== id ? note :res))
    })
  }

  // 是否显示所有项
  const [isShowAll,setShowAll] = useState(true)

  const toggleShow = ()=>{
    setShowAll(!isShowAll)
  }

  const showAll = isShowAll ? notes : notes.filter(note => note.important)
  const hook = () => {
    noteSevices.getAll().then(res => {
      setNotes(res)
    })
  }

  const addNote = (event) => {
    event.preventDefault();
    const obj = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5
    }
    noteSevices.addNote(obj).then(res => {
      setNotes(notes.concat(res))
      setNewNote('')
    })

  }
  useEffect(hook, [])

  return (
    <div>
      <h1>Notes</h1>
      <button onClick={toggleShow}>是否显示所有项目</button>

      <form onSubmit={addNote}>
        <input value={newNote} onChange={noteChange} />
        <button type="submit">添加日记</button>
      </form>
      <ul>
        {
          showAll.map(note => <Note key={note.id} note={note} modify={()=>modify(note.id)}/>)
        }
      </ul>
    </div>
  )
}

export default App
