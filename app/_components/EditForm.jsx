'use client'
import { updateTask } from "@/utils/actions";


const EditForm = ({ task }) => {
  const { id, completed, content } = task;

  

  return (
    <form
      className="max-w-sm p-12 border border-base-300 rounded-lg "
      action={updateTask}
    >
      <input type="hidden" name="id" value={id} />
      <input
        type="text"
        name="content"
        id="task"
        className=" input input-bordered w-full"
       defaultValue={content}
        required
      />
      {/* completed */}
      <div className="form-control mb-4">
        <label className="label cursor-pointer" htmlFor="completed">
          <span className="label-text">completed</span>
        </label>
        <input
          type="checkbox"
          defaultChecked={completed}
          name="completed"
          id="completed"
          className="checkbox checkbox-primary checkbox-sm"
        />
      </div>
      <button type="submit" className="btn btn-primary btn-sm ">
        Update
      </button>
    </form>
  );
};

export default EditForm;

/* 
"use client"; // Ensure this is the very first line

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router"; // Import useRouter for navigation
import { getSingleTask, updateTask } from "@/utils/actions";

const EditForm = ({ id }) => {
  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(false); // Manage loading state
  const router = useRouter(); // Initialize router

  // Fetch the task details when the component mounts
  useEffect(() => {
    const fetchTask = async () => {
      const taskData = await getSingleTask(id);
      setTask(taskData);
    };

    fetchTask();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    setLoading(true); // Set loading state
    const formData = new FormData(e.target); // Create FormData from the form
    formData.append('id', id); // Append task ID

    await updateTask(formData); // Update the task
    setLoading(false); // Reset loading state

    router.push('/tasks'); // Navigate back to /tasks
  };

  // Show loading state while fetching task
  if (!task) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="join w-full">
          <input
            type="text"
            name="content"
            id="task"
            placeholder="Type here"
            className="input input-bordered join-item w-full"
            defaultValue={task.content} // Pre-fill input with current task content
            required
          />
          <button type="submit" className="btn btn-primary join-item" disabled={loading}>
            {loading ? "Updating..." : "Update"}
          </button>
        </div>
      </form>
      <div className="flex justify-between items-center px-6 py-6 mb-4 border border-base-300 rounded-lg shadow-lg">
        <h2 className={`text-lg capitalize ${task.completed ? "line-through" : ""}`}>
          {task.content}
        </h2>
      </div>
    </div>
  );
};

export default EditForm;
 */
