import { useState } from 'react'
import Editor from './components/Editor'
import Previewer from './components/Previewer'

const defaultEditorContent = `
# Header (H1 size)

## Sub Header (H2 size)

Here is a [link](https://www.example.com).

Inline code: \`<div></div>\`

\`\`\`
// Code block
function example() {
  console.log("Hello, world!");
}
\`\`\`

- List item

> Blockquote

![Image](https://www.example.com/image.jpg)

**Bolded text**
`

export default function App() {

  const [editorIsMaximized, setEditorIsMaximized] = useState(true)
  const [previewerIsMaximized, setPreviewerIsMaximized] = useState(false)
  const [editorContent, setEditorContent] = useState(defaultEditorContent)

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
        editorContent={editorContent}
        setEditorContent={setEditorContent}
      />
      <Previewer
        previewerIsMaximized={previewerIsMaximized}
        handlePreviewerMaximize={handleEditorMaximize}
        editorContent = {editorContent}
      />
    </main>
  )
}