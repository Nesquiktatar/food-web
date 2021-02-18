import React from 'react';
import s from './Feedback.module.css';

const Feedback = () => {
    return (
        <div className={s.feedBackWrapper}>
            <div className={s.feedBackTitle}>Оставьте заявку</div>
            <input name='userName ' type='text' className={s.userName} placeholder='Имя'/>
            <input name='userPhone ' type='text' className={s.userPhone} placeholder='Телефон'/>
            <input name='userMail ' type='text' className={s.userMail} placeholder='Электронная почта'/>
            <div className={s.calendar}>Calender(use datepicker)</div>
            <textarea name="userText" id="" cols="30" rows="10" placeholder='Дополнительная информация'
                      className={s.userText}>Доп инфа</textarea>
            <button className={s.userSendButton}>Отправить</button>
        </div>

    )
}

export default Feedback;