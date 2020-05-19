import React from "react";
import styles from './Work.module.css'
function Work(props) {
    return(
        <div>
            <h3>{props.title}</h3>
            <div>{props.discription}</div>
            <div className={styles.layer}>
               <div >
                   <img  src="https://placebeard.it/250x337" alt=""/>
               </div>
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