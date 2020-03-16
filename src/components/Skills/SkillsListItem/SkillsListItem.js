import React from 'react';
import style from './SkillsListItem.module.scss';

const SkillsListItem = ({ name, level, describe, count, handleDelete }) => (
    <div className={style.wrapper}>
        <div className={style.buttonWrapper}>
            <h3 className={style.date}>{name}</h3>
            <button
                value={count}
                onClick={handleDelete}
                className={style.delete}
            />
        </div>
        {/* <h2 className={style.title}>{place}</h2> */}
        <h4 className={style.scienceTitle}>{level}</h4>
        <p className={style.describe}>{describe}</p>
    </div>
);

export default SkillsListItem;
