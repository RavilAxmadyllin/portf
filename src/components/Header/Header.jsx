import React, {useState} from 'react'
import './Header.css'
import Nav from './Nav/Nav'
import Toggle from '../Block/Toggle'
import me from '../../assets/img/foto.jpg'
import {Link} from 'react-router-dom'


function Header() {
    const [toggle, setToggle] = useState(false)
    let special = !toggle ? 'header-inner' : 'header-inner active'
    return (
        <div className={'header'}>
            <Toggle toggle={toggle} changeMode={setToggle}/>
            <div className={special}>
                <div className={'header-image'}>
                    <Link to={'/home'}>
                        <img src={me} alt={'me'}/>
                    </Link>
                </div>
                <Nav changePage={() => setToggle(false)}/>
                <p>© 2020 Copyright</p>
            </div>
        </div>
    )
}

export default Header
