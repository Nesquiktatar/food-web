import React from 'react';
import s from './Menu.module.css'
import MenuBox from "./MenuBox/MenuBox";
import menuBoxImg from '../../assets/images/menu1.jpg';


const Menu = () => {
    return (
        <div className={s.menuWrapper}>
            <div className={s.menuBox}>
                <MenuBox menuBoxImg={menuBoxImg} menuBoxAlt='Изображении позиции в меню'
                         menuBoxDescription='КАНАПЕ В МИНИ-БАНОЧКЕ С ТЕЛЯТИНОЙ И СОУСОМ ВАФУ 19 г'
                         menuBoxPrice='190'
                />
            </div>
            <div className={s.menuBox}>
                <MenuBox menuBoxImg={menuBoxImg} menuBoxAlt='Изображении позиции в меню'
                         menuBoxDescription='КАНАПЕ В МИНИ-БАНОЧКЕ С ТЕЛЯТИНОЙ И СОУСОМ ВАФУ 19 г'
                         menuBoxPrice='190'
                />
            </div>
            <div className={s.menuBox}>
                <MenuBox menuBoxImg={menuBoxImg} menuBoxAlt='Изображении позиции в меню'
                         menuBoxDescription='КАНАПЕ В МИНИ-БАНОЧКЕ С ТЕЛЯТИНОЙ И СОУСОМ ВАФУ 19 г'
                         menuBoxPrice='190'
                />
            </div>
            <div className={s.menuBox}>
                <MenuBox menuBoxImg={menuBoxImg} menuBoxAlt='Изображении позиции в меню'
                         menuBoxDescription='КАНАПЕ В МИНИ-БАНОЧКЕ С ТЕЛЯТИНОЙ И СОУСОМ ВАФУ 19 г'
                         menuBoxPrice='190'
                />
            </div>
            <div className={s.menuBox}>
                <MenuBox menuBoxImg={menuBoxImg} menuBoxAlt='Изображении позиции в меню'
                         menuBoxDescription='КАНАПЕ В МИНИ-БАНОЧКЕ С ТЕЛЯТИНОЙ И СОУСОМ ВАФУ 19 г'
                         menuBoxPrice='190'
                />
            </div>
            <div className={s.menuBox}>
                <MenuBox menuBoxImg={menuBoxImg} menuBoxAlt='Изображении позиции в меню'
                         menuBoxDescription='КАНАПЕ В МИНИ-БАНОЧКЕ С ТЕЛЯТИНОЙ И СОУСОМ ВАФУ 19 г'
                         menuBoxPrice='190'
                />
            </div>
            <div className={s.menuBox}>
                <MenuBox menuBoxImg={menuBoxImg} menuBoxAlt='Изображении позиции в меню'
                         menuBoxDescription='КАНАПЕ В МИНИ-БАНОЧКЕ С ТЕЛЯТИНОЙ И СОУСОМ ВАФУ 19 г'
                         menuBoxPrice='190'
                />
            </div>
            <div className={s.menuBox}>
                <MenuBox menuBoxImg={menuBoxImg} menuBoxAlt='Изображении позиции в меню'
                         menuBoxDescription='КАНАПЕ В МИНИ-БАНОЧКЕ С ТЕЛЯТИНОЙ И СОУСОМ ВАФУ 19 г'
                         menuBoxPrice='190'
                />
            </div>

        </div>

    )
}
export default Menu;