import React from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

import AddIcon from '@material-ui/icons/Add';

export default class TodoFormDialog extends React.Component {
  constructor () {
    super();

    this.state = {
      description: '',
      open: false      
    };
  }

  handleChange = e => {
    this.setState({ description: e.target.value });
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  }

  handleClose = () => {
    this.setState({ description: '', open: false });
  }

  handleSubmit = () => {
    const description = this.state.description;

    if (!description.trim()) {
      return;
    }

    this.props.onSubmit(description);

    this.handleClose();
  }

  render () {
    const state = this.state;

    return (
      <div>
        <Button
          onClick={this.handleClickOpen}
          variant="fab"
          color="primary"
          aria-label="Add To-Do"
          style={{
            bottom: 10,
            right: 10,
            cursor: 'pointer',
            position: 'absolute'
          }}
        >
          <AddIcon />
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="todo-form-dialog-title"
        >
          <DialogTitle id="todo-form-dialog-title">To-Do Form</DialogTitle>
          <DialogContent>
            <TextField
              autofocus
              margin="dense"
              label="To-Do description"
              value={state.description}
              onChange={this.handleChange}
              type="text"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="secondary">
              Cancel
            </Button>
            <Button onClick={this.handleSubmit} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}
