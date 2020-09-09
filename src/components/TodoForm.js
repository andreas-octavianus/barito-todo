import React from "react";

function TodoForm() {
    return (
        <form>
            <table>
                <tr>
                    <td><label>Name: </label></td>
                    <td><input/></td>
                </tr>
                <tr>
                    <td><label>Description: </label></td>
                    <td><textarea/></td>
                </tr>
            </table>
            <button>Done</button>
        </form>
    );
}

export default TodoForm;