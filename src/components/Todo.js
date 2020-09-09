import React from "react";

function Todo(props) {
    return (
        <div style={{textDecoration: props.done ? "line-through" : "none"}}>
            {props.text}
        </div>
    )
}

export default Todo;