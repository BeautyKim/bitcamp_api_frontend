import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './hello/Home'
import Bmi from './hello/Bmi'
import Calc from './hello/Calc'
import Google from './hello/Google'
import Login from './hello/Login'

const App = () =>{
  return(
      <div>
        <Router>
        <Routes>
            <Route expected path="" element={<Home/>}/>
            <Route path='/bmi' element= {<Bmi/>}/>
            <Route path='/calc' element= {<Calc/>}/>
            <Route path='/google' element= {<Google/>}/>
            <Route path='/login' element= {<Login/>}/>
        </Routes>
        </Router>
    </div>
  )
}
export default App