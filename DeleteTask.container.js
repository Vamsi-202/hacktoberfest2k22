/**
Author - Brijesh Pandey
Git - https://bitbucket.org/__brijesh/
**/


import React, {useState} from "react";

import {deleteTask} from "api";

import DeleteTask from "./DeleteTask";

import {
  handleApiError,
  getAuthKey,
  triggerToast
} from "utils";

function DeleteTaskContainer({
  id,
  setIsDeleting,
  getTaskList
}) {
  const [showModal, setShowModal] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const deleteTaskHandler = async (id) => {
    let isSuccess = false;
    try {
      setIsLoading(true);
      await deleteTask(getAuthKey(), id);
      triggerToast("Task Deleted", "success");
      isSuccess = true;
    } catch (error) {
      handleApiError(error);
    } finally {
      setIsLoading(false);
      handleClose();
      if (isSuccess) {
        getTaskList();
      }
    }
  };

  const handleClose = () => {
    setShowModal(false);
    setIsDeleting(false);
  }

  return (
    <DeleteTask
      isLoading={isLoading}
      showModal={showModal}
      setShowModal={setShowModal}
      deleteTaskHandler={deleteTaskHandler}
      handleClose={handleClose}
      id={id}
    />
  )
}

export default DeleteTaskContainer;
