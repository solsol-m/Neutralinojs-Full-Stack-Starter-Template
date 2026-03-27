import { useEffect, useRef, useState } from 'react'
import './App.css'
import { api } from './api'

function App() {
  const [counterValue, setCounterValue] = useState(0)
  const [backendMessage, setBackendMessage] = useState('Loading backend message...')
  const [backendError, setBackendError] = useState('')
  const [noteInput, setNoteInput] = useState('')
  const [saveFeedback, setSaveFeedback] = useState('')
  const saveFeedbackTimeoutRef = useRef<ReturnType<typeof window.setTimeout>>(undefined)
  const [systemInformation, setSystemInformation] = useState('')

  const showTemporarySaveFeedback = (message: string) => {
    if (saveFeedbackTimeoutRef.current !== undefined) {
      window.clearTimeout(saveFeedbackTimeoutRef.current)
      saveFeedbackTimeoutRef.current = undefined
    }
    setSaveFeedback(message)
    saveFeedbackTimeoutRef.current = window.setTimeout(() => {
      setSaveFeedback('')
      saveFeedbackTimeoutRef.current = undefined
    }, 2500)
  }

  const testBackendRequest = async () => {
    try {
      const data = await api.getHello()
      alert(data.message)
    } catch (error) {
      console.error(error)
      alert('Error calling API')
    }
  }

  useEffect(() => {
    const loadInitialBackendMessage = async () => {
      try {
        const data = await api.getHello()
        setBackendMessage(data.message || 'No message returned')
      } catch (error) {
        setBackendError(error instanceof Error ? error.message : 'Unknown error')
      }
    }

    loadInitialBackendMessage()
  }, [])

  const saveNote = () => {
    if (!noteInput.trim()) {
      showTemporarySaveFeedback('Nothing to save.')
      return
    }
    api.saveNote(noteInput)
    showTemporarySaveFeedback('Saved.')
  }

  useEffect(() => {
    const loadInitialData = async () => {
      const savedNote = api.getNote()
      if (savedNote) setNoteInput(savedNote)

      const info = await api.getSystemInfo()
      setSystemInformation(JSON.stringify(info))
    }

    loadInitialData()
  }, [])

  return (
    <section id="center">
      <main className="app-shell">
        <h1>Get started</h1>

        <button className="counter" onClick={() => setCounterValue((count) => count + 1)}>
          Count is {counterValue}
        </button>

        <h3>Backend Test</h3>
        <button onClick={testBackendRequest}>Test API</button>
        <p>API: {backendMessage}</p>
        {backendError ? <p className="error-text">API error: {backendError}</p> : null}

        <h3>Save Note</h3>
        <input
          value={noteInput}
          onChange={(event) => setNoteInput(event.target.value)}
          placeholder="Write something..."
        />
        <button onClick={saveNote}>Save</button>
        {saveFeedback ? (
          <p role="status" aria-live="polite" className="save-feedback">
            {saveFeedback}
          </p>
        ) : null}

        <h3>System Info</h3>
        <p className="system-info-text">{systemInformation}</p>
      </main>
    </section>
  )
}

export default App