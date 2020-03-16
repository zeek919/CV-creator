import React from 'react';
import InputText from '../../FormElements/InputText/InputText';
import Textarea from '../../FormElements/Textarea/Textarea';
import Select from '../../FormElements/Select/Select';
import style from './FormEducation.module.scss';

const FormEducation = ({ onChangeHandler, onSubmitHandler }) => (
    <div>
        <h1>Education</h1>
        <InputText
            id="educationPlace"
            describe="Place*"
            onChangeHandler={onChangeHandler}
        />
        <Select
            idYear="yearFrom"
            idMonth="monthFrom"
            title="From"
            onChangeHandler={onChangeHandler}
        />
        <Select
            idYear="yearTo"
            idMonth="monthTo"
            title="To"
            onChangeHandler={onChangeHandler}
        />
        <InputText
            id="educationTitle"
            describe="Science title"
            onChangeHandler={onChangeHandler}
        />
        <Textarea
            id="educationDescribe"
            describe="Describe"
            onChangeHandler={onChangeHandler}
        />
        <button
            type="submit"
            onClick={onSubmitHandler}
            className={style.button}
        >
            Add
        </button>
    </div>
);
export default FormEducation;
