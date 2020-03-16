import React from 'react';
import ButtonLink from '../ButtonLink/ButtonLink';
import style from './ChangeLayout.module.scss';

const ChangeLayout = padding => (
    <div className={style.wrapper}>
        <div className={padding ? style.lineMin : style.line} />
        <div className={style.windowWrapper}>
            <div className={style.window} />
            <div className={style.btnWrapper}>
                <ButtonLink>Change</ButtonLink>
            </div>
        </div>
    </div>
);

export default ChangeLayout;
