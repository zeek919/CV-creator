import React from 'react';
import PropTypes from 'prop-types';
import style from '../FormElements.module.scss';

const InputText = ({ id, describe, onChangeHandler }) => (
    <div className={style.field}>
        <input
            id={id}
            type="text"
            placeholder={describe}
            onChange={onChangeHandler}
            maxLength="50"
        />
        <label htmlFor={id}>{describe}</label>
    </div>
);

InputText.propTypes = {
    onChangeHandler: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    describe: PropTypes.string.isRequired,
};

export default InputText;
