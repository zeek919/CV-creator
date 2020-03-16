import React from 'react';
import SkillsListItem from '../SkillsListItem/SkillsListItem';
import style from './SkillsContainer.module.scss';

const SkillsContainer = ({ skills, handleDelete }) => {
    const skillsList = skills.map(item => (
        <SkillsListItem
            count={item.count}
            name={item.name}
            level={item.level}
            describe={item.describe}
            key={item.count}
            handleDelete={handleDelete}
        />
    ));
    return <div className={style.wrapper}>{skillsList}</div>;
};

export default SkillsContainer;
