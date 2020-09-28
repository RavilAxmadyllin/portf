import React, {useState} from 'react'
import styles from './Contact.module.css'
import Title from '../Block/Title'
import classes from '../Block/ContainerClass.module.css'
import Bounce from 'react-reveal'
import {useFormik} from 'formik'
import {sendData} from './api'

function Contact() {
   const [sendMail, setSendMail] =  useState(false)
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            text: '',
        },
        onSubmit: (values) => {
            sendData(values)
            formik.resetForm()
            setSendMail(true)
        }

    })
    return (
        <div className={styles.contact}>
            <Bounce top>
                <div className={classes.container}>
                    <Title title={'Contact'}/>
                    <div className={styles.wrap}>
                        <form className={styles.form} onSubmit={formik.handleSubmit} autoComplete="off">
                            {sendMail && <span>отправлено</span>}
                            <input className={styles.formControl} type="name" placeholder={'name'}
                                   name='name'
                                   {...formik.getFieldProps('name')}/>
                            <input className={styles.formControl} type="email" placeholder={'email'}
                                   {...formik.getFieldProps('email')}/>
                            <textarea className={styles.formControl} placeholder={' message'}
                                      {...formik.getFieldProps('text')}/>
                            <button type={'submit'}>Send</button>
                        </form>
                    </div>
                </div>
            </Bounce>
        </div>
    )
}

export default Contact
