import './HomePage.module.less'
import { useEffect } from 'react'

const HomePage = () => {
  useEffect(() => {
    window.electron.ipcRenderer.sendMessage('ipc-example', 123)
  }, [])
  return (
    <div styleName='HomePage'>
     123
    </div>
  )
}

export default HomePage
