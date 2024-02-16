const { ipcRenderer } = require('electron')

const iconStyle =
  ' opacity-50 material-symbols-rounded text-muted-foreground cursor-pointer select-none icon-variation-settings no-drag px-4 transition-colors hover:opacity-100 hover:text-foreground'

export default function TopBar(): JSX.Element {
  return (
    <div className="w-screen flex top-0 fixed drag content-end justify-end items-center">
      <span className="font-Noto text-muted-foreground select-none font-extralight ml-4 pr-1">
        AxiomNote
      </span>
      <div className="drag w-fill flex justify-center">
        <div className="no-drag w-4/5 max-w-lg flex justify-center align border rounded-lg bg-background/50 my-1.5 font-Noto w-1/2 font-extralight flex justify-center no-drag text-base cursor-text text-muted-foreground items-center m-1">
          <div className="whitespace-nowrap ml-2">Search or use a command...</div>
          <div className="w-fill" />
          <div className="whitespace-nowrap mr-2">
            <kbd className="font-Mono m-1 pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
              Ctrl
            </kbd>
            <kbd className="font-Mono pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
              P
            </kbd>
          </div>
        </div>
      </div>
      <span
        className={iconStyle + ' hover:bg-muted text-xl py-1.5'}
        onClick={() => ipcRenderer.send('minimize')}
      >
        remove
      </span>
      <span
        className={iconStyle + ' hover:bg-muted text-base px-3.5 py-2'}
        onClick={() => ipcRenderer.send('maximize')}
      >
        check_box_outline_blank
      </span>
      <span
        className={iconStyle + ' hover:bg-destructive text-xl py-1.5'}
        onClick={() => ipcRenderer.send('close')}
      >
        close
      </span>
    </div>
  )
}
