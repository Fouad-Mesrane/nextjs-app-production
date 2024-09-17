import EditForm from "@/app/_components/EditForm";
import { getSingleTask } from "@/utils/actions";
import Link from "next/link";
import React from "react";

const singleTask = async ({ params }) => {
  const task = await getSingleTask(params.id);
  return (
    <>
    <div className="max-w-lg mb-12">
      <Link className="btn btn-accent mb-4" href={"/tasks"}>
        Back to tasks
      </Link>
    </div>
      <EditForm task={task} />
    </>
  );
};

export default singleTask;
