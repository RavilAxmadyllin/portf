
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faTelegramPlane, faVk} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import styles from './Social.module.css'

function Social(props) {
    return(
        <div className={styles.socialWrap}>
            <a className={styles.icon} href=""><FontAwesomeIcon icon={props.icon} /></a>
        </div>
    )
}
export default Social