import React, { Component } from 'react';
import Home from './components/Home';
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
  
class App extends Component {
      componentDidMount(){
        this.fetchMusic();
    }
    fetchMusic(){
        fetch('/api/musics')
            .then(res => res.json())
            
            .then(data => console.log(data));
        } 

    render(){
        return(
        <BrowserRouter>
            <Routes>
                {/* Return the element Home in the route "/" */}
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
        )
    }
}

export default App