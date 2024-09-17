import React from "react";
import TaskList from "../_components/TaskList";
import TaskForm from "../_components/TaskForm";
import TaskFormCustom from "../_components/TaskFormCustom";
export const dynamic = 'force-dynamic'
const TasksPage = () => {
  return (
    <div className="max-w-lg">
      <TaskFormCustom />
      <TaskList />
    </div>
  );
};

export default TasksPage;
