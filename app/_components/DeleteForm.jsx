"use client";
import { deleteTask } from "@/utils/actions";
import React, { useEffect } from "react";
import { useFormStatus, useFormState } from "react-dom";
import toast from "react-hot-toast";

const DeleteBtn = () => {
  const { pending } = useFormStatus();

  return (
    <button type="submit" className="btn btn-error btn-sm" disabled={pending}>
      {pending ? "Deleting..." : "Delete"}
    </button>
  );
};

const initialState = { message: null };

const DeleteForm = ({ id }) => {
 /*  const [state, formAction] = useFormState(deleteTask, initialState);

  useEffect(() => {
    if(state.message === 'error') {
      toast.error('Something Went Wrong')
    }
    if(state.message === 'success') {
      toast.success('Deleted Successfully')
    }
  }, [state]); */
  return (
    <form action={deleteTask}>
      <input type="hidden" name="id" value={id} />
      <DeleteBtn />
    </form>
  );
};

export default DeleteForm;
