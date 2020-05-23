import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Skills from "./components/Skills/Skills";
import Project from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Route from "react-router-dom/es/Route";
import {Redirect} from "react-router-dom";

class App extends React.Component {
    componentDidMount() {
        return <Redirect  to={'/home'} />
            }
    render() {
        return (
            <div className="App">
                <Header/>
                <Redirect  to={'/home'} />
                <Route path={'/home'} component={Main}/>
                <Route path={'/skills'} render={() => <Skills/>}/>
                <Route path={'/project'} render={() => <Project/>}/>
                <Route path={'/contacts'} render={() => <Contact/>}/>
                {/*<Footer/>*/}
            </div>
        );
    }
}

export default App;
