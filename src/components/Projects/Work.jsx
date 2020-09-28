import React from 'react'
import styles from './Work.module.css'

function Work(props) {
    const link = props.image ? props.image : 'https://via.placeholder.com/250x337'
    return (
        <div className={styles.block}>
            <h3 className={styles.description}>{props.title}</h3>
            <div className={styles.layer}>
                <img src={link} alt={props.title}/>
                <div className={styles.overlay}>
                    <div className={styles.item}>
                        <a href={props.code} target="_blank" rel="noopener noreferrer">code</a>
                        <a href={props.link} target="_blank" rel="noopener noreferrer">watch</a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Work
