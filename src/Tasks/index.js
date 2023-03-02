import React from "react";
import "./style.css";

const Tasks = ({ tasks, hideDoneTasks }) => (
    <ul className="tasks">
        {tasks.map(task => (
            <li
                className={`tasks__item${task.done && hideDoneTasks
                    ? " tasks__item--hidden"
                    : ""}`
                }
            >
                <button className="task__button task__button--done">
                    {task.done ? "✔" : ""}
                </button>
                <span
                    className={`"list__item ${task.done ? "list__item--done" : ""}`}>
                    {task.content}
                </span>
                <button className="task__button task__button--remove">🗑</button>
            </li>
        ))}
    </ul>
);

export default Tasks;
