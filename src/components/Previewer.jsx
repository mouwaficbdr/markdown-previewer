import Markdown from 'marked-react';
import Window from './Window';

export default function Previewer({
  previewerIsMaximized,
  handlePreviewerMaximize,
  editorContent
}) {
  return (
    <Window title="Previewer"
      maximized={previewerIsMaximized}
      handleMaximize={handlePreviewerMaximize}
      width='600px'
    >
      <div id="preview">
        <Markdown>
          {editorContent}
        </Markdown>
      </div>
      
    </Window>
  );
}
