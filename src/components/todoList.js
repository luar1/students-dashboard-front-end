import React from "react";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";

const Todo = ({ todo, index, completeTodo, removeTodo }) => {
  return (
    <div style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
      <div>
        {todo.text}

        <button
          className="todo-buttons"
          style={{ marginLeft: 60 }}
          onClick={() => completeTodo(index)}
        >
          <CheckOutlined />
        </button>
        <button className="todo-buttons" onClick={() => removeTodo(index)}>
          <CloseOutlined />
        </button>
      </div>
    </div>
  );
};

const TodoForm = ({ addTodo }) => {
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
          className="todo-input"
          //placeholder="Add new...(Press Enter)" 
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
      <div className="todo-list">
        <h2>To Do</h2>

        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <br></br>
        <TodoForm addTodo={addTodo} />
      </div>
    </>
  );
};

export default ToDoList;
