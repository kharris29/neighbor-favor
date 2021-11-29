import React from 'react'
import Head from 'next/head'
import styles from '../styles/Popup.module.css'
import Router from "next/router";

function Popup(props) {
    return (props.trigger) ? (
        <div className={styles.popup}>
            <div className={styles.popup_inner}>
                <button className={styles.closebtn} onClick={() => closeButton(props)}>close</button>
                { props.children }
            </div>
        </div>
    ) : "";
}

function closeButton(props) {
    props.setTrigger(false);
    Router.reload();
}

export default Popup