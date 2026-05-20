import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import styles from './CV.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.mjs', import.meta.url).toString();

const fileUrl = '/pdfs/resume.pdf';

export default function CV() {
    return (
        <div className={cx('container')}>
            <div className={cx('pdf-viewer')}>
                <Document file={fileUrl}>
                    <Page pageNumber={1} />
                </Document>
            </div>
            <div className={cx('Download')}>
                <a href={fileUrl} download="resume.pdf" className={cx('btn-download')}>
                    Tải CV
                </a>
            </div>
        </div>
    );
}
