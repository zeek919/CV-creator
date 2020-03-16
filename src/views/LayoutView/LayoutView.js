import React from 'react';
import Steps from '../../components/Steps/Steps';
import CvTemplate from '../../components/CvTemplates/CvTemplates';
import ButtonLink from '../../components/ButtonLink/ButtonLink';
import style from './LayoutView.module.scss';

const LayoutView = () => (
    <>
        <Steps current={1} />
        <h1 className={style.header}>Choose layout</h1>
        <CvTemplate />
        <div className={style.buttonWrapper}>
            <ButtonLink path='/Basic' />
        </div>
    </>
);

export default LayoutView;
