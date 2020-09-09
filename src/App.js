import React from 'react';
import './App.css';
import TodoList from "./containers/TodoList";
import TodoForm from "./components/TodoForm";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <button>+</button>
                <TodoList todos={[{text: "Buy milk", done: true}, {text: "Pick up dry cleaning"}]}/>
                <TodoForm/>
            </header>
        </div>
    );
}

export default App;
