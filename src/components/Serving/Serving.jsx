import React from 'react';
import s from './Serving.module.css';
import ServingBox from "./ServingBox/ServingBox";
import imgServing1 from '../../assets/images/serving1.jpg'
import imgServing2 from '../../assets/images/serving2.jpg'
import imgServing3 from '../../assets/images/serving3.jpg'
import imgServing4 from '../../assets/images/serving4.jpg'

let description1 = 'Фирменная сервировка Bankatering включает скатерть или крафтовую бумагу натуральных оттенков,' +
    ' подсвечники со свечами, а также подставки/подносы в случае заказа блюд, которые не предполагают наличие баночек, ' +
    'например, тарталетки, круассаны, конфеты, мини-сырники и тд.\n ';

const Serving = (props) => {
    return (
        <div className={s.servingWrapper}>
            <div className={s.servingTitle}>Сервировка</div>
            <div className={s.servingDescription}>{description1}</div>
            <div className={s.servingBox1}>
                <ServingBox servingBoxTitleName='ЦВЕТОВЫЕ РЕШЕНИЯ ДЛЯ ПРЕДМЕТОВ ДЕКОРА СТОЛА'
                            servingBoxDescriptionText='Подсвечники, подставки, подносы, корзины и рамки могут быть как в
                             едином цветовом решении, так и смешанном. Предметы декора выбранного цветового решения
                              могут не совпадать с теми, которые представлены на фото.'
                            imgPath1={imgServing1}
                            imgPath2={imgServing2}
                />
            </div>
            <div className={s.servingBox2}>
                <ServingBox servingBoxTitleName='ПРИБОРЫТОЛА'
                            servingBoxDescriptionText='Салаты в баночках подаются с деревянными вилками.
                            Десерты – с деревянными ложками.'
                            imgPath1={imgServing3}
                            imgPath2={imgServing4}
                />
            </div>

        </div>
    )
}

export default Serving;