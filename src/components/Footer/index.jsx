import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { CiLinkedin } from 'react-icons/ci';
import { FaGithub } from 'react-icons/fa';

const cx = classNames.bind(styles);

export default function Footer() {
    return (
        <>
            <footer className={cx('footer')}>
                <div className={cx('container')}>
                    <div className={cx('content')}>
                        <h4>KhiemPham16</h4>
                        <p>
                            Copyright &copy; {new Date().getFullYear()}. Turning ideas into scalable digital products.
                        </p>
                        <div className={cx('social-icons')}>
                            <Link className={cx('link')} to="https://www.linkedin.com/in/phamgiakhiem16/">
                                <CiLinkedin className={cx('icon')} />
                            </Link>
                            <Link className={cx('link')} to="https://github.com/khiempham16">
                                <FaGithub className={cx('icon')} />
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
