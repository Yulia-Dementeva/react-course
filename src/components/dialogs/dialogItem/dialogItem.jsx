import React from 'react';
import s from './dialogItem.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={'/dialogs/' + props.id}> <img className={s.avaPictures} src={props.ava} /> {props.name}</NavLink>
        </div>
    )
}


export default DialogItem