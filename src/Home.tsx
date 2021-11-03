import {Link} from "react-router-dom";
import React from "react";

export default function Home() {
    return <div className="app">
        <h1>Welcome to the home page!</h1>
        <Link to="/todo-list">Todo List</Link>
    </div>;
}
