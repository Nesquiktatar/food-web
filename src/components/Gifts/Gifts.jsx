import React from 'react';
import s from './Gifts.module.css'
import GiftBox from "./GifBox/GiftBox";

const Gifts = () => {
    return (
        <div className={s.giftsWrapper}>
            <div className={s.giftsTitle}>ПОДАРКИ</div>
            <div className={s.giftsText}>Праздники и торжественные моменты всегда хочется продлить,
                а если можно – то и унести с собой. Мы создаем корпоративные и памятные подарки,
                которые не только станут приятным сюрпризом на вашем мероприятии, но сохранят его частичку после самого
                торжества.
            </div>
            <div className={s.giftBox1}>
                <GiftBox giftBoxName='Бокс №1' giftBoxPrice='300 Р'/>
            </div>
            <div className={s.giftBox2}>
                <GiftBox giftBoxName='Бокс №2' giftBoxPrice='600 Р'/>
            </div>

        </div>
    )
}

export default Gifts;