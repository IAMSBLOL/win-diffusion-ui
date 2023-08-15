import { Button } from 'antd'
// import fs from 'fs'
import './HomePage.module.less'
import { useEffect } from 'react'

const HomePage = () => {
  useEffect(() => {
    window.electron.ipcRenderer.sendMessage('ipc-example', 123)
  }, [])
  return (
    <div styleName='HomePage'>
      <div className="test text-cyan-900">
        <Button className='btn btn-primary'>
          123123
        </Button>
      </div>
    </div>
  )
}

export default HomePage
