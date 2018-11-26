import React from 'react';
import PropTypes from 'prop-types';

import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline'
import ScheduleIcon from '@material-ui/icons/Schedule'

export default class Todo extends React.Component {

  render () {
    const props = this.props;

    let icon;

    if (props.completed) {
      icon = <CheckCircleOutlineIcon color="primary" fontSize="large" />
    } else {
      icon = <ScheduleIcon fontSize="large" />
    }

    return (
      <ListItem
        button
        component="a"
        onClick={props.onClick}
      >
        <ListItemIcon>
          {icon}          
        </ListItemIcon>
        <ListItemText
          primary={props.text}
        />
      </ListItem>
      // <div>
        
      // <li
      //   onClick={props.onClick}
      //   style={{
      //     textDecoration: props.completed ? 'line-through' : 'none'
      //   }}
      // >
      //   {props.text}
      // </li>

      // </div>
    )
  }
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}
