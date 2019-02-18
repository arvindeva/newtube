import React from 'react';
import { Icon, Menu } from 'semantic-ui-react';
import './SideBarItem.scss';

const SideBarItem = props => {
  // pass a string for scss styling
  const highlight = props.highlight ? 'highlight-item' : null;

  return (
    <Menu.Item className={["sidebar-item", highlight].join (' ')}>
      <div className="sidebar-item-alignment-container">
        <span><Icon size="large" name={props.icon} /></span>
        <span>{props.label}</span>
      </div>
    </Menu.Item>
  )
}

export default SideBarItem;