import { createTask } from "@/utils/actions";



const TaskForm = () => {
  return (
    <form className="form" action={createTask}>
      <div className="join w-full ">
        <input
          type="text"
          name="content"
          id="task"
          placeholder="Type here"
          className=" input input-bordered join-item w-full"
          required
        />
        <button type="submit" className="btn btn-primary join-item ">
          Create
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
