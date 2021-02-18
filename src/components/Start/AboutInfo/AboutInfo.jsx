import React from 'react';
import s from './AboutInfo.module.css'

const AboutInfo = () => {
    return (
        <div className={s.aboutInfoWrapper}>
            <div className={s.some}>О нас</div>
            <div className={s.aboutPhoto}>some photo</div>
            <span className={s.aboutText}>some text here about us information</span>
        </div>
    )
}

export default AboutInfo;