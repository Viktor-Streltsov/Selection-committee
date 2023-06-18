import React from "react";
import classes from '../header/header.module.css';
import header_logo from '../../image/header_logo.png';
import header_serch from '../../image/serch.png';
import header_user from '../../image/user.png';

function Header(props) {
    return(
        <div className={classes.wrapper}>
            <header className={classes.head}>
                <div className={classes.logo}>
                    <picture>
                        <img src={header_logo} alt="logo" />
                    </picture>
                    <p className={classes.text_logo}>
                        Кыргызский государственный технический университет имени И. Раззакова 
                    </p>
                </div>
                <nav className={classes.block_meny}>
                    <ul className={classes.meny}>
                        <li>
                            <a className={classes.link} href='#'>Бакалавриат и специалитет</a>
                        </li>
                        <li>
                            <a className={classes.link} href='#'>Магистратура</a>
                        </li>
                        <li className={classes.icon_link}>
                            <a className={classes.link} href='#'>
                                <img src={header_serch} alt='serch'/>
                            </a>
                        </li>
                        <li>
                            <a className={classes.link} href='#'>
                                <img src={header_user} alt='user'/>
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
};


export default Header