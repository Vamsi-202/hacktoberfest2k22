/**
Author - Brijesh Pandey
Git - https://bitbucket.org/__brijesh/
**/

import React, {useState} from 'react';

import ToDo from "./ToDo";

const ToDoContainer = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <ToDo
      showForm={showForm}
      setShowForm={setShowForm}
    />
  )
}

export default ToDoContainer;