import React from 'react';
import style from './Header.module.scss';
import dataContext from '../../context/dataContext';

const Header = () => {
    const header = (
        <dataContext.Consumer>
            {item =>
                item.headerIcon.map(e => (
                    <img
                        className={style.item}
                        src={e.image}
                        alt={e.alt}
                        key={e.key}
                    />
                ))
            }
        </dataContext.Consumer>
    );

    return (
        <div className={style.wrapper}>
            <div className={style.line} />
            <div className={style.insideWrapper}>{header}</div>
            <div className={style.line} />
        </div>
    );
};

export default Header;
