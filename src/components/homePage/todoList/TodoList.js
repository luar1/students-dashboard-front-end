/** @format */

import React from "react";
import { Card, Typography } from "antd";
import { CheckSquareFilled, CloseSquareFilled } from "@ant-design/icons";
import { FileX } from "styled-icons/bootstrap";

const Todo = ({ todo, index, completeTodo, removeTodo }) => {
    const boxesStyle = {
        marginLeft: 20,
        color: "#0275d8",
        border: "none",
        paddingLeft: 8,
    };

    return (
        <div style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
            <div>
                {todo.text}

                <button
                    //className="todo-buttons"
                    style={boxesStyle}
                    onClick={() => completeTodo(index)}>
                    <CheckSquareFilled />
                </button>
                <button style={boxesStyle} onClick={() => removeTodo(index)}>
                    <CloseSquareFilled />
                </button>
            </div>
        </div>
    );
};

const TodoForm = ({ addTodo }) => {
    const todoInput = {
        borderRadius: 8,
        border: "1px solid #0275d8",
        width: 160,
        marginBottom: 20,
    };
    const [value, setValue] = React.useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue("");
    };

    return (
        <>
            <h4>Add New</h4>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    //className="todo-input"
                    style={todoInput}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </form>
        </>
    );
};

const ToDoList = () => {
    const [todos, setTodos] = React.useState([
        {
            text: "Task 1 ",
            isCompleted: false,
        },
        {
            text: "Task 2 ",
            isCompleted: false,
        },
        {
            text: "Task 3 ",
            isCompleted: false,
        },
        {
            text: "Task 4 ",
            isCompleted: false,
        },
        {
            text: "Task 5 ",
            isCompleted: false,
        },
    ]);

    const addTodo = (text) => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos);
    };

    const completeTodo = (index) => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = true;
        setTodos(newTodos);
    };

    const removeTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    return (
        <>
            <Card
                className="shadow center"
                style={{
                    width: 290,
                    padding: 0,
                    border: "1px solid #D3D3D3",
                    borderRadius: 6,
                    background: "#f1f1f2",
                }}>
                <Typography.Title level={4}>To Do</Typography.Title>
                {todos.map((todo, index) => (
                    <Todo
                        key={index}
                        index={index}
                        todo={todo}
                        completeTodo={completeTodo}
                        removeTodo={removeTodo}
                    />
                ))}
                <br />
                <TodoForm addTodo={addTodo} />
            </Card>
            <br />
        </>
    );
};

export default ToDoList;
