import React from 'react';
import './Testing.css'
import {NavLink} from "react-router-dom";
import style from '../Start/Navbar/Navbar.module.css';

const Testing = () => {
    return (
        <div id="nav">

            <div className="menu" id="menu_1">Кейтеринг
                <div className="sub_menu">
                    <div>
                        <div className={style.item}>
                            <NavLink to='/menu' activeClassName={style.activeLink}>Меню</NavLink>
                        </div>
                        <div className={style.item}>
                            <NavLink to='/delivery' activeClassName={style.activeLink}>Доставка</NavLink>
                        </div>
                        <div className={style.item}>
                            <NavLink to='/faq' activeClassName={style.activeLink}>Faq</NavLink>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testing;