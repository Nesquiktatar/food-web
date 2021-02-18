import React from 'react';
import s from './GiftBox.module.css';

const GiftBox = (props) => {
    return(
        <div className={s.giftBoxWrapper}>
            <div className={s.giftBoxImage}>
                image
            </div>
            <div className={s.giftBoxName}>
                {props.giftBoxName}
            </div>
            <div className={s.giftBoxPrice}>
                {props.giftBoxPrice}
            </div>
        </div>
    )
}

export default GiftBox;