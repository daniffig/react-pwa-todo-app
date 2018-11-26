import React from 'react';
import PropTypes from 'prop-types';

import ToggleButton from '@material-ui/lab/ToggleButton';

export default class Link extends React.Component {

  render () {
    const props = this.props;
    
    return (
      <ToggleButton
        onClick={props.onClick}
        disabled={props.active}
      >
        {props.children}
      </ToggleButton>
    )
  }
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}
