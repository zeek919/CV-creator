import React from "react";
import PropTypes from 'prop-types';
import style from '../FormElements.module.scss';

const Textarea = ({
    id,
    describe,
    onChangeHandler,
}) => <div className={style.field}>
            <textarea
                id={id}
                placeholder={describe}
                onChange={onChangeHandler}
             />
            <label htmlFor={id}>{describe}</label>
        </div>

        Textarea.propTypes = {
            onChangeHandler: PropTypes.func.isRequired,
            id: PropTypes.string.isRequired,
            describe: PropTypes.string.isRequired,
        }

        export default Textarea;