import React from "react";
import styles from "./SkillsBlock.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function SkillsBlock(props) {
return(
    <div className={styles.box}>
        <div className={styles.iconBox}>
            <div className={styles.icon} >
                <FontAwesomeIcon icon={props.icon} />
            </div>
        </div>
        <div className={styles.text}>
            <h3>{props.title}</h3>
        </div>
    </div>
)
}

export default SkillsBlock