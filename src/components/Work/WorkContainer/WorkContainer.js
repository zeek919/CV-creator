import React from 'react';
import PropTypes from 'prop-types';
import WorkListItem from '../WorkListItem/WorkListItem';
import style from './WorkContainer.module.scss';

const WorkContainer = ({ handleDelete, jobs }) => {
    const jobList = jobs.map(item => (
        <WorkListItem
            place={item.place}
            startInYear={item.startInYear}
            startInMonth={item.startInMonth}
            endInYear={item.endInYear}
            endInMonth={item.endInMonth}
            describe={item.describe}
            count={item.count}
            key={item.count}
            handleDelete={handleDelete}
        />
    ));
    return <div className={style.wrapper}>{jobList}</div>;
};

WorkContainer.propTypes = {
    handleDelete: PropTypes.func.isRequired,
    jobs: PropTypes.array.isRequired,
};

WorkContainer.defaultProps = {
    jobs: {},
};

export default WorkContainer;
