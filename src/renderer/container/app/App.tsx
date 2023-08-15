// import { Redirect } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import './app.module.less'
// import { useDispatch } from 'react-redux'

const App = () => {
  return (
    <div styleName='app'>

      <Outlet />
    </div>
  )
}
export default App
