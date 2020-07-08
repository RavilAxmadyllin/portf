import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Skills from './components/Skills/Skills'
import Project from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Route from 'react-router-dom/es/Route'
import {Redirect} from 'react-router-dom'
import Particles from 'react-particles-js'

const particlesOption = {
    "particles": {
        "number": {
            "value": 260,
            "density": {
                "enable": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "speed": 4,
                "size_min": 0.4
            }
        },
        "line_linked": {
            "enable": false
        },
        "move": {
            "random": true,
            "speed": 1,
            "direction": "top",
            "out_mode": "out"
        }
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble"
            },
            "onclick": {
                "enable": true,
                "mode": "repulse"
            }
        },
        "modes": {
            "bubble": {
                "distance": 250,
                "duration": 2,
                "size": 0,
                "opacity": 0
            },
            "repulse": {
                "distance": 400,
                "duration": 4
            }
        }
    }
}

class App extends React.Component {
    componentDidMount() {
        return <Redirect  to={'/home'} />
    }
    render() {
        return (
            <div className="App">
                <Header/>
                <Particles className={'particles'} params={particlesOption}/>
                <Redirect  to={'/home'} />
                <Route path={'/home'} component={Main}/>
                <Route path={'/skills'} render={() => <Skills/>}/>
                <Route path={'/project'} render={() => <Project/>}/>
                <Route path={'/contacts'} render={() => <Contact/>}/>
            </div>
        );
    }
}

export default App
