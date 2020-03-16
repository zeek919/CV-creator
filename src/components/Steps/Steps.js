import React from 'react';
import PropTypes from 'prop-types';
import style from './Steps.module.scss';

const Steps = ({ current }) => {
    const stepNumbers = [1, 2, 3, 4, 5, 6];
    const steps = stepNumbers.map(item => {
        const styleType =
            (item < current && style.previous) ||
            (item === current && style.current) ||
            (item > current && style.next);
        return (
            <div className={styleType} key={item}>
                {item}
            </div>
        );
    });

    return <div className={style.wrapper}>{steps}</div>;
};

Steps.propTypes = {
    current: PropTypes.number.isRequired
}

export default Steps;
