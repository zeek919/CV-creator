import React from 'react';
import { Link } from 'react-router-dom';
import style from './StartBtn.module.scss';

const StartBtn = () => (
    <div className={style.wrapper}>
        <Link to="/Layout" className={style.button}>
            Make your own CV!
        </Link>
    </div>
);

export default StartBtn;
