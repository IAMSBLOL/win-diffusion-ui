import { useEffect } from 'react'

const Collection = () => {
  useEffect(() => {
    window.electron.ipcRenderer.sendMessage('ipc-example', 123)
  }, [])
  return (
    <div >
      Collection
    </div>
  )
}

export default Collection
