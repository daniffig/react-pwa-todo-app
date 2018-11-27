import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import SimpleAppBar from './components/SimpleAppBar';
import FilterPanel from './components/FilterPanel';

import VisibleTodoList from './containers/VisibleTodoList';
import TodoFormDialogContainer from './containers/TodoFormDialogContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SimpleAppBar title="React PWA To-Do App" />
        <FilterPanel />
        <VisibleTodoList />
        <TodoFormDialogContainer />
      </div>
    );
  }
}

export default App;
