import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { CiLinkedin } from 'react-icons/ci';
import { FaGithub } from 'react-icons/fa';

const cx = classNames.bind(styles);

export default function Footer() {
    return (
        <footer className={cx('footer')}>
            <div className={cx('container')}>
                <div className={cx('content')}>
                    <div className={cx('info')}>
                        <h4>KhiemPham16</h4>

                        <p>
                            Frontend developer focused on building responsive, maintainable and user-friendly web
                            experiences.
                        </p>
                    </div>

                    <div className={cx('social-icons')}>
                        <a
                            className={cx('link')}
                            href="https://www.linkedin.com/in/phamgiakhiem16/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn"
                        >
                            <CiLinkedin className={cx('icon')} />
                        </a>

                        <a
                            className={cx('link')}
                            href="https://github.com/khiempham16"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub"
                        >
                            <FaGithub className={cx('icon')} />
                        </a>
                    </div>
                </div>

                <div className={cx('bottom')}>
                    <p>© {new Date().getFullYear()} Phạm Gia Khiêm. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
