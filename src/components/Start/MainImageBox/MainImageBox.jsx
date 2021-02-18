import React from 'react';
import s from './MainImageBox.module.css';

const MainImageBox = () => {
    return(
        <div className={s.MainImageBox}>
            <div className={s.box1}>box1</div>
            <div className={s.box2}>box2</div>
            <div className={s.box3}>box3</div>
        </div>
    )
}

export default MainImageBox;