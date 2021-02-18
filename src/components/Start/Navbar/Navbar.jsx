import React from 'react';
import s from './Navbar.module.css'
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.navbarWrapper}>
            <div className={s.item}>
                <NavLink to='/start' activeClassName={s.activeLink}>Главная</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/gifts' activeClassName={s.activeLink}>Подарки</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/playgrounds' activeClassName={s.activeLink}>Площадки</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/serving' activeClassName={s.activeLink}>Сервировка</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/reviews' activeClassName={s.activeLink}>Отзывы</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;
