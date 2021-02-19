import React from 'react';
import s from './Delivery.module.css';
import DeliveryBox from "./DeliveryBox/DeliveryBox";
import deliveryImg from '../../assets/images/delivery1.jpg';

const Delivery = () => {
    return (
        <div className={s.deliveryWrapper}>
            <span className={s.deliveryTitle}>Доставка в казани</span>
            <span className={s.deliveryDescription}>Заказывайте по телефону</span>
            <div >
                <DeliveryBox deliveryImg={deliveryImg}
                             deliveryAlt='Изображение доставки'
                             deliveryLink='/delivery/1'
                             deliveryLinkName='Сеты'
                             deliveryDescription='Сеты-какаято информация про сеты '
                />
            </div>
            <div >
                <DeliveryBox deliveryImg={deliveryImg}
                             deliveryAlt='Изображение доставки'
                             deliveryLink='/delivery/2'
                             deliveryLinkName='Боксы'
                             deliveryDescription='Боксы-какаято информация про сеты '
                />
            </div>

        </div>
    )
}

export default Delivery;