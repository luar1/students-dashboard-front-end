import React, { useState, useEffect } from "react";
import { Card, Typography } from "antd";
import { CheckSquareFilled, CloseSquareFilled } from "@ant-design/icons";

const Todo = ({ todo, id, completeTodo, removeTodo }) => {
  const boxesStyle = {
    marginRight: 5,
    color: "#0275D8",
    border: "none",
    paddingLeft: 8,
  };
  return (
    <div style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
      <div>
        <button
          //className="todo-buttons"
          //
          style={boxesStyle}
          onClick={() => completeTodo(todo.id)}
        >
          <CheckSquareFilled />
        </button>
        {todo.fields.ToDo}
        {/* <button style={boxesStyle} onClick={() => removeTodo(todo.id)}>
          <CloseSquareFilled />
        </button> */}
      </div>
    </div>
  );
};
// const TodoForm = ({ addTodo }) => {
//   const todoInput = {
//     borderRadius: 10,
//     border: "1px solid #0275D8",
//     width: 160,
//     marginBottom: 20
//   };
//   const [value, setValue] = useState("");
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!value) return;
//     addTodo(value);
//     setValue("");
//   };
//   return (
//     <>
//       <h4>Add New</h4>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           //className="todo-input"
//           style={todoInput}
//           value={value}
//           onChange={(e) => setValue(e.target.value)}
//         />
//       </form>
//     </>
//   );
// };
const ToDoList = () => {
  const getToDoData = async () => {
    const response = await fetch(
      "https://api.airtable.com/v0/appm5NPkqO7P8ePUK/List?api_key=keyclOytaXo7NHQ8M"
    );
    const todoData = await response.json();
    return todoData;
  };
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    getToDoData().then((data) => setTodos(data.records));
  }, []);
  // const addTodo = (text) => {
  //   //this cannot work now that we are connected to airtable
  //   //const newTodos = [...todos, { text }];
  //   //setTodos(newTodos);
  // };
  const completeTodo = (id) => {
    //const newTodos = [...todos];
    //newTodos[id].isCompleted = true;
    //setTodos(newTodos);
  };
  // const removeTodo = (id) => {
  //   setTodos(todos.filter((item) => item.id !== id));
  //   //you also need to delete the item from airtable
  // };
  return (
    <>
      {/* <Row>
        <Col span={4}></Col>
        <Col justify="center" xs={24} sm={24} md={24} lg={10} xl={8} xxl={6}> */}
      {/* <div
            style={{
              padding: 20,
              border: "1 solid #D3D3D3",
              borderRadius: 10,
              width: 250,
              background: "#F1F1F2"
              //boxShadow: 0 3 "#C8C8C8",
            }}
          > */}
      <Card
        className="shadow center"
        style={{
          width: 295,
          padding: 0,
          border: "1px solid #D3D3D3",
          borderRadius: 6,
          background: "#f1f1f2",
        }}
      >
        {/* <h2 style={{ marginTop: 20 }}>To Do</h2> */}
        <Typography.Title level={4}>To Do</Typography.Title>
        {todos &&
          todos.map((todo, index) => (
            <Todo
              key={index}
              id={todo.id}
              todo={todo}
              //completeTodo={completeTodo}
              //removeTodo={removeTodo}
            />
          ))}
        <br></br>
        {/* <TodoForm addTodo={addTodo} /> */}
      </Card>
      {/* </Col>
        <Col span={4}></Col>
      </Row> */}
    </>
  );
};
export default ToDoList;


