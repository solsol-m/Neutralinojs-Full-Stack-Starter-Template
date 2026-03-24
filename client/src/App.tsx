import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { api } from './api'

function App() {
  const [count, setCount] = useState(0)
  const [apiMessage, setApiMessage] = useState('Loading backend message...')
  const [apiError, setApiError] = useState('')

  const [note, setNote] = useState('')
  const [saveMessage, setSaveMessage] = useState('')
  const saveMessageTimeoutRef = useRef<ReturnType<typeof window.setTimeout>>(undefined)
  const [systemInfo, setSystemInfo] = useState('')

  // 🔥 call backend using bridge
  const callApi = async () => {
    try {
      const data = await api.getHello()
      alert(data.message)
    } catch (error) {
      console.error(error)
      alert('Error calling API')
    }
  }

  // 🔥 load backend message
  useEffect(() => {
    const loadHello = async () => {
      try {
        const data = await api.getHello()
        setApiMessage(data.message || 'No message returned')
      } catch (error) {
        setApiError(error instanceof Error ? error.message : 'Unknown error')
      }
    }

    loadHello()
  }, [])

  // 🔥 Local storage functions
  const saveNote = () => {
    if (saveMessageTimeoutRef.current !== undefined) {
      window.clearTimeout(saveMessageTimeoutRef.current)
      saveMessageTimeoutRef.current = undefined
    }
    if (!note.trim()) {
      setSaveMessage('Nothing to save.')
      saveMessageTimeoutRef.current = window.setTimeout(() => {
        setSaveMessage('')
        saveMessageTimeoutRef.current = undefined
      }, 2500)
      return
    }
    api.saveNote(note)
    setSaveMessage('Saved.')
    saveMessageTimeoutRef.current = window.setTimeout(() => {
      setSaveMessage('')
      saveMessageTimeoutRef.current = undefined
    }, 2500)
  }


  useEffect(() => {
    const init = async () => {
      const saved = api.getNote()
      if (saved) setNote(saved)
  
      const info = await api.getSystemInfo()
      setSystemInfo(JSON.stringify(info))
    }
  
    init()
  }, [])

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>

        <h1>Get started</h1>

        {/* 🔥 Counter */}
        <button
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>

        {/* 🔥 API */}
        <h3>Backend Test</h3>
        <button onClick={callApi}>Test API</button>
        <p>API: {apiMessage}</p>
        {apiError ? <p style={{ color: 'crimson' }}>API error: {apiError}</p> : null}

        {/* 🔥 Local Storage */}
        <h3>Save Note</h3>
        <input
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Write something..."
        />
        <button onClick={saveNote}>Save</button>
        {saveMessage ? (
          <p role="status" aria-live="polite" className="save-feedback">
            {saveMessage}
          </p>
        ) : null}

        {/* 🔥 System Info */}
        <h3>System Info</h3>
        <p style={{ fontSize: '12px' }}>{systemInfo}</p>
      </section>
    </>
  )
}

export default App