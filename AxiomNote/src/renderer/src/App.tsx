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
      <div className=" pt-[2.25rem] h-fill w-fill p-3">
        <div className="h-full w-full flex lg:hidden">
          <ResizablePanelGroup direction="horizontal" className="border rounded-lg">
            <ResizablePanel minSize={0} maxSize={20}>
              <div className="h-fill w-fill font-Noto bg-background/90"></div>
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

        <div className="h-full w-full hidden lg:flex">
          <ResizablePanelGroup direction="horizontal" className="border rounded-lg">
            <ResizablePanel minSize={10} maxSize={20} className="bg-background/90">
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
      </div>
    </div>
  )
}

export default App
