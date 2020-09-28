import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React from 'react'
import styles from './Social.module.css'

function Social(props) {
    const path = props.path ? props.path : ''
    return (
        <div className={styles.socialWrap}>
            <a className={styles.icon} href={path} target={'_blank'} rel="noopener noreferrer">
                <FontAwesomeIcon icon={props.icon}/>
            </a>
        </div>
    )
}

export default Social
