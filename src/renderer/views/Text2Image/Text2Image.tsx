import { useEffect, useRef } from 'react'
import './Text2Image.module.less'

const HomePage = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const invertSelfMatrix = useRef<DOMMatrix | undefined>()

  useEffect(() => {
    window.electron.ipcRenderer.sendMessage('ipc-example', 1231)
    window.electron.ipcRenderer.on('ipc-example', (v) => {
      console.log(v)
    })
  }, [])

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d')
      const matrix = ctx?.getTransform()
      invertSelfMatrix.current = matrix?.invertSelf()
    }
  }, [])

  const handleMouseMove = (event: React.MouseEvent) => {
    console.log(event, 'event')
  }
  return (
    <div styleName='Text2Image'>
      <canvas
        className='canvas_container'
        ref={canvasRef}
        onMouseMove={handleMouseMove}
      />
    </div>
  )
}

export default HomePage
