import { useState } from 'react'
import Editor from './components/Editor'
import Previewer from './components/Previewer'

export default function App() {

  const [editorIsMaximized, setEditorIsMaximized] = useState(false)
  const [previewerIsMaximized, setPreviewerIsMaximized] = useState(true)

  function handleEditorMaximize() {
    setEditorIsMaximized(maximized => !maximized)
    setPreviewerIsMaximized((maximized) => !maximized);
  }

  function handlePreviewerMaximize() {
    setPreviewerIsMaximized(maximized => !maximized)
    setEditorIsMaximized((maximized) => !maximized);
  }

  return (
    <main>
      <Editor
        editorIsMaximized={editorIsMaximized}
        handleEditorMaximize={handleEditorMaximize}
      />
      <Previewer
        previewerIsMaximized={previewerIsMaximized}
        handlePreviewerMaximize={handleEditorMaximize}
      />
    </main>
  )
}