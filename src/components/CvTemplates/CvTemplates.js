import React from 'react';
import PropTypes from 'prop-types';
import dataContext from '../../context/dataContext';
import style from './CvTemplates.module.scss';

const CvTemplate = ({ colored }) => {
    const templateWrapper = (
        <dataContext.Consumer>
            {item =>
                item.cvLayout.map(e => (
                    <img
                        className={style.card}
                        src={e.url}
                        alt={e.alt}
                        key={e.alt}
                    />
                ))
            }
        </dataContext.Consumer>
    );

    return (
        <div className={colored ? style.wrapper : style.wrapperBlank}>
            {templateWrapper}
        </div>
    );
};

CvTemplate.propTypes = {
    colored: PropTypes.bool,
};

CvTemplate.defaultProps = {
    colored: false,
};

export default CvTemplate;
