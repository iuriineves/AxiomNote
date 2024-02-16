import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup
} from '@renderer/components/ui/resizable'
import TopBar from './components/top-bar'
import EditorArea from './components/editor-area'
import MarkdownArea from './components/markdown-area'
import { useState } from 'react'
import EditorSmall from './components/editor-small'
import EditorLarge from './components/editor-large'

function App(): JSX.Element {
  const [text, setText] = useState('')

  return (
    <div className="w-screen h-screen">
      <TopBar />
      <div className=" pt-[2.6rem] h-fill w-fill p-3">
        <EditorSmall className="h-full w-full flex lg:hidden" />
        <EditorLarge className="h-full w-full hidden lg:flex" />
      </div>
    </div>
  )
}

export default App
