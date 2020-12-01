/** @format */

import React, { useState, useEffect } from "react";
import { Card, Typography, Checkbox } from "antd";
import "./styles.css";
import { CheckSquareFilled, CloseSquareFilled } from "@ant-design/icons";

const Todo = ({ todo, completeTodo }) => {
    return (
        <div style={{ textDecoration: todo.Status ? "line-through" : "" }}>
            <div>
                <Checkbox
                    checked={todo.fields.Status ? true : null}
                    onChange={() => completeTodo(todo.id, !todo.fields.Status)}
                />
                <span style={{ paddingLeft: 10 }}>{todo.fields.ToDo}</span>
            </div>
        </div>
    );
};

const ToDoList = () => {
    const getToDoData = async () => {
        const response = await fetch(
            process.env.REACT_APP_GET_TODO_LIST
        );
        const todoData = await response.json();
        return todoData;
    };
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        getToDoData().then((data) => setTodos(data.records));
    }, []);

    const completeTodo = (id, status) => {
        fetch(process.env.REACT_APP_UPDATE_TODO_LIST, {
            body: JSON.stringify({
                records: [
                    {
                        id: id,
                        fields: {
                            Status: status,
                        },
                        method: "PATCH",
                    })
                .then(() => {
                    getToDoData().then((data) => setTodos(data.records));
                })
                .catch((e) => {
                    console.log(e);
                    alert("Unable to update to do ");
                });
        };

        return (
            <>
                <>
                    <Card className="card-todo white-gray shadow center">
                        <Typography.Title level={4}>To Do</Typography.Title>
                        {todos &&
                            todos.map((todo, index) => (
                                <Todo
                                    key={index}
                                    id={todo.id}
                                    todo={todo}
                                    completeTodo={completeTodo}
                                />
                            ))}
                    </Card>
                </>
            </>
        );
    };
    export default ToDoList;
