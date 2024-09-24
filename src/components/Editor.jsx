import Window from "./Window";

export default function Editor({
  editorIsMaximized,
  handleEditorMaximize,
  editorContent,
  setEditorContent
}) {
  return (
    <Window
      title="Editor"
      maximized={editorIsMaximized}
      handleMaximize={handleEditorMaximize}
      width="500px"
    >
      <div className="textarea-div">
        <textarea id="editor"
          spellCheck="false"
          value={editorContent}
          onChange={(e) => setEditorContent(e.target.value)}
        ></textarea>
      </div>
    </Window>
  );
}
