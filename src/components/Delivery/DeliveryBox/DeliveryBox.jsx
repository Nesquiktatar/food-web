import React from 'react';
import s from './DeliveryBox.module.css';

const DeliveryBox = (props) => {
    return (
        <div className={s.deliveryBoxWrapper}>
            <img src={props.deliveryImg} alt={props.deliveryAlt} className={s.deliveryImg}/>
            <a href={props.deliveryLink} className={s.deliveryLink}>{props.deliveryLinkName}</a>
            <div className={s.deliveryDescription}>{props.deliveryDescription}</div>
        </div>
    )
}

export default DeliveryBox;