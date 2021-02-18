import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <div className={s.headerWrapper}>
            <div className={s.logo}>logo</div>
            <div className={s.whats}>whats</div>
            <div className={s.inst}>inst</div>
        </div>
    )
}

export default Header;