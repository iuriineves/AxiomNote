import EditorArea from './editor-area'
import MarkdownArea from './markdown-area'
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from './ui/resizable'

export default function EditorSmall({ className }: { className: string }): JSX.Element {
  return (
    <div className={className}>
      <ResizablePanelGroup direction="horizontal" className="border rounded-lg">
        <ResizablePanel minSize={0} maxSize={20} className="bg-background/90">
          <div></div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel className="bg-background/70">
          <EditorArea />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel className="bg-background/70">
          <MarkdownArea />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}
