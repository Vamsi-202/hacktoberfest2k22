/**
Author - Brijesh Pandey
Git - https://bitbucket.org/__brijesh/
**/

import React, {useState} from 'react';

import {addTask} from "api";
import {
  handleApiError,
  triggerToast,
  getAuthKey
} from "utils";

import AddTask from "./AddTask";

const AddTaskContainer = ({setShowForm}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    description: "",
  })

  const handleInputChange = (event) => {
    const {
      name,
      value
    } = event.target;

    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleAddTask = async (event) => {
    event.preventDefault();
    let isSuccess = false;
    try {
      setIsLoading(true);
      await addTask(getAuthKey(), formData);
      triggerToast("Task added successfully", "success");
      isSuccess = true;
    } catch (error) {
      handleApiError(error);
    } finally {
      setIsLoading(false);
      if (isSuccess) {
        setShowForm(false);
      }
    }
  }

  return (
    <AddTask
      setShowForm={setShowForm}
      isLoading={isLoading}
      handleInputChange={handleInputChange}
      handleAddTask={handleAddTask}
    />
  )
}

export default AddTaskContainer;
