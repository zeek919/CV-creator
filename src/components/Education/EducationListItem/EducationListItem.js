import React from 'react';
import style from './EducationListItem.module.scss';

const EducationListItem = ({
    place,
    startInYear,
    startInMonth,
    endInYear,
    endInMonth,
    title,
    describe,
    count,
    handleDelete,
}) => (
    <div className={style.wrapper}>
        <div className={style.buttonWrapper}>
            <h3 className={style.date}>
                {startInMonth}
                {startInYear} - {endInMonth}
                {endInYear}
            </h3>
            <button
                value={count}
                onClick={handleDelete}
                className={style.delete}
            />
        </div>
        <h2 className={style.title}>{place}</h2>
        <h4 className={style.scienceTitle}>{title}</h4>
        <p className={style.describe}>{describe}</p>
    </div>
);

export default EducationListItem;
