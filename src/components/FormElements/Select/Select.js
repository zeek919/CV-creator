import React from 'react';
import style from '../FormElements.module.scss';

const Select = ({ idYear, idMonth, title, onChangeHandler }) => {
    const today = new Date();
    const todayYear = today.getFullYear();
    const minYear = 1970;
    const wholeYearArr = [];
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    for (let i = minYear; i < todayYear; i++) {
        wholeYearArr.push(
            <option key={i} className={style.option}>
                {i}
            </option>,
        );
    }

    const yearsMap = wholeYearArr.map(item => item);
    const monthsMap = months.map(item => (
        <option key={item} className={style.option}>
            {item}
        </option>
    ));

    return (
        <div className={style.dateWrapper}>
            <h3>{title}</h3>
            <div className={style.inside}>
                <select
                    id={idYear}
                    name="year"
                    key={idYear}
                    onChange={onChangeHandler}
                >
                    {monthsMap}
                </select>
                <select
                    id={idMonth}
                    name="month"
                    key={idMonth}
                    onChange={onChangeHandler}
                >
                    {yearsMap}
                </select>
            </div>
        </div>
    );
};

export default Select;
