import React from "react";
import styles from './Title.module.css'
function Title(props) {
return(
    <div className={styles.title}>
        <h2>{props.title}</h2>
    </div>
)
}

export default Title