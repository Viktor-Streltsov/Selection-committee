import React from 'react';
import classes from '../footer/footer.module.css';
import logo from '../../image/header_logo.png';
import twitter from '../../image/twitter.png';
import facebook from '../../image/facebook.png';
import vk from '../../image/vk.png';
import instagramm from '../../image/instagramm.png';
import map from '../../image/map.png';

function Footer(props) {
    return (
        <div className={classes.wrapper}>
            <footer className={classes.footer}>
                <div className={classes.footer_block_logo}>
                    <div className={classes.logo_text}>
                        <picture className={classes.logo}>
                            <img src={logo} alt='logo' />
                        </picture>
                        <h1 className={classes.text}>
                            Кыргызский государственный технический университет имени И. Раззакова
                        </h1>
                    </div>
                    <div>
                        <div className={classes.tel}>
                            <h4 className={classes.text_addres}>Контакты:</h4>
                            <div className={classes.tel_link}>
                                <a className={classes.link} href='tel:996312545125'>+996-312-54-51-25</a>
                            </div>
                        </div>
                        <div className={classes.addres}>
                            <h4 className={classes.text_addres}>Адрес:</h4>
                            <div className={classes.addres_text}>
                                <a className={classes.link} href='#'>720044, Кыргызстан, г.Бишкек, пр.Ч.Айтматова, 66</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.block_link_seti}>
                    <div>
                        <picture>
                            <img src={map} alt='map'/>
                        </picture>
                    </div>
                    <ul className={classes.link_seti}>
                        <li>
                            <a href='#'><img src={twitter} alt='img' /></a>
                        </li>
                        <li>
                            <a href='#'><img src={facebook} alt='img' /></a>
                        </li>
                        <li>
                            <a href='#'><img src={vk} alt='img' /></a>
                        </li>
                        <li>
                            <a href='#'><img src={instagramm} alt='img' /></a>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    )
};

export default Footer