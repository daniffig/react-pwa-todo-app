import React from 'react';
import PropTypes from 'prop-types';

import List from '@material-ui/core/List';

import Todo from '../Todo';

export default class TodoList extends React.Component {

  render () {
    const props = this.props;

    return (
      <List
        component="nav"
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
  toggleTodo: PropTypes.func.isRequired
}
