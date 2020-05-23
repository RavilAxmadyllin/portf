import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Skills from "./components/Skills/Skills";
import Project from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Route from "react-router-dom/es/Route";

function App() {
    return (
        <div className="App">
            <Header/>
            <Route path={'/'} render={() => <Main/>}/>
            <Route path={'/skills'} render={() => <Skills/>}/>
            <Route path={'/project'} render={() => <Project/>}/>
            <Route path={'/contacts'} render={() => <Contact/>}/>
            {/*<Footer/>*/}
        </div>
    );
}

export default App;
