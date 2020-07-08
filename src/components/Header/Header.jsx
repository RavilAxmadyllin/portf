import React, {useState} from 'react'
import './Header.css'
import Nav from './Nav/Nav'
import Toggle from '../Block/Toggle'
import me from '../../assets/img/foto.jpg'


class Header extends React.Component {
    state = {
        activeMode: false
    }
    onActiveMode = (value) => {
        this.setState({
            activeMode: !value
        })
    }
    changePage = () => {
        this.setState({
            activeMode: false
        })
    }
    render() {

        let special = !this.state.activeMode ? 'header-inner' : 'header-inner active'
        return (
            <div className={'header'}>
                <Toggle activeMode={this.state.activeMode} onActiveMode={this.onActiveMode}/>
                <div className={special}>
                    <div className={'header-image'}>
                        <a href="">
                            <img src={me} alt="photo"/>
                        </a>
                    </div>
                    <Nav changePage={this.changePage}/>
                    <p>© 2020 Copyright</p>
                </div>
            </div>
        )
    }
}

export default Header