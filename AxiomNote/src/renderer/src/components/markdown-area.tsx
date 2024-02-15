import Markdown from 'react-markdown'
import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit'
import { setMarkdown$ } from '@mdxeditor/editor'
import { useState } from 'react'

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
  return <Markdown>{markdown}</Markdown>
}

export function updateMarkdown(raw: string): void {
  store.dispatch(update(raw))
}

export function getMarkdown(): string {
  return store.getState().value
}

export const { update } = markdownSlice.actions