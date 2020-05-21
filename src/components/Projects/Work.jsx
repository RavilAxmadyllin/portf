import React from "react";
import styles from './Work.module.css'
function Work(props) {
    return(
        <div className={styles.block}>
            <h3>{props.title}</h3>
            <div className={styles.discription}>{props.discription}</div>
            <div className={styles.layer}>
                <img  src="https://placebeard.it/250x337" alt=""/>
                <div className={styles.layerItem}>
                    <div className={styles.item}>
                        <a>code</a>
                    </div>
                    <div className={styles.item}>
                        <a>watch </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Work