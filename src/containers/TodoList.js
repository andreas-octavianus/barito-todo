import React from "react";
import Todo from "../components/Todo";

function TodoList(props) {
    return (
        <div>
            {
                props.todos.map(item => <Todo text={item.text} done={item.done}/>)
            }
        </div>
    );
}

export default TodoList;