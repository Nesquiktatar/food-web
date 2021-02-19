import React from 'react';
import s from './MenuElement.module.css';

const MenuElement = (props) => {
    return(
        <div className={s.menuElementWrapper}>
            <img src={props.menuElementImg} alt={props.menuElementAlt} className={s.menuElementImg}/>
            <div className={s.menuElementName}>{props.menuElementName}</div>
            <div className={s.menuElementComposition}>{`Состав: ${props.menuElementComposition}`}</div>
            <div className={s.menuElementWeight}>{`Вес: ${props.menuElementWeight} г`}</div>
            <div className={s.menuElementPrice}>{`Цена: ${props.menuElementPrice} рублей`}</div>
        </div>
    )
}

export default MenuElement;