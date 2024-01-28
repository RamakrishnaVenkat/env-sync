import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css'

// import Home from './views/home'
// import Initiative from './Pages/Initiative/Initiative'
import Navbar from './components/Navbar'
// import Wastemngment from './Pages/wasteManagement/Wastemngment'
// import Chooseinitiative from './Pages/Initiative/Chooseinitiative'
// import Blog from './Pages/Blog/Blog'
<<<<<<< HEAD
import Signin from './Pages/Signin/Signin'
=======

import Home from './views/home'
// import Navbar from './components/Navbar'
import Wastemngment from './Pages/wasteManagement/Wastemngment'
import Airquality from './Pages/AirQuality/Airquality'

// import Initiative from './Pages/Initiative/Initiative'
import InitiativeAfter from './Pages/Initiative/InitiativeAfter'
//import Chooseinitiative from './Pages/Initiative/Chooseinitiative'
import CreateInitiate from './Pages/Initiative/CreateInitiate'
// import Login from './Pages/login'

import UnauthorizedRoutes from "./routes/UnauthorizedRoutes";
import AuthorizedRoutes from "./routes/AuthorizedRoutes";

>>>>>>> 57370f94ba8ea24000eb5901521e9344dcfb7714
function App() {


  return (
    <>
<<<<<<< HEAD
      {/* <Home/> */}
      <Navbar/>
      {/* <Initiative/> */}
      {/* <Blog/> */}
      {/* <Chooseinitiative/> */}
      {/* <Wastemngment/> */}
      <Signin/>
=======

>>>>>>> 57370f94ba8ea24000eb5901521e9344dcfb7714
      

       <Router>
        <Navbar />
        <Routes>
          {/* UNAUTHORIZED ROUTES */}
          <Route element={<UnauthorizedRoutes />}>
            <Route path="/" element={<Home />}/>
            <Route path="/air-quality" element={<Airquality />}/>
            <Route path="/waste-management" element={<Wastemngment />}/>
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
