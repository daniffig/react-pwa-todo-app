import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SimpleAppBar from './components/SimpleAppBar';
import FilterPanel from './components/FilterPanel';

import AddTodo from './containers/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SimpleAppBar />
        <FilterPanel />
        <VisibleTodoList subheader="Tasks' list" />
        <AddTodo />
      </div>
    );
  }
}

export default App;
