import React from "react";
import styles from './Contact.module.css'
import Title from "../Block/Title";

function Contact() {
return(
    <div className={styles.contact}>
        <div className="container">
            <Title title={'Contact'}/>
            <div className={styles.wrap}>
                <div className={styles.col}>
                    <form action="" className={styles.form}>
                            <div><input className={styles.formControl} type="text" placeholder={'name'}/></div>
                            <div><input className={styles.formControl} type="email" placeholder={'email'}/></div>
                            <div><textarea className={styles.formControl} placeholder={' message'}/></div>
                        <button>Send</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
)
}
export default Contact