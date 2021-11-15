import './App.css';
import Header from "./components/Header";
import {Route, Switch} from "react-router-dom";
import About from "./components/About";
import Restaurants from "./components/Restaurants";
import Home from "./components/Home";
import {useState} from "react";
import "./css/main.css"



function App() {
    const [headerDisplay,setHeaderDisplay]=useState("absolute") //css display property
  return (
    <div className="App">
        <Switch>
            <Route path="/about">
                <Header display="relative"/>
                <About title="About"/>
            </Route>
            <Route path="/">
                <Header display="fixed"/>
                <Home title="Home"/>
            </Route>


        </Switch>
    </div>
  );
}

export default App;
