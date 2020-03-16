import React from 'react';
import InputText from '../../FormElements/InputText/InputText';
import style from './FormLinks.module.scss';

const FormLinks = ({ onChangeHandler, onSubmitHandler }) => (
    <div>
        <h1>Links</h1>
        <InputText
            id="linksTitle"
            describe="Title"
            onChangeHandler={onChangeHandler}
        />
        <InputText id="url" describe="URL" onChangeHandler={onChangeHandler} />
        <button
            type="submit"
            onClick={onSubmitHandler}
            className={style.button}
        >
            Add
        </button>
    </div>
);
export default FormLinks;
