import React from 'react';
import s from './Start.module.css'
import MainImageBox from "./MainImageBox/MainImageBox";
import AboutInfo from './AboutInfo/AboutInfo'
import Feedback from './Feedback/Feedback'

const Start = () => {
    return (
        <div className={s.startWrapper}>
            <div ><MainImageBox/></div>
            <div><AboutInfo/></div>
            <div><Feedback/></div>
            <div className={s.main}>Main</div>


        </div>
    )
}

export default Start;