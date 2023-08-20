import Header from './Header'
import './HomePage.module.less'
import { useEffect } from 'react'

const HomePage = () => {
  useEffect(() => {
    window.electron.ipcRenderer.sendMessage('ipc-example', 123)
  }, [])
  return (
    <div styleName='HomePage'>
      <Header />
    </div>
  )
}

export default HomePage
