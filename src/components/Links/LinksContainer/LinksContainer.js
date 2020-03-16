import React from 'react';
import LinksListItem from '../LinksListItem/LinksListItem';
import style from './LinksContainer.module.scss';

const LinkContainer = ({ links, handleDelete }) => {
    const linksList = links.map(item => (
        <LinksListItem
            count={item.count}
            title={item.title}
            url={item.url}
            key={item.count}
            handleDelete={handleDelete}
        />
    ));
    return <div className={style.wrapper}>{linksList}</div>;
};

export default LinkContainer;
