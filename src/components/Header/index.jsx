import { useState } from 'react';
import classNames from 'classnames/bind';
import { RxHamburgerMenu } from 'react-icons/rx';

import styles from './Header.module.scss';
const fileUrl = '/pdfs/resume.pdf';

const cx = classNames.bind(styles);

const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
];

export default function Header() {
    const [open, setOpen] = useState(false);

    const closeMenu = () => setOpen(false);

    return (
        <header className={cx('header')}>
            <div className={cx('container')}>
                <div className={cx('header-content')}>
                    <a className={cx('name')} href="#home" onClick={closeMenu}>
                        <h3>KhiemPham16</h3>
                    </a>

                    <nav className={cx('nav')}>
                        <div className={cx('nav-links', { open })}>
                            {navLinks.map((item) => (
                                <a key={item.href} className={cx('link')} href={item.href} onClick={closeMenu}>
                                    {item.label}
                                </a>
                            ))}
                        </div>

                        <button
                            type="button"
                            className={cx('mobile-toggle')}
                            aria-label="Toggle menu"
                            aria-expanded={open}
                            onClick={() => setOpen((prev) => !prev)}
                        >
                            <RxHamburgerMenu className={cx('hamburgerIcon')} />
                        </button>
                    </nav>

                    <div className={cx('header-right')}>
                        <a href={fileUrl} download="resume.pdf" className={cx('hire-btn')}>
                            Hire me
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}
