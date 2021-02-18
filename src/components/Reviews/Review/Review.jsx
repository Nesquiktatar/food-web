import React from 'react';
import s from './Review.module.css';

const Review = (props) => {
    return (
        <div className={s.reviewWrapper}>
            <div className={s.reviewDescription}>
                {props.reviewDescription}
            </div>
            <div className={s.reviewImg}>
                <img src={props.reviewImg} alt={props.reviewAlt}/>
            </div>
        </div>
    )
}

export default Review;