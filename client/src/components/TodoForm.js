import React, { useEffect, useState } from "react";
import axios from "axios";
import TodoItem from "./TodoItem";
import styles from "../styles/todo.module.css";
import { Table, Thead, Tr, Th } from "@chakra-ui/react";

function TodoForm() {
  const link = "http://localhost:5000/tasks";
  const [todos, setTodos] = useState([]);
  const [todoTitle, setTodoTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editTodoData, setEditTodoData] = useState(null);

  useEffect(() => {
    getTodos();
  }, []);

  useEffect(() => {
    if (editTodoData) {
      setTodoTitle(editTodoData.title ? editTodoData.title : "");
      setDescription(editTodoData.description ? editTodoData.description : "");
    }
  }, [editTodoData]);

  async function getTodos() {
    const res = await axios.get(link);
    setTodos(res.data);
  }

  const editTodos = (todosData) => {
    setEditTodoData(todosData);
  };

  async function addTodo(e) {
    e.preventDefault();

    const todoData = {
      title: todoTitle ? todoTitle : undefined,
      description: description ? description : undefined,
    };

    if (!editTodoData) {
      await axios.post(link, todoData);
    } else {
      await axios.put(
        `http://localhost:5000/tasks/${editTodoData.id}`,
        todoData
      );
      setEditTodoData(null);
    }

    setTodoTitle("");
    setDescription("");

    getTodos();
  }

  const renderTodos = () => {
    return todos.map((todo, i) => {
      return <TodoItem key={i} todo={todo} editTodos={editTodos} />;
    });
  };

  return (
    <div>
      <h1>To Do List</h1>
      <div>
        <form onSubmit={addTodo}>
          <div>
            <input
              required
              type="text"
              id="title"
              value={todoTitle}
              onChange={(e) => setTodoTitle(e.target.value)}
              className={styles.input}
              placeholder="TITLE"
            />
          </div>
          <div>
            <input
              className={styles.input}
              required
              type="text"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="DESCRIPTION"
            />
          </div>

          <button className={styles.button}>Add Item</button>
        </form>
      </div>
      <Table>
        <Thead>
          <Tr>
            <Th className={styles.firstColumnName}>Title</Th>
            <Th className={styles.secondColumnName}>Description</Th>
            <Th className={styles.thirdColumnName}>Completed</Th>
            <Th className={styles.fourthColumnName}>Edit</Th>
          </Tr>
        </Thead>
      </Table>
      {renderTodos()}
    </div>
  );
}
export default TodoForm;
