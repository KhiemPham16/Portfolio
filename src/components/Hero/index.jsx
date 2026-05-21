import classNames from 'classnames/bind';
import { MdTerminal } from 'react-icons/md';

import styles from './Hero.module.scss';

const cx = classNames.bind(styles);

export default function Hero() {
    return (
        <>
            <section className={cx('hero')} id="home" aria-label="Hero">
                <div className={cx('content')}>
                    <div className={cx('heroInfo')}>
                        <h1 className={cx('title')}>Phạm Gia Khiêm</h1>

                        <div className={cx('badge')}>
                            <MdTerminal className={cx('icon')} />
                            <span>Frontend Web Developer</span>
                        </div>

                        <p className={cx('description')}>
                            Tôi tập trung xây dựng giao diện web responsive, dễ sử dụng và dễ bảo trì bằng React,
                            JavaScript và CSS hiện đại. Bên cạnh frontend, tôi có nền tảng backend cơ bản với Node.js,
                            ASP.NET Core và database để phối hợp tốt trong dự án.
                        </p>

                        <div className={cx('actions')}>
                            <div className={cx('btn-group')}>
                                <a className={cx('btn', 'btn-primary')} href="#contact">
                                    Contact Me
                                </a>

                                <a className={cx('btn', 'btn-secondary')} href="#projects">
                                    Xem dự án
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className={cx('heroVisual')}>
                        <div className={cx('codeCard')}>
                            <div className={cx('codeHeader')}>
                                <span className={cx('dot', 'red')} />
                                <span className={cx('dot', 'yellow')} />
                                <span className={cx('dot', 'green')} />
                            </div>

                            <div className={cx('codeBody')}>
                                <p>
                                    <span className={cx('keyword')}>const</span> developer = {'{'}
                                </p>

                                <p>
                                    &nbsp;&nbsp;role:
                                    <span className={cx('string')}>
                                        {"'"}Frontend Developer{"'"}
                                    </span>
                                    ,
                                </p>

                                <p>
                                    &nbsp;&nbsp;stack:
                                    <span className={cx('string')}>['React', 'JavaScript', 'SCSS']</span>
                                </p>

                                <p>
                                    &nbsp;&nbsp;focus:
                                    <span className={cx('string')}>
                                        {"'"}Responsive UI & Clean Code{"'"}
                                    </span>
                                </p>

                                <p>{'}'}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
