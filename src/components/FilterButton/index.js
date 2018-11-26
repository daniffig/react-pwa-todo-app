import React from 'react';

import Link from '../Link';

export default class FilterButton extends React.Component {

  render () {
    const props = this.props;

    return (
      <Link
        active={false}
      >
        {props.children}
      </Link>
    )
  }

}
