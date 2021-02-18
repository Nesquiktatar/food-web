import React from 'react';
import s from './Reviews.module.css'
import Review from "./Review/Review";
import imgReview1 from '../../assets/images/'


const Reviews = () => {
    return (
        <div className={s.reviewsWrapper}>
            <div className={s.review}>
                <Review reviewDescription='Лофт шоу. 22.05.20'
                        reviewImg={imgReview1}
                />
            </div>
        </div>
    )
}

export default Reviews;