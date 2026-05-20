import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { RxHamburgerMenu } from 'react-icons/rx';

import styles from './Header.module.scss';

const cx = classNames.bind(styles);

export default function Header() {
    const [open, setOpen] = useState(false);

    const toggle = () => setOpen((v) => !v);
    return (
        <>
            <div className={cx('header')}>
                <div className={cx('container')}>
                    <div className={cx('header-content')}>
                        {/* Name */}
                        <Link className={cx('name')} to="/">
                            <h3>KhiemPham16</h3>
                        </Link>
                        <nav className={cx('nav')}>
                            <div className={cx('nav-links', open ? 'open' : '')}>
                                <Link className={cx('link')} to="/">
                                    About
                                </Link>
                                <Link className={cx('link')} to="/projects">
                                    Projects
                                </Link>
                                <Link className={cx('link')} to="/contact">
                                    Contact
                                </Link>
                            </div>
                            <button
                                className={cx('mobile-toggle')}
                                aria-label="Toggle menu"
                                aria-expanded={open}
                                onClick={toggle}
                            >
                                <RxHamburgerMenu className={cx('hamburgerIcon')} />
                            </button>
                        </nav>
                        {/* btn Hire */}
                        <div className={cx('header-right')}>
                            <Link className={cx('hire-btn')} to="/cv">
                                Hire me
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
