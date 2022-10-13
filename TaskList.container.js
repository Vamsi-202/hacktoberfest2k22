/**
Author - Brijesh Pandey
Git - https://bitbucket.org/__brijesh/
**/

import React, {useState, useEffect} from "react";

import {
  getTasks,
  markDone,
  deleteTask
} from "api";

import {
  handleApiError,
  getAuthKey,
  triggerToast
} from "utils";

import TaskList from "./TaskList";

const TaskListContainer = ({
  showForm
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [tasksList, setTasksList] = useState([]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isMarkingSuccess, setIsMarkingSuccess] = useState(false);

  useEffect(() => {
    getTaskList();
  }, [showForm])

  const getTaskList = async () => {
    const taskList = [];
    setIsLoading(true);
    try {
      const res = await getTasks(getAuthKey());
      const {data} = res.data;
      data.map(task => taskList.push(task))
      setTasksList(taskList);
    } catch (error) {
      handleApiError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <TaskList
      isLoading={isLoading}
      tasksList={tasksList}
      isDeleting={isDeleting}
      setIsDeleting={setIsDeleting}
      isMarkingSuccess={isMarkingSuccess}
      setIsMarkingSuccess={setIsMarkingSuccess}
      getTaskList={getTaskList}
    />
  )
}

export default TaskListContainer;
