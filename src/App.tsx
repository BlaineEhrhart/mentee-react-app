import { useState } from 'react';

function App() {

    const todoArray: { description: string, checked: boolean }[] = [];
    const [todo, setTodo] = useState(todoArray);
    const [input, setInput] = useState('');
    const emptyInput = input.length === 0;

    function addTodo() {

        const newTodoState = todo;
        newTodoState.push({
            description: input,
            checked: false
        });
        setTodo([...newTodoState]);
        setInput('');
    }

    function checkForEnter(e: any) {

        if (emptyInput) {
            return;
        }

        if (e.keyCode === 13) {
            addTodo();
        }
    }

    function toggleListItem(i: any) {

        todo[i].checked = !todo[i].checked;
        setTodo([...todo]);
    }

    // todo: JSX.Element[] seems a little jank
    const todoList: JSX.Element[] = [];
    todo.forEach((item, i) => {
        todoList.push(<li key={i}
                          onClick={e => { toggleListItem(i) }}
                          style={{textDecoration: (item.checked ? 'line-through' : 'none')}}>{item.description}</li>);
    });

    return (
        <div className="App">
            <header className="App-header">
                <input type="text" value={input} onChange={e => setInput(e.target.value)} onKeyUp={checkForEnter} />
                <button type="button" onClick={addTodo} disabled={emptyInput}>Add Todo</button>
                <ul>
                    {todoList}
                </ul>
            </header>
        </div>
    );
}

export default App;
