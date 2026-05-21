import classNames from 'classnames/bind';
import { CiDesktop, CiServer } from 'react-icons/ci';
import { FaCode } from 'react-icons/fa';
import { IoMdCodeWorking } from 'react-icons/io';

import styles from './Skills.module.scss';

const cx = classNames.bind(styles);

const skills = [
    {
        title: 'Frontend & UI',
        icon: <CiDesktop />,
        color: 'cyan',
        tags: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React']
    },
    {
        title: 'Backend Foundation',
        icon: <CiServer />,
        color: 'purple',
        tags: ['Node.js', 'Express.js', 'ASP.NET Core', 'MongoDB', 'MySQL']
    },
    {
        title: 'Languages',
        icon: <FaCode />,
        color: 'cyan',
        tags: ['JavaScript', 'TypeScript', 'C#']
    },
    {
        title: 'Environment',
        icon: <IoMdCodeWorking />,
        color: 'purple',
        tags: ['Linux Ubuntu', 'Terminal', 'Git', 'Postman', 'Docker']
    }
];

export default function Skills() {
    return (
        <>
            <section className={cx('techSection')} id="skills">
                <div className={cx('techInner')}>
                    <h2 className={cx('techHeading')}>
                        <span className={cx('titleBar')} />
                        Kỹ năng & Chuyên môn
                    </h2>

                    <div className={cx('techGrid')}>
                        {skills.map((group) => (
                            <div className={cx('techCard')} key={group.title}>
                                <div className={cx('techIcon', group.color)}>
                                    <span className={cx('material')}>{group.icon}</span>
                                </div>

                                <h3 className={cx('techTitle')}>{group.title}</h3>

                                <div className={cx('techTags')}>
                                    {group.tags.map((tag) => (
                                        <span className={cx('tag')} key={tag}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
