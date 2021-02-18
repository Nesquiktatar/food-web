import React from 'react';
import s from './Playground.module.css';

const Playground = (props) => {
    return (
        <div className={s.playground}>
            <div className={s.playgroundLink}>
                <a href={props.Link}>{props.linkName}</a>
            </div>
            <div className={s.playgroundDescription}>
                {props.descriptionText}
            </div>
            <img src={props.imgPath1} alt={props.imgAlt1} className={s.playgroundImage1}/>
            <img src={props.imgPath2} alt={props.imgAlt2} className={s.playgroundImage2}/>
        </div>
    )
}

export default Playground;