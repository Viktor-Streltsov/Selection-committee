import React from 'react';
import classes from '../mainPage/MainPage.module.css';
import img1 from '../../image/img1.png';
import img2 from '../../image/img2.png';
import img3 from '../../image/img3.png';
import uni_img from '../../image/uni_img.png';
import uni1_img from '../../image/uni1_img.png';
import d_kgtu from '../../image/d_kgtu.png';
import wraite from '../../image/wraite.png';

function Main(props) {
    return (
        <div className={classes.wrapper}>
            <div className={classes.conteiner}>
                <section className={classes.block_head}>
                    <h1 className={classes.text_head}>
                        Институт архитектуры и дизайна
                    </h1>
                </section>
                <section className={classes.block_time}>
                    <h2 className={classes.time_head}>До окончания приема документов</h2>
                    <ul className={classes.time}>
                        <li>
                            <p className={classes.num}>0</p>
                            <p>Дня</p>
                        </li>
                        <li>
                            <p className={classes.num}>0</p>
                            <p>Часа</p>
                        </li>
                        <li>
                            <p className={classes.num}>0</p>
                            <p>Минут</p>
                        </li>
                        <li>
                            <p className={classes.num}>0</p>
                            <p>Секунд</p>
                        </li>
                    </ul>
                </section>
                <section className={classes.news}>
                    <div className={classes.content_news}>
                        <div className={classes.all_news}><a href='#'>Все новости</a></div>
                        <ul className={classes.slider}>
                            <li>
                                <p className={classes.date}>16.05</p>
                                <p className={classes.day}>Вторник</p>
                                <picture className={classes.img_slider}>
                                    <img src={img1} alt='img' />
                                </picture>
                                <p className={classes.text_slider}>
                                    Lorem ipsum dolor sit amet consectetur. Dui ut cras magnis lobortis metus vestibulum vitae vitae.
                                </p>
                            </li>
                            <li>
                                <p className={classes.date}>16.05</p>
                                <p className={classes.day}>Вторник</p>
                                <picture className={classes.img_slider}>
                                    <img src={img2} alt='img' />
                                </picture>
                                <p className={classes.text_slider}>
                                    Lorem ipsum dolor sit amet consectetur. Dui ut cras magnis lobortis metus vestibulum vitae vitae.
                                </p>
                            </li>
                            <li>
                                <p className={classes.date}>16.05</p>
                                <p className={classes.day}>Вторник</p>
                                <picture className={classes.img_slider}>
                                    <img src={img3} alt='img' />
                                </picture>
                                <p className={classes.text_slider}>
                                    Lorem ipsum dolor sit amet consectetur. Dui ut cras magnis lobortis metus vestibulum vitae vitae.
                                </p>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className={classes.chose_univers}>
                    <div className={classes.head_univers}>Выберайте наш университет !</div>
                    <ul className={classes.blocks_univers}>
                        <li>
                            <p className={classes.text_univer}>
                                Лучший технологический университет
                            </p>
                        </li>
                        <li>
                            <p className={classes.text_univer}>Трудоустройство</p>
                        </li>
                        <li>
                            <p className={classes.text_univer}>
                                Яркая и насыщеная жизнь в университете
                            </p>
                        </li>
                    </ul>
                </section>
                <section className={classes.chose}>
                    <div className={classes.block_chose1}>
                        <div className={classes.imge_chose1}>
                            <div className={classes.imge_phone}>
                                <div className={classes.coating}></div>
                                <img src={uni_img} alt="img" />
                            </div>
                            <div className={classes.imge_one}>
                                <img src={uni_img} alt="img" />
                            </div>
                        </div>
                        <div className={classes.info_chose}>
                            <h2 className={classes.head_info}>Бакалавриат и специалитет</h2>
                            <div className={classes.info_1}>
                                <p className={classes.text_info}>
                                    Lorem ipsum dolor sit amet consectetur. Potenti dis et arcu posuere nibh duis mauris. Suspendisse ac quam erat nibh pellentesque ut tortor enim.
                                </p>
                                <div className={classes.link_info}><a href="#">Подробнее</a></div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.block_chose2}>
                        <div>
                            <h2 className={classes.head_info2}>Магистратура</h2>
                            <div className={classes.info_2}>
                                <p className={classes.text_info}>
                                    Lorem ipsum dolor sit amet consectetur. Potenti dis et arcu posuere nibh duis mauris. Suspendisse ac quam erat nibh pellentesque ut tortor enim.
                                </p>
                                <div className={classes.link_info2}><a href="#">Подробнее</a></div>
                            </div>
                        </div>
                        <div>
                            <div className={classes.imge_chose2}>
                                <div className={classes.imge_phone}>
                                    <div className={classes.coating2}></div>
                                    <img src={uni1_img} alt="img" />
                                </div>
                                <div className={classes.imge_two}>
                                      <img src={uni1_img} alt="img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={classes.d_university}>
                    <div className={classes.content}>
                        <div className={classes.img_university}><img src={d_kgtu} alt="img" /></div>
                        <div className={classes.info_univer}>
                            <h2>3D Экскурмия по КГТУ</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur. Dui ut cras magnis lobortis metus vestibulum vitae vitae.
                            </p>
                            <div className={classes.link_univ}><a href="#">Подробнее</a></div>
                        </div>
                    </div>
                </section >
                <section className={classes.join_univer}>
                    <div className={classes.content_join}>
                        <div className={classes.img_join}>
                        <div className={classes.block_join}>
                            <h2>Поступить онлайн</h2>
                            <div className={classes.link_join}><a href="#">Подробнее</a></div>
                        </div>
                        <div className={classes.coating3}></div>
                            <img src={wraite} alt="img" />
                        </div>
                    </div>
                </section>
                <section className={classes.form}>
                    <div className={classes.head_form}>
                        <h2>Как поступить в КГТУ?</h2>
                        <p>
                            Есть вопрос? Напишите его здесь, оставьте номер телефона или e-mail. Мы свяжемся с вами и все расскажем.
                        </p>
                    </div>
                    <form className={classes.form_inputs} action="#">
                        <div className={classes.inputs}>
                            <input className={classes.input1} placeholder='Как вас зовут ? ФИО' type="text" />
                            <input className={classes.input2} placeholder='Номер телефона' type="text" />
                            <input className={classes.input3} placeholder='Электронная почта' type="text" />
                            <div className={classes.submite}>
                                <input className={classes.input4} type="submit" value="Подробнее" />
                            </div>
                        </div>
                        <div>
                            <textarea placeholder='Введите ваш вопрос' className={classes.textter} cols="70" rows="10"></textarea>
                        </div>
                    </form>
                </section>
            </div >
        </div >
    )
};


export default Main