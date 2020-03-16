import React from 'react';
import EducationListItem from '../EducationListItem/EducationListItem';
import style from './EducationContainer.module.scss';

const EducationContainer = ({ education, handleDelete }) => {
    const educationList = education.map(item => (
        <EducationListItem
            count={item.count}
            place={item.place}
            startInYear={item.startInYear}
            startInMonth={item.startInMonth}
            endInYear={item.endInYear}
            endInMonth={item.endInMonth}
            title={item.title}
            describe={item.describe}
            key={item.count}
            handleDelete={handleDelete}
        />
    ));
    return <div className={style.wrapper}>{educationList}</div>;
};

export default EducationContainer;
