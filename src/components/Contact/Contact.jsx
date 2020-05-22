import React from "react";
import styles from './Contact.module.css'
import Title from "../Block/Title";
import classes from '../Block/ContainerClass.module.css'

function Contact() {
return(
    <div className={styles.contact}>
        <div className={classes.container}>
            <Title title={'Contact'}/>
            <div className={styles.wrap}>
                    <form action="" className={styles.form}>
                            <input className={styles.formControl} type="text" placeholder={'name'}/>
                            <input className={styles.formControl} type="email" placeholder={'email'}/>
                          <textarea className={styles.formControl} placeholder={' message'}/>
                        <button>Send</button>
                    </form>
            </div>
        </div>
    </div>
)
}
export default Contact