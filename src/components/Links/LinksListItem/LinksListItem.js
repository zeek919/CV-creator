import React from 'react';
import style from './LinksListItem.module.scss';

const LinksListItem = ({ title, url, count, handleDelete }) => (
    <div className={style.wrapper}>
        <div className={style.buttonWrapper}>
            <h3 className={style.date}>{title}</h3>
            <button
                value={count}
                onClick={handleDelete}
                className={style.delete}
            />
        </div>
        <p className={style.describe}>{url}</p>
    </div>
);

export default LinksListItem;
