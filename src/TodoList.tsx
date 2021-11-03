import { useState, FormEvent, useEffect } from 'react';

import {fetchFromFarDistantDatabase, saveToFarDistantDatabase} from './AppEffects';
import Todo from './Todo';

interface ITodo {
    description: string;
    completed: boolean;
};
function TodoList() {

    const [todos, setTodos] = useState<ITodo[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        console.log('start fetch');
        fetchFromFarDistantDatabase()
            .then((data: any) => {
                setTodos((currentTodos) => [...currentTodos, ...data]);
                setIsLoading(false);
                console.log('fetchFromFarDistantDatabase', {data});
            });
    }, []);

    useEffect(() => {
        if (isLoading) {
            return;
        }
        console.log('saving database', todos);
        saveToFarDistantDatabase(todos);
    }, [todos, isLoading]);

    const emptyInput = input.length === 0;

    function onSubmit(e: FormEvent) {

        e.preventDefault();

        if (emptyInput) {
            return;
        }

        const newTodos = [...todos, {
            description: input,
            completed: false
        }];
        setTodos(newTodos);
        setInput('');
    }

    function toggleTodo(i: number) {

        const newTodos = [...todos];
        newTodos[i] = {
            ...newTodos[i],
            completed: !newTodos[i].completed
        };
        setTodos(newTodos);
    }

    function clearCompletedTodos() {

        const newTodos = todos.filter(todo => !todo.completed);
        setTodos(newTodos);
    }

    console.log('Re-rendering app');

    return (
        <div className="app">
            <form onSubmit={onSubmit}>
                <input type="text" value={input} onChange={e => setInput(e.target.value)} />
                <button className="btn" type="submit" disabled={emptyInput}>Add Todo</button>
            </form>
            {isLoading && <p className="mt-8 text-center"><strong>Loading...</strong></p>}
            <ul className="mt-8 list">
                {todos.map((item, i) => <Todo key={i} text={item.description} completed={item.completed} onClick={() => toggleTodo(i)} />)}
            </ul>
            {!isLoading && todos.length === 0 && <p className="mt-8 text-center"><strong>Yay! You have no todos.</strong></p>}
            <p className="text-center mt-8">
                <button className="btn" onClick={clearCompletedTodos} type="button" disabled={!todos.some(t => t.completed)}>Clear Completed Todos</button>
            </p>
        </div>
    );
}

export default TodoList;
