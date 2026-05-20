import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Header.module.scss';

const cx = classNames.bind(styles);

export default function Header() {
    return (
        <>
            <div className={cx('header')}>
                <div className={cx('container')}>
                    <div className={cx('header-content')}>
                        {/* Name */}
                        <Link className={cx('name')} to="/">
                            <h1>KhiemPham16</h1>
                        </Link>
                        {/* About */}
                        <Link className={cx('link')} to="/">
                            About
                        </Link>
                        {/* Projects */}
                        <Link className={cx('link')} to="/projects">
                            Projects
                        </Link>
                        {/* Contact */}
                        <Link className={cx('link')} to="/contact">
                            Contact
                        </Link>
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
