import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { MdTerminal } from 'react-icons/md';
import { CiDesktop } from 'react-icons/ci';
import { CiServer } from 'react-icons/ci';
import { FaCode } from 'react-icons/fa';
import { IoMdCodeWorking } from 'react-icons/io';

import styles from './About.module.scss';

const cx = classNames.bind(styles);

export default function About() {
    const years = new Date().getFullYear() - 2022;
    return (
        <main className={cx('container')}>
            <section className={cx('hero')} aria-label="About">
                <div className={cx('content')}>
                    <div className={cx('badge')}>
                        <MdTerminal className={cx('icon')} />
                        <span>Ready to Build</span>
                    </div>

                    <div className={cx('name')}>
                        <h1 className={cx('title')}>Phạm Gia Khiêm</h1>
                        <span className={cx('dash')}>—</span>
                        <h2 className={cx('highlight')}>Frontend Developer</h2>
                    </div>

                    <p className={cx('description')}>
                        Crafting responsive, scalable, and maintainable web applications with a focus on clean
                        architecture and high-performance user interfaces.
                    </p>

                    <div className={cx('actions')}>
                        <div className={cx('btn-group')}>
                            <Link className={cx('btn', 'btn-primary')} to="/projects">
                                View Projects
                            </Link>
                            <Link className={cx('btn', 'btn-secondary')} to="/contact">
                                Contact Me
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Me section copied from test.html, converted to module classes */}
            <section className={cx('about')} id="about">
                <div className={cx('aboutGrid')}>
                    <div className={cx('aboutText')}>
                        <h2 className={cx('aboutTitle')}>
                            <span className={cx('titleBar')} />
                            About Me
                        </h2>
                        <div className={cx('aboutBody')}>
                            <p>
                                Born in 2007, I am a developer who found a passion for engineering early. My journey in
                                software development began with a strong sense of discipline and curiosity, leading me
                                to dive deep into both frontend aesthetics and backend logic.
                            </p>
                            <p>
                                Currently, I am pursuing my studies at{' '}
                                <span className={cx('accent')}>American Polytechnic</span> (2022-present), where I
                                continue to refine my technical foundations and expand my knowledge across the fullstack
                                ecosystem.
                            </p>

                            <div className={cx('statsGrid')}>
                                <div className={cx('statCard')}>
                                    <div className={cx('statValue')}>{`${years}+`}</div>
                                    <div className={cx('statLabel')}>Years Coding</div>
                                </div>
                                <div className={cx('statCard')}>
                                    <div className={cx('statValue')}>A+</div>
                                    <div className={cx('statLabel')}>Learning Discipline</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={cx('aboutMedia')}>
                        <div className={cx('mediaGlow')} />
                        <div className={cx('mediaCard')}>
                            <img
                                className={cx('mediaImage')}
                                alt="Cinematic developer workspace"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdzVcrzIwX3MQNW6WFn0GJrxRyYAXN8LEJAKC7AYFh4Tta2ndl5qEasSd4dwW_SxEn2NfF1LHEOgfB77QbZgDOhYWwF_hsCJxUPpgKgcRm0lyryLpFllXDjDiZ8sj8ESQJvnxtKvJrV6O4P5xNF7HBodbuVeMZ-MCcH_za2ZnMifvyKblmZOmmT0F5dldJGL-thwxzBFAop4g0PSUuAUp6J0bJgN9PMfsJhcXcDMGVJqKSrwzxhho2phKka0qK8zdHgKAnh7aAYQ"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Technical Arsenal (from test.html) */}
            <section className={cx('techSection')} id="skills">
                <div className={cx('techInner')}>
                    <h2 className={cx('techHeading')}>Technical Arsenal</h2>

                    <div className={cx('techGrid')}>
                        <div className={cx('techCard')}>
                            <div className={cx('techIcon', 'cyan')}>
                                <span className={cx('material')}>
                                    <CiDesktop />
                                </span>
                            </div>
                            <h3 className={cx('techTitle')}>Frontend &amp; UI</h3>
                            <div className={cx('techTags')}>
                                <span className={cx('tag')}>HTML5</span>
                                <span className={cx('tag')}>CSS3</span>
                                <span className={cx('tag')}>JavaScript</span>
                                <span className={cx('tag')}>TypeScript</span>
                                <span className={cx('tag')}>React</span>
                            </div>
                        </div>

                        <div className={cx('techCard')}>
                            <div className={cx('techIcon', 'purple')}>
                                <span className={cx('material')}>
                                    <CiServer />
                                </span>
                            </div>
                            <h3 className={cx('techTitle')}>Backend</h3>
                            <div className={cx('techTags')}>
                                <span className={cx('tag')}>Node.js</span>
                                <span className={cx('tag')}>Express.js</span>
                                <span className={cx('tag')}>ASP.NET Core</span>
                                <span className={cx('tag')}>MongoDB</span>
                            </div>
                        </div>

                        <div className={cx('techCard')}>
                            <div className={cx('techIcon', 'cyan')}>
                                <span className={cx('material')}>
                                    <FaCode />
                                </span>
                            </div>
                            <h3 className={cx('techTitle')}>Languages</h3>
                            <div className={cx('techTags')}>
                                <span className={cx('tag')}>TypeScript</span>
                                <span className={cx('tag')}>C#</span>
                                <span className={cx('tag')}>Python</span>
                            </div>
                        </div>

                        <div className={cx('techCard')}>
                            <div className={cx('techIcon', 'purple')}>
                                <span className={cx('material')}>
                                    <IoMdCodeWorking />
                                </span>
                            </div>
                            <h3 className={cx('techTitle')}>Environment</h3>
                            <div className={cx('techTags')}>
                                <span className={cx('tag')}>Linux (Ubuntu)</span>
                                <span className={cx('tag')}>Terminal</span>
                                <span className={cx('tag')}>Git</span>
                                <span className={cx('tag')}>Postman</span>
                                <span className={cx('tag')}>Docker</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
