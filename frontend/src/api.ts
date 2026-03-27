import appConfig from '../../shared/app.config.json'

type HelloResponse = { message: string }

const backendHelloUrl = `${appConfig.backend.host}:${appConfig.backend.port}${appConfig.backend.helloPath}`

// 🔹 Backend
async function fetchHelloMessage(): Promise<HelloResponse> {
  try {
    const response = await fetch(backendHelloUrl)

    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error("Error fetching hello:", error)
    throw error
  }
}

// 🔹 Local Storage
function saveNoteToLocalStorage(note: string): void {
  if (!note) {
    console.warn("Note is empty")
    return
  }

  localStorage.setItem(appConfig.storage.noteKey, note)
  console.log("Saved:", note)
}

function loadNoteFromLocalStorage(): string | null {
  const note = localStorage.getItem(appConfig.storage.noteKey)
  console.log("Loaded:", note)
  return note
}

// 🔹 System Info
async function readSystemInfo(): Promise<unknown> {
  try {
    // @ts-expect-error Neutralino global is injected at runtime
    return await Neutralino.os.getEnv()
  } catch {
    return "Not available"
  }
}

// 🔹 API Bridge
export const api = {
  getHello: fetchHelloMessage,
  saveNote: saveNoteToLocalStorage,
  getNote: loadNoteFromLocalStorage,
  getSystemInfo: readSystemInfo,
}