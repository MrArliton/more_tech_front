

import {Login} from "./Pages/Login_interface.jsx"
import {Lk} from "./Pages/Lk_interface.jsx"

import styles from "./App.module.css"

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    NavLink,
  } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';


export const App = () =>{
    
    return (
        <div >
        <Router>
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/lk" element={<Lk />} />
                <Route path="/*" element={<NavLink  to="/login" style={{ textDecoration: 'none' }}>Nothing</NavLink>} />
               </Routes>
        </Router>
        </div>
    )
}