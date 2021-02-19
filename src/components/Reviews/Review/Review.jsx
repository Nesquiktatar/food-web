import React from 'react';
import s from './Review.module.css';

const Review = (props) => {
    return (
        <div className={s.reviewWrapper}>
            <div className={s.reviewDescription}>
                {props.reviewDescription}
            </div>
            <img src={props.reviewImg} alt={props.reviewAlt} className={s.reviewImg}/>
        </div>
    )
}

export default Review;