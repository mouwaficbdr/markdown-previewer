import Markdown from 'marked-react';
import Window from './Window';

export default function Previewer({previewerIsMaximized, handlePreviewerMaximize}) {
  return (
    <Window title="Previewer"
      maximized={previewerIsMaximized}
      handleMaximize={handlePreviewerMaximize}
    >
      <div id="preview">
        <Markdown>
          
        </Markdown>
      </div>
      
    </Window>
  );
}
