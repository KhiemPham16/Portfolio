import classNames from 'classnames/bind';
import { CiMail, CiLinkedin } from 'react-icons/ci';
import { FaGithub } from 'react-icons/fa';

import styles from './Contact.module.scss';

const cx = classNames.bind(styles);

const contacts = [
    {
        title: 'Email Me',
        value: 'khiem422210113@caodangvietmy.edu.vn',
        icon: <CiMail />
    },
    {
        title: 'GitHub',
        value: 'github.com/khiempham16',
        href: 'https://github.com/khiempham16',
        icon: <FaGithub />
    },
    {
        title: 'LinkedIn',
        value: 'linkedin.com/in/phamgiakhiem16',
        href: 'https://www.linkedin.com/in/phamgiakhiem16/',
        icon: <CiLinkedin />
    }
];

export default function Contact() {
    return (
        <section className={cx('contactSection')} id="contact">
            <div className={cx('contactContainer')}>
                <div className={cx('contactContent')}>
                    <div className={cx('contactLeft')}>
                        <h2 className={cx('contactTitle')}>Liên hệ</h2>

                        <p className={cx('contactDescription')}>
                            Tôi đang tập trung phát triển ở mảng frontend web development và luôn sẵn sàng học hỏi, hợp
                            tác trong các dự án thực tế.
                        </p>
                    </div>

                    <div className={cx('contactRight')}>
                        {contacts.map((item) => (
                            <a
                                key={item.title}
                                href={item.href}
                                target="_blank"
                                rel="noreferrer"
                                className={cx('contactCard')}
                            >
                                <div className={cx('contactIcon')}>{item.icon}</div>

                                <div className={cx('contactInfo')}>
                                    <span className={cx('contactLabel')}>{item.title}</span>

                                    <span className={cx('contactValue')}>{item.value}</span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
