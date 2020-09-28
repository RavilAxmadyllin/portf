import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Skills from './components/Skills/Skills'
import Project from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import {Redirect, Route} from 'react-router-dom'

function App() {
    return (
        <div className="App">
            <Header/>
            <Redirect to={'/home'}/>
            <Route path={'/home'} render={() => <Main/>}/>
            <Route path={'/skills'} render={() => <Skills/>}/>
            <Route path={'/project'} render={() => <Project/>}/>
            <Route path={'/contacts'} render={() => <Contact/>}/>
        </div>
    )
}

export default App
