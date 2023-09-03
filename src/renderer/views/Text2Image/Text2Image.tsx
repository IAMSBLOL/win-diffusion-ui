import { useEffect, useRef } from 'react'
import './Text2Image.module.less'

const HomePage = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const invertSelfMatrix = useRef<DOMMatrix | undefined>()
  const ctx = useRef<CanvasRenderingContext2D | null>(null)

  useEffect(() => {
    window.electron.ipcRenderer.sendMessage('ipc-example', 1231)
    window.electron.ipcRenderer.on('ipc-example', (v) => {
      console.log(v)
    })
  }, [])

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current
      canvas.width = canvas.clientWidth * window.devicePixelRatio;
      canvas.height = canvas.clientHeight * window.devicePixelRatio;
      ctx.current = canvasRef.current.getContext('2d')

      if (ctx.current) {
        ctx.current.beginPath()
        ctx.current.lineWidth = 1
        ctx.current.strokeStyle = 'red'
        ctx.current.setTransform(2, 0, 0, 2, 0, 0)
        // ctx.transform(
        //   2, 0, 0, 1, 50, 100
        // )
        ctx.current.rect(0, 0, 100, 100)
        ctx.current.stroke()
        ctx.current.closePath()
      }

      const matrix = ctx.current?.getTransform()

      console.log(matrix, 'matrix')
      // invertSelfMatrix.current = matrix?.invertSelf()
      // console.log(invertSelfMatrix.current)
      if (matrix) {
        invertSelfMatrix.current = new DOMMatrix().setMatrixValue(matrix.toString()).invertSelf()
        console.log(invertSelfMatrix.current, 'invertSelfMatrix')
      }
    }
  }, [])

  const handleClick = (event:React.MouseEvent) => {
    console.log(event, 'event')
    const { clientX, clientY } = event
    const viewportPoint = new DOMPoint(clientX, clientY).matrixTransform(invertSelfMatrix.current);
    console.log(viewportPoint, 'viewportPoint')
    if (ctx.current) {
      ctx.current.beginPath()
      ctx.current.lineWidth = 1
      ctx.current.strokeStyle = 'red'

      // ctx.transform(
      //   2, 0, 0, 1, 50, 100
      // )
      ctx.current.rect(viewportPoint.x, viewportPoint.y, 100, 100)
      ctx.current.stroke()
      ctx.current.closePath()
      // var canvasRect = canvas.getBoundingClientRect();
      // 还有 border
      // var screenX = canvasX * transform.a + canvasY * transform.c + transform.e + canvasRect.left;
      // var screenY = canvasX * transform.b + canvasY * transform.d + transform.f + canvasRect.top;
    }
  }

  return (
    <div styleName='Text2Image'>
      <canvas
        className='canvas_container'
        ref={canvasRef}
        onClick={handleClick}
      />
    </div>
  )
}

export default HomePage
