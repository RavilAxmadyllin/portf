import React from 'react'
import './toggle.css'

const Toggle = (props) => {
    const onActive = () => {
        props.changeMode(!props.toggle)
    }
    let activeClass = !props.toggle ? 'menu-icon' : 'menu-icon menu-icon-active'
    return (
        <div className="menu-icon-wrapper">
            <div className={activeClass} onClick={onActive}></div>
        </div>
    )

}

export default Toggle
