const { ipcRenderer } = require('electron')

const iconStyle = " opacity-50 material-symbols-rounded cursor-pointer select-none icon-variation-settings no-drag text-2xl px-3 py-1 transition-colors hover:bg-zinc-900 hover:opacity-100"

export default function TopBar(): JSX.Element {
  return (
    <div className="w-screen flex top-0 fixed drag content-end justify-end items-center">
      <span className=" opacity-50 select-none font-thin ml-3 pr-1">AxiomNote</span>
      <div className="drag w-fill" />
      <span className={iconStyle} onClick={() => ipcRenderer.send('minimize')}>
        remove
      </span>
      <span className={iconStyle + ' text-xl px-3.5 py-1.5'} onClick={() => ipcRenderer.send('maximize')}>
        check_box_outline_blank
      </span>
      <span className={iconStyle + ' hover:bg-red-700'} onClick={() => ipcRenderer.send('close')}>
        close
      </span>
    </div>
  )
}