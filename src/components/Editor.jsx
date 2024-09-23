import Window from "./Window";

export default function Editor({editorIsMaximized, handleEditorMaximize}) {
  return (
    <Window
      title="Editor"
      maximized={editorIsMaximized}
      handleMaximize={handleEditorMaximize}
    >
      <div className="textarea-div">
        <textarea id="editor" className="editor-textarea"></textarea>
      </div>
    </Window>
  );
}
