import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

import { FormControl, Input, InputLabel } from '@material-ui/core';

class AddTodo extends React.Component {
  constructor () {
    super();

    this.state = {
      description: ''
    }
  }

  handleChange = e => {
    this.setState({ description: e.target.value });
  }

  render () { 
    const props = this.props;
    const state = this.state;

    let input;

    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            console.log(state.description);
            if (!state.description.trim()) {
              return
            }
            props.dispatch(addTodo(state.description));
            this.setState({ description: '' });
          }}
        >
          <FormControl>
            <InputLabel htmlFor="todo-description">To-Do description</InputLabel>
            <Input id="todo-description" value={state.description} onChange={this.handleChange} />
          </FormControl>
          {/* <input ref={node => (input = node)} /> */}
          <button type="submit">Add Todo</button>
        </form>
      </div>
    )
  }
}

export default connect()(AddTodo)
