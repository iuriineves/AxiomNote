import Markdown from 'react-markdown'
import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit'
import { useState } from 'react'

import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'
import 'katex/dist/katex.min.css'
import remarkGfm from 'remark-gfm'
import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkBreaks from 'remark-breaks'
import rehypeHighlight from 'rehype-highlight'

const markdownSlice = createSlice({
  name: 'markdown',
  initialState: {
    value: 'Use markdown or KaTeX syntax!'
  },
  reducers: {
    update(state, action: PayloadAction<string>) {
      state.value = action.payload
      return state
    }
  }
})

const store = configureStore({
  reducer: markdownSlice.reducer
})

export default function MarkdownArea(): JSX.Element {
  const [markdown, setMarkdown] = useState('')

  store.subscribe(() => {
    setMarkdown(store.getState().value)
  })
  return (
    <Markdown
      remarkPlugins={[remarkMath, remarkParse, remarkGfm, remarkBreaks]}
      rehypePlugins={[rehypeKatex, rehypeDocument, rehypeFormat, rehypeStringify, rehypeHighlight]}
      className={'font-Noto text-base h-fill p-1 m-1 overflow-y-auto break-words scrollbar'}
    >
      {markdown}
    </Markdown>
  )
}

export function updateMarkdown(raw: string): void {
  store.dispatch(update(raw))
}

export function getMarkdown(): string {
  return store.getState().value
}

export const { update } = markdownSlice.actions
