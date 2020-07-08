import React from 'react'
import './Nav.css'
import {NavLink} from 'react-router-dom'

function Nav() {
return(
    <div className={'nav-menu'} >
        <li><NavLink to='/home'>home</NavLink></li>
        <li><NavLink to='/project'>project</NavLink></li>
        <li><NavLink to='/skills'>skills</NavLink></li>
        <li><NavLink to='/contacts'>contacts</NavLink></li>

    </div>
)
}
export default Nav