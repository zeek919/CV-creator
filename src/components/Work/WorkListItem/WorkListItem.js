import React from 'react';
import style from './WorkListItem.module.scss';

const WorkListItem = ({
    place,
    startInYear,
    startInMonth,
    endInYear,
    endInMonth,
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
        <p className={style.describe}>{describe}</p>
    </div>
);

export default WorkListItem;
