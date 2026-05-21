import classNames from 'classnames/bind';
import styles from './About.module.scss';
import Hero from '../Hero';

const cx = classNames.bind(styles);

export default function About() {
    const years = new Date().getFullYear() - 2022;

    return (
        <>
            {/* About */}
            <section className={cx('about')} id="about">
                <div className={cx('aboutGrid')}>
                    <div className={cx('aboutText')}>
                        <h2 className={cx('aboutTitle')}>
                            <span className={cx('titleBar')} />
                            Giới thiệu bản thân
                        </h2>

                        <div className={cx('aboutBody')}>
                            <p>
                                Tôi là sinh viên ngành Công nghệ thông tin, định hướng chính ở mảng frontend web
                                development. Tôi quan tâm đến UI responsive, component rõ ràng, trải nghiệm người dùng
                                ổn định và cách tổ chức code dễ mở rộng.
                            </p>

                            <br />

                            <p>
                                Hiện tại, tôi đang học tại <span className={cx('accent')}>Cao Đẳng Việt Mỹ (APC)</span>{' '}
                                từ năm 2022. Trong quá trình học, tôi đã làm việc với React, JavaScript, HTML, CSS, C#,
                                ASP.NET Core, MongoDB và MySQL. Backend với tôi là nền tảng bổ trợ để hiểu luồng dữ liệu
                                và làm việc tốt hơn với API.
                            </p>

                            <div className={cx('statsGrid')}>
                                <div className={cx('statCard')}>
                                    <div className={cx('statValue')}>{years}+</div>
                                    <div className={cx('statLabel')}>Years Coding</div>
                                </div>

                                <div className={cx('statCard')}>
                                    <div className={cx('statValue')}>Frontend</div>
                                    <div className={cx('statLabel')}>Main Direction</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={cx('aboutMedia')}>
                        <div className={cx('mediaGlow')} />

                        <div className={cx('mediaCard')}>
                            <img
                                className={cx('mediaImage')}
                                src="/images/developer-workspace.png"
                                alt="Developer workspace"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
