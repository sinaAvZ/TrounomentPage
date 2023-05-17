import React from 'react';
import { NavLink } from 'react-router-dom'
import Classes from './NavigationItem.Module.css';

const navigationItem = (props) => {

return (<li className={Classes.NavigationItem}>
        <NavLink
            exact={props.exact}
            to={props.link}
            activeClassName={Classes.active} 
            onClick={props.personClick}
            >{props.children}</NavLink>
    </li>)

}


export default navigationItem;