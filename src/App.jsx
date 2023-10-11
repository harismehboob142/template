import { Fragment, useState } from 'react'
import { ManageAuth } from './pages/ManageAuth'


function App() {
  const [count, setCount] = useState(0)

  return (
   <Fragment>
    <ManageAuth/>
   </Fragment>
  )
}

export default App
