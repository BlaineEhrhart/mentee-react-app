import React, { useState } from 'react';

function App() {
    const [todo, setTodo] = useState('');
    const [input, setInput] = useState('');

    function addTodo() {
        setTodo(input);
    }

    return (
        <div className="App">
            <header className="App-header">
                <p>todo</p>
                <ul>
                    <li>Add input box</li>
                    <li>Button</li>
                    <li>Action for button</li>
                    <li>store first item state</li>
                </ul>

                <input type="text" value={input} onChange={e => setInput(e.target.value)}  />
                <button type="button" onClick={addTodo}>Add Todo</button>
                <ul>
                    <li>{todo}</li>
                </ul>
            </header>
        </div>
    );
}

export default App;
