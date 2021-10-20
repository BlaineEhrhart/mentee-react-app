interface ITodoProps {
    text: string,
    completed: boolean,
    onClick: () => void
}

export default function Todo(props: ITodoProps) {
    console.log('Re-rendering todo: ' + props.text);

    return <li className="todo" onClick={() => { props.onClick() }}
               style={{textDecoration: (props.completed ? 'line-through' : 'none')}}>
        <input type="checkbox" checked={props.completed} />
        {props.text}
    </li>
}
