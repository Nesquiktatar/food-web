import './App.css';
import React from 'react';
import Start from "./components/Start/Start";
import Header from "./components/Start/Header/Header";
import Navbar from "./components/Start/Navbar/Navbar";
import Gifts from "./components/Gifts/Gifts";
import {BrowserRouter, Route} from "react-router-dom";
import Playgrounds from "./components/Playgrounds/Playgrounds";
import Serving from "./components/Serving/Serving";
import Reviews from "./components/Reviews/Reviews";


const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <header className="App-header">
                    <Header/>
                    <Navbar/>
                    <div className='wrapper'>
                        <Route path='/start' component={Start}/>
                        <Route path='/gifts' component={Gifts}/>
                        <Route path='/playgrounds' component={Playgrounds}/>
                        <Route path='/serving' component={Serving}/>
                        <Route path='/reviews' component={Reviews}/>
                    </div>
                    <div className='footer'>Footer</div>
                </header>
            </div>
        </BrowserRouter>
    );
}

export default App;
