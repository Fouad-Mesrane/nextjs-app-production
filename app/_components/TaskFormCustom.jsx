"use client";
import { createTaskCustom} from "@/utils/actions";
import { useEffect } from "react";
import { useFormStatus, useFormState } from "react-dom";
import toast from "react-hot-toast";


//btn component
const SubmitBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="btn btn-primary join-item "
      disabled={pending}
    >
      {pending ? "please wait" : "create task"}
    </button>
  );
};


const initialState = {
    message: null
}

const TaskFormCustom =  () => {
   const [state, formAction] =  useFormState(createTaskCustom, initialState);

useEffect(()=> {
    if(state.message === 'error') {
        toast.error('there was an error')
        return
    }

    if(state.message === 'success') {
        toast.success('Task Created')
    }
},[state])


  return (
    <form className="form" action={formAction}>
        {/* {state.message ? <p className="mb-2">{state.message}</p> : null} */}
      <div className="join w-full ">
        <input
          type="text"
          name="content"
          id="task"
          placeholder="Type here"
          className=" input input-bordered join-item w-full"
          required
      
        />
        <SubmitBtn/>
      </div>
    </form>
  );
};

export default TaskFormCustom;
