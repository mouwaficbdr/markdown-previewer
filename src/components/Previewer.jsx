import { marked } from 'marked';
import Window from './Window';

export default function Previewer({
  previewerIsMaximized,
  handlePreviewerMaximize,
  editorContent
}) {
  const htmlContent = marked(editorContent);

  return (
    <Window title="Previewer"
      maximized={previewerIsMaximized}
      handleMaximize={handlePreviewerMaximize}
      width='600px'
    >
      <div id="preview" dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </Window>
  );
}
