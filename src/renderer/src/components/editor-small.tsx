import EditorArea from './editor-area'
import MarkdownArea from './markdown-area'
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from './ui/resizable'

export default function EditorSmall({ className }: { className: string }): JSX.Element {
  return (
    <div className={className}>
      <ResizablePanelGroup direction="horizontal" className="border rounded-lg">
        <ResizablePanel minSize={0} maxSize={20}>
          <div className="h-full w-full font-Noto bg-background/90">Files</div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel>
          <ResizablePanelGroup direction={'vertical'} className="bg-background/70">
            <ResizablePanel>
              <EditorArea />
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel>
              <MarkdownArea></MarkdownArea>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}
