import React from 'react';
import s from './MenuPosition.module.css';
import MenuElement from "../MenuElement/MenuElement";
import menuElementImg from '../../../assets/images/menu1.jpg'

const MenuPosition = () => {
    return (
        <div className={s.menuPositionWrapper}>
            <MenuElement menuElementImg={menuElementImg} menuElementAlt='Изображение 1 позиции меню'
                         menuElementName='КАНАПЕ В МИНИ-БАНОЧКЕ С ТЕЛЯТИНОЙ И СОУСОМ ВАФУ 19 г'
                         menuElementComposition='Говядина вырезка, соус вафу-стейк, огурцы, сухари'
                         menuElementWeight='19' menuElementPrice='200'
            />
        </div>
    )
}

export default MenuPosition;