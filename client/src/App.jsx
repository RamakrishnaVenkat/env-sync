import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css'

// import Home from './views/home'
// import Initiative from './Pages/Initiative/Initiative'
import Navbar from './components/Navbar'
// import Wastemngment from './Pages/wasteManagement/Wastemngment'
// import Chooseinitiative from './Pages/Initiative/Chooseinitiative'
// import Blog from './Pages/Blog/Blog'
import Signin from './Pages/Signin/Signin'

import Home from './views/home'
// import Navbar from './components/Navbar'
import Wastemngment from './Pages/wasteManagement/Wastemngment'
import Airquality from './Pages/AirQuality/Airquality'

import Initiative from "./Pages/Initiative/Initiative";

import InitiativeAfter from './Pages/Initiative/InitiativeAfter'

import Chooseinitiative from './Pages/Initiative/Chooseinitiative'
import CreateInitiate1 from './Pages/Initiative/CreateInitiate1'
import Signin from './Pages/Signin'


//import Chooseinitiative from './Pages/Initiative/Chooseinitiative'
import CreateInitiate from './Pages/Initiative/CreateInitiate'
// import Login from './Pages/login'

import UnauthorizedRoutes from "./routes/UnauthorizedRoutes";
import AuthorizedRoutes from "./routes/AuthorizedRoutes";


function App() {


  return (
    <>

       
      
      
      <InitiativeAfter/>

      
      
      


       <Router>
        <Navbar />
        <Routes>
          {/* UNAUTHORIZED ROUTES */}
          <Route element={<UnauthorizedRoutes />}>
            <Route path="/" element={<Home />}/>
            <Route path="/air-quality" element={<Airquality />}/>
            <Route path="/waste-management" element={<Wastemngment />}/>
            <Route path="/event-portal-signin" element={<Signin />}/>
            <Route path="/event-portal-signup" element={<Initiative />}/>
          </Route>

          {/* AUTHORIZED ROUTES
          <Route element={<AuthorizedRoutes />}>
           
           
          </Route> */}
        </Routes>
      </Router>

    </>
  )
}

export default App
