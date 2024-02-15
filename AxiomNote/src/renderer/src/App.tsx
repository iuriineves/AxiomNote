import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup
} from '@renderer/components/ui/resizable'
import TopBar from './components/top-bar'
import EditorArea from './components/editor-area'
import MarkdownArea from './components/markdown-area'

function App(): JSX.Element {
  return (
    <div className="w-screen h-screen">
      <TopBar />
      <div className="pt-10 h-fill w-fill p-3">
        <div className="h-full w-full flex lg:hidden">
          <ResizablePanelGroup direction="horizontal" className="border rounded-lg">
            <ResizablePanel minSize={0} maxSize={20}>
              <div>Files</div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel>
              <ResizablePanelGroup direction={'vertical'}>
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

        <div className="h-full w-full hidden lg:flex">
          <ResizablePanelGroup direction="horizontal" className="border rounded-lg">
            <ResizablePanel minSize={0} maxSize={15}>
              <div>Files</div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel><EditorArea /></ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel><MarkdownArea /></ResizablePanel>
          </ResizablePanelGroup>
        </div>
      </div>
    </div>
  )
}

export default App
