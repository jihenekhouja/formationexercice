
import './App.css';
import { me } from './Service/tasks2.service';
import { useEffect, useState } from 'react';
import AdminRoute from './Router/Routeadmin';
import UserRoute from './Router/Routeclient';
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
} from "react-router-dom"
import Login from './Page/Login/login';
import Formation from './Componenets/Formation/formation';
import Gestion from './Componenets/User/gestionuser';
import Formationaffichage from './Componenets/Client/formationaffichage';
import { me1 } from './Componenets/redux-toolkit/reducers/tasks.reducers';
function App() {
  const dispatche = useDispatch()
 
  useEffect(() => {

    const fetcheda = async () => {
      try {
       dispatche(me1())
        console.log( dispatche(me1()))
      
       
      } catch (e) { }
    }
    fetcheda()
  }, [])
  const user = useSelector((store) => store.tasks.user)
 console.log(user)
  const token = localStorage.getItem("token")

  // if (user.role === "admin") {
    return (
    // <div className="App">
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path="/" element={<Navigate to="/Admin" replace />} />
    //       <Route path="Admin" element={<AdminRoute />} >
    //         <Route path="" element={<Navigate to="formation" replace />} />
    //         <Route path="User" element={<Gestion />} />
    //         <Route path="formation" element={<Formation />} />
    //       </Route>
    //     </Routes>
    //   </BrowserRouter>

    // </div>)
  // } else if (user.role === "user") {
  //   return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            {/* <Route path="User" element={<UserRoute />} > */}
            <Route path="formationu" element={<Formationaffichage />} /> 

            {/* </Route> */}
          </Routes>
        </BrowserRouter>
      </div>
    );
  // }
  // else if (!token) {
  //   return (
  //     <div className="App">
  //       <BrowserRouter>
  //         <Routes>
  //         <Route path="formationu" element={<Formationaffichage />} />
  //         <Route path='/login' element={<Login />} />
  //           <Route path="*" element={<Navigate to="/login" replace />} />
  //         </Routes>
  //       </BrowserRouter>
  //     </div>
  //   );
  // } else {
  //   return <div>loading ......</div>
  // }

}

export default App;
