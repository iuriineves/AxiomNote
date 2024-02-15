import { Textarea } from './ui/textarea'
import { getMarkdown, updateMarkdown } from './markdown-area'
import { useState } from 'react'

export default function EditorArea(): JSX.Element {
  const [markdown, setMarkdown] = useState(getMarkdown())

  return (
    <Textarea
      value={markdown}
      className="font-Noto text-base p-2 h-full resize-none no-shadow outline-0 border-0 focus:border-none focus:outline-none"
      onChange={(e) => {
        updateMarkdown(e.target.value)
        setMarkdown(e.target.value)
      }}
    />
  )
}
