import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import style from './ButtonLink.module.scss';

const ButtonLink = ({ path, children }) => (
    <Link to={path} className={style.button}>
        {children}
    </Link>
);

ButtonLink.defaultProps = {
    path: '/',
    children: 'Next',
};

ButtonLink.propTypes = {
    path: PropTypes.string,
    children: PropTypes.string
}

export default ButtonLink;
