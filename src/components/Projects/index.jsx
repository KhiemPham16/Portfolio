import classNames from 'classnames/bind';
import styles from './Projects.module.scss';
import { HiOutlineExternalLink } from 'react-icons/hi';

const cx = classNames.bind(styles);

const projects = [
    {
        title: 'Sui BootCamp',
        image: '/images/sui-bootcamp.png',
        github: 'https://github.com/KhiemPham16/SUIBOOTCAMP',
        tags: [
            'React',
            'Express',
            'JavaScript',
            'nodejs',
            'Sui Blockchain',
            'mongodb',
            'd-app',
            'web3',
            'Sui Move smart contract'
        ],
        description:
            'Một D-App đơn giản cho phép người dùng tạo sự kiện và đăng ký tham gia sự kiện trên blockchain Sui giống như luma.com.'
    },
    {
        title: 'Campus Social Network',
        image: '/images/campus-social.png',
        github: '',
        tags: ['React', 'Node.js', 'MongoDB', 'JWT', 'REST API', 'Social Network', 'MERN Stack'],
        description:
            'Mạng xã hội nội bộ clone giống Facebook, hỗ trợ đăng bài, tương tác, quản lý người dùng và phân quyền theo vai trò.'
    }
];

export default function Projects() {
    return (
        <>
            <section className={cx('projectsSection')} id="projects">
                <div className={cx('projectsInner')}>
                    <h2 className={cx('projectsHeading')}>
                        <span className={cx('titleBar')} />
                        Dự án nổi bật
                    </h2>

                    <div className={cx('projectsGrid')}>
                        {projects.map((project) => (
                            <article className={cx('projectCard')} key={project.title}>
                                <div className={cx('imageWrapper')}>
                                    <img src={project.image} alt={project.title} className={cx('projectImage')} />
                                </div>

                                <div className={cx('projectContent')}>
                                    <div className={cx('projectTop')}>
                                        <h3 className={cx('projectTitle')}>{project.title}</h3>

                                        {project.github ? (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noreferrer"
                                                className={cx('projectLink')}
                                            >
                                                <HiOutlineExternalLink />
                                            </a>
                                        ) : (
                                            <span className={cx('projectPrivate')}>Private</span>
                                        )}
                                    </div>

                                    <p className={cx('projectDescription')}>{project.description}</p>

                                    <div className={cx('tags')}>
                                        {project.tags.map((tag) => (
                                            <span key={tag} className={cx('tag')}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
