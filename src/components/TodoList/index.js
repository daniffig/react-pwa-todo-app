import React from 'react';
import PropTypes from 'prop-types';
import Todo from '../Todo';

import { List, ListSubheader } from '@material-ui/core';

export default class TodoList extends React.Component {

  render () {
    const props = this.props;

    return (
      <List
        component="nav"
        subheader={<ListSubheader component="div">{props.subheader}</ListSubheader>}
      >
        {props.todos.map(todo => (
          <Todo
            key={todo.id}
            {...todo}
            onClick={() => props.toggleTodo(todo.id)} />
        ))}
      </List>
    )
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  subheader: PropTypes.string.isRequired,
  toggleTodo: PropTypes.func.isRequired
}
