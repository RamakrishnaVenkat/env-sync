import './App.css'
import Home from './views/home'
// import Initiative from './Pages/Initiative/Initiative'

import Navbar from './components/Navbar'
import Wastemngment from './Pages/wasteManagement/Wastemngment'
import Airquality from './Pages/AirQuality/Airquality'
// import Chooseinitiative from './Pages/Initiative/Chooseinitiative'

//import Navbar from './components/Navbar'
//import Wastemngment from './Pages/wasteManagement/Wastemngment'
import InitiativeAfter from './Pages/Initiative/InitiativeAfter'
//import Chooseinitiative from './Pages/Initiative/Chooseinitiative'
import CreateInitiate from './Pages/Initiative/CreateInitiate'
import Login from './Pages/login'

function App() {


  return (
    <>
      {/* <Home/> */}
      <Navbar/>
      {/* <Initiative/> */}
      <Airquality/>
      {/* <Chooseinitiative/> */}
      {/* <Wastemngment/> */}

       
      
      
      <Login/>

      
      

      
    </>
  )
}

export default App
