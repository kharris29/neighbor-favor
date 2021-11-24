import React from 'react'
import styles from '../styles/Popup.module.css'
import Router from "next/router";

function Popup(props) {
    return (props.trigger) ? (
        <div className={styles.popup}>
            <div className={styles.popupinner}>
                <button className={styles.closebtn} onClick={() => closeButton(props)}>close</button>
                { props.children }
            </div>
        </div>
    ) : "";
}

//props.setTrigger(false)

function closeButton(props) {
    props.setTrigger(false);
    Router.reload();
    console.log("Close button function")
}

export default Popup