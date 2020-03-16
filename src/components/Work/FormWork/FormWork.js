import React from 'react';
import PropTypes from 'prop-types';
import InputText from '../../FormElements/InputText/InputText';
import Textarea from '../../FormElements/Textarea/Textarea';
import Select from '../../FormElements/Select/Select';
import style from './FormWork.module.scss';

const FormWork = ({ onChangeHandler, onSubmitHandler }) => (
    <div className={style.wrapper}>
        <form className={style.formWrapper}>
            <h1>Work experience</h1>
            <InputText
                onChangeHandler={onChangeHandler}
                input
                id="place"
                describe="Place*"
            />

            <Select
                idYear="startInYear"
                idMonth="startInMonth"
                title="From"
                onChangeHandler={onChangeHandler}
            />
            <Select
                idYear="endInYear"
                idMonth="endInMonth"
                id="endIn"
                title="To"
                onChangeHandler={onChangeHandler}
            />

            <Textarea
                onChangeHandler={onChangeHandler}
                id="describe"
                describe="Describe"
            />
            <button
                type="submit"
                onClick={onSubmitHandler}
                className={style.button}
            >
                Add
            </button>
        </form>
    </div>
);

FormWork.propTypes = {
    onChangeHandler: PropTypes.func.isRequired,
    onSubmitHandler: PropTypes.func.isRequired,
};
export default FormWork;
