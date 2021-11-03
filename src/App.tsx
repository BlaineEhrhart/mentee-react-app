import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./Home";
import TodoList from "./TodoList";
import './App.css';

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/todo-list">
            <TodoList />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
