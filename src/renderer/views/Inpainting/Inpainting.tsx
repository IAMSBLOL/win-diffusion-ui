import { useEffect } from 'react'

const HomePage = () => {
  useEffect(() => {
    window.electron.ipcRenderer.sendMessage('ipc-example', 123)
  }, [])
  return (
    <div>
      123
    </div>
  )
}

export default HomePage
