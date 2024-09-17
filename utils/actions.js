"use server";

import { redirect } from "next/navigation";
import prisma from "./db";
import { revalidatePath } from "next/cache";
import { z } from "zod";
//actions
// get all the tasks from prisma
export const getAllTasks = async () => {
  return await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

// getSingle task
export const getSingleTask = async (id) => {
  return await prisma.task.findUnique({
    where: {
      id: id,
    },
  });
};

// create task
export const createTask = async (formData) => {
  const content = formData.get("content");
  await prisma.task.create({
    data: {
      content,
    },
  });
  revalidatePath("/tasks");
};
export const createTaskCustom = async (prevState, formData) => {
  const Task = z.object({
    content: z.string().min(5),
  });
  const content = formData.get("content");
  try {
    Task.parse({ content });
    await prisma.task.create({
      data: {
        content,
      },
    });
    revalidatePath("/tasks");
    return { message: "success" };
  } catch (e) {
    console.log(e);
    return { message: "error" };
  }
};

//delete task

export const deleteTask = async (formData) => {
  const id = formData.get("id");
    
  try {
    await prisma.task.delete({
      where: {
       id
      },
    });
    revalidatePath("/tasks");
    return { message: "success" };
  } catch (e) {
    return { message: "error" };
  }
};

// update task

export const updateTask = async (formData) => {
  const content = formData.get("content");
  const id = formData.get("id");
 
  const completed = formData.get("completed");
  await prisma.task.update({
    where: {
      id,
    },
    data: {
      content,
      completed: completed === "on" ? true : false,
    },
  });
  redirect("/tasks");
};
