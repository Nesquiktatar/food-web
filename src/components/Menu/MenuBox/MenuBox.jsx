import React from 'react';
import s from './MenuBox.module.css';

const MenuBox = (props) => {
    return(
        <div className={s.menuBoxWrapper}>
            <img src={props.menuBoxImg} alt={props.menuBoxAlt} className={s.menuBoxImg}/>
            <div className={s.menuBoxDescription}>{props.menuBoxDescription}</div>
            <div className={s.menuBoxPrice}>{`${props.menuBoxPrice}рублей`}</div>
        </div>
    )
}

export default MenuBox;