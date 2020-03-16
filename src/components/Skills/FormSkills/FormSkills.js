import React from 'react';
import InputText from '../../FormElements/InputText/InputText';
import Textarea from '../../FormElements/Textarea/Textarea';
import style from './FormSkills.module.scss';

const FormEducation = ({ onChangeHandler, onSubmitHandler }) => (
    <div>
        <h1>Skills</h1>
        <InputText
            id="name"
            describe="Name*"
            onChangeHandler={onChangeHandler}
        />
        <InputText
            id="level"
            describe="Advanced level"
            onChangeHandler={onChangeHandler}
        />
        <Textarea
            id="skillDescribe"
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
