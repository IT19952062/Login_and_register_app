import './App.css';
import React, { useContext } from 'react'
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom"
import { AuthContextProvider } from "./Components/context/AuthContext";



import Dashboard from './Components/DashBoard/Dashboard';
import Navbar from './Components/Header/navbar';


// import AuthContext from './Components/context/AuthContext'
import Register from "./Components/auth/Register";
import Login from "./Components/auth/Login";
import AuthContext from './Components/context/AuthContext';



axios.defaults.withCredentials = true;

function App() {

  // const { loggedIn } = useContext(AuthContext);
  return (


    <AuthContextProvider>
      <Router>
        <div>
         <Route path="/dashboard" component={Navbar}/>

          <Route path="/dashboard" exact component={Dashboard} />
          <Route exact path="/register"><Register /></Route>
          <Route exact path="/"><Login /></Route>



        </div>

      </Router>
    </AuthContextProvider>

  );
}

export default App;
