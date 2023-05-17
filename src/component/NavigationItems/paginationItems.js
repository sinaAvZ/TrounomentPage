import React from 'react';
import classes from './NavigationItem.Module.css';
import Page from './pagination/paginationItem';
const navigationItems = (props) => {
    return (<ul className={classes.NavigationItems}>
        {[...Array(props.number)].map((e, i) => {
            return <Page
                key={i}
                link={'/tournoment/' +( i+1)}>{i+1}</Page>
        })}


    </ul>)
};

export default navigationItems;