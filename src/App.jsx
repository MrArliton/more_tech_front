

import {Login} from "./Pages/Login.jsx"
import {Lk} from "./Pages/Lk.jsx"
import {CommandP} from "./Pages/Command.jsx"
import {Collegs} from "./Pages/Collegs.jsx"
import {ListNFT} from "./Pages/ListNFT.jsx"
import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink,
  } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}


export const App = () =>{
    const token = getToken();

    return (
        <div >
        <Router>
              <Routes>
                <Route path="/list_nft" element={<ListNFT/>} />
                <Route path="/collegs" element={<Collegs/>} />
                <Route path="/command" element={<CommandP/>} />
                <Route path="/login" element={<Login setToken={setToken}/>} />
                <Route path="/Lk" element={<Lk/>} />
                <Route path="/*" element={<NavLink  to="/login" style={{ textDecoration: 'none' }}>Nothing</NavLink>} />
               </Routes>
        </Router>
        </div>
    )
}