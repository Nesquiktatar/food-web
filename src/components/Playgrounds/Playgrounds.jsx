import React from 'react';
import s from './Playgrounds.module.css';
import Playground from "./Playground/Playground";
import imgLoftShow1 from '../../assets/images/LoftShow1.jpg'
import imgLoftShow2 from '../../assets/images/LoftShow2.jpg'
import imgSandStudio1 from '../../assets/images/sandStudio1.jpg'
import imgSandStudio2 from '../../assets/images/sandStudio2.jpg'


const Playgrounds = () => {
    return (
        <div className={s.playgrounds}>
            <div className={s.playgroundsTitleText}>
                Площадки для ваших событий, которые мы можем смело рекомендовать.
                Именно здесь мы неоднократно накрываем красивые фуршеты.
            </div>
            <div className={s.playground1}>
                <Playground Link='https://www.instagram.com/loft.show/?hl=ru'
                            linkName='LoftShow'
                            descriptionText='Детские праздники на Чистопольской'
                            imgPath1={imgLoftShow1} imgAlt1='Изображение 1 LoftShow'
                            imgPath2={imgLoftShow2} imgAlt2='Изображение 2 LoftShow'
                />
            </div>
            <div className={s.playground2}>
                <Playground Link='https://www.sand-studio.com/'
                            linkName='SandStudio'
                            descriptionText='  Творческая мастерской Sand Studio.'
                            imgPath1={imgSandStudio1} imgAlt1='Изображение 1 SandStudio'
                            imgPath2={imgSandStudio2} imgAlt2='Изображение 2 SandStudio'
                />
            </div>
        </div>
    )
}

export default Playgrounds;