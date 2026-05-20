import React, { useEffect, useState, useRef } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import styles from './CV.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.mjs', import.meta.url).toString();

const fileUrl = '/pdfs/resume.pdf';

export default function CV() {
    const wrapperRef = useRef(null);
    const [cssWidth, setCssWidth] = useState(720);
    const [renderDpr, setRenderDpr] = useState(1);

    useEffect(() => {
        function update() {
            if (typeof window === 'undefined') return;
            const vw = window.innerWidth;
            const padding = 32;
            const max = 900;
            const baseWidth = Math.min(max, Math.max(320, vw - padding));
            setCssWidth(baseWidth);
            
            const dpr = window.devicePixelRatio || 1;
            const renderDprValue = Math.min(3, Math.max(1, Math.round(dpr * 2)));
            setRenderDpr(renderDprValue);
        }

        update();
        window.addEventListener('resize', update);
        return () => window.removeEventListener('resize', update);
    }, []);

    return (
        <div className={cx('container')}>
            <div className={cx('pdf-viewer')} ref={wrapperRef}>
                <Document file={fileUrl}>
                    <Page
                        pageNumber={1}
                        width={cssWidth}
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                        devicePixelRatio={renderDpr}
                    />
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
