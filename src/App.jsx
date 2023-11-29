import { useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState("")
  const [error, setError] = useState('Поле ввода не должно быть пустым')
  const [textDirty, setTextDirty] = useState(false)
  const [message, setMessage] = useState('')
 
  const handleClick = () => {
    console.log(`${text}`)
    setMessage("Сообщение отправлено")
    setTimeout(() => setMessage(''), 5000)
    setText('')
  }

  const handleChange = (e) => {
    setText(e.target.value);
    e.target.value !== '' ? setError('') : setError('Поле ввода не может быть пустым')
  }

  const handleBlur = () => {
      setTextDirty(true)
  }   
  
  return (
    <div>
      <form action="">
          <input 
          placeholder='enter value...' 
          onBlur={handleBlur}
          value={text} 
          onChange={handleChange} 
          type="text" 
          />
          <button 
          disabled={error}
          onClick={handleClick}
          >Add</button>
          {(textDirty && error) && <div style={{color: 'red'}}>{error}</div>}
          {message && <div style={{color:'green'}}>{message}</div>}
        </form>
    </div>
  )
}

export default App
