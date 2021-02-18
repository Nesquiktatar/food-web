import React from 'react';
import s from './ServingBox.module.css';

const ServingBox = (props) => {
    return (
        <div className={s.servingBoxWrapper}>
            <div className={s.servingBoxTitle}>
                {props.servingBoxTitleName}
            </div>
            <div className={s.servingBoxDescription}>
                {props.servingBoxDescriptionText}
            </div>
            <img src={props.imgPath1} alt={props.imgAlt1} className={s.servingBoxImage1}/>
            <img src={props.imgPath2} alt={props.imgAlt2} className={s.servingBoxImage2}/>

        </div>
    )
}

export default ServingBox;