export const api = {
    // 🔹 Backend
    async getHello() {
      const res = await fetch("http://localhost:3000/api/hello");
      return res.json();
    },
  
    // 🔹 Local Storage 
    saveNote(note: string) {
      try {
        if (!note) {
          console.warn("Note is empty");
          return;
        }
  
        localStorage.setItem("note", note);
        console.log("Saved:", note);
      } catch (e) {
        console.error("Save failed", e);
      }
    },
  
    getNote() {
      try {
        const note = localStorage.getItem("note");
        console.log("Loaded:", note);
        return note;
      } catch (e) {
        console.error("Load failed", e);
        return null;
      }
    },
  
    // 🔹 System Info (Neutralino)
    async getSystemInfo() {
      try {
        // @ts-expect-error Neutralino global is injected at runtime
        return await Neutralino.os.getEnv();
      } catch {
        return "Not available";
      }
    }
  };