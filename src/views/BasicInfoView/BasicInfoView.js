import React from 'react';
import Steps from '../../components/Steps/Steps';
import FormBasic from '../../components/FormBasic/FormBasic';
import ChangeLayout from '../../components/ChangeLayout/ChangeLayout';
import style from './BasicInfoView.module.scss';

const BasicInfoView = () => (
    <>
        <Steps current={2} />
        <div className={style.wrapper}>
            <FormBasic />
            <ChangeLayout />
        </div>
    </>
);

export default BasicInfoView;
