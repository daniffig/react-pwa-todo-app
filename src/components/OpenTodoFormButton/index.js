import React from 'react';

import Button from '@material-ui/core/Button';

import AddIcon from '@material-ui/icons/Add';

export default class OpenTodoFormButton extends React.Component {

  render () {
    return (
      <Button
        variant="fab"
        color="primary"
        aria-label="Add To-Do"
        style={{
          bottom: 2,
          right: 2,
          cursor: 'pointer',
          position: 'absolute'
        }}
      >
        <AddIcon />
      </Button>
    )
  }
}