import axios from "axios";
import { useState } from "react";
import { Table, Tbody, Tr, Td } from "@chakra-ui/react";
import styles from "../styles/todo.module.css";
import { BsPencilFill } from "react-icons/bs";

function TodoItem({ todo, editTodos }) {
  const [status, setStatus] = useState(todo.completed);

  console.log(status);

  async function handleChange(e) {
    setStatus(e.target.checked);

    const todoStatus = {
      completed: e.target.checked,
    };
    await axios.put(
      `http://localhost:5000/tasks/status/${todo.id}`,
      todoStatus
    );
  }

  return (
    <div>
      <Table variant="simple" className={styles.table}>
        <Tbody>
          <Tr className={styles.item}>
            <Td className={styles.detail}>{todo.title}</Td>
            <Td className={styles.detail}>{todo.description}</Td>
            <Td className={styles.detail}>
              <label style={{ marginLeft: "20px" }}>
                <input
                  type="checkbox"
                  checked={status}
                  onChange={handleChange}
                />
              </label>
            </Td>
            <Td className={styles.detail}>
              {" "}
              <button
                style={{ marginLeft: "20px" }}
                onClick={() => editTodos(todo)}
              >
                <BsPencilFill></BsPencilFill>
              </button>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </div>
  );
}

export default TodoItem;
