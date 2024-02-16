import { Textarea } from './ui/textarea'
import { getMarkdown, updateMarkdown } from './markdown-area'
import { useState } from 'react'

export default function EditorArea(): JSX.Element {
  const [markdown, setMarkdown] = useState('')

  return (
    <Textarea
      id="editor"
      spellCheck={false}
      className="font-Noto text-base p-1 m-1 h-fill w-fill resize-none no-shadow outline-0 border-0 focus:border-none focus:outline-none scrollbar"
      onChange={(e) => {
        updateMarkdown(e.target.value)
      }}
    />
  )
}
