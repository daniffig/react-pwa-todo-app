import React from 'react';
import FilterLink from '../../containers/FilterLink';
import { VisibilityFilters } from '../../actions';

import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

export default class FilterPanel extends React.Component {

  render () {
    return (
      <ToggleButtonGroup exclusive>
        <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
      </ToggleButtonGroup>
    )
  }
}
