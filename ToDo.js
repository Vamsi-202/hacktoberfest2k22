/**
Author - Brijesh Pandey
Git - https://bitbucket.org/__brijesh/
**/

import React from 'react';
import {
  Drawer,
  Button,
} from '@material-ui/core';

import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";


const ToDo = ({
  showForm,
  setShowForm
}) => {

  // TODO: Take Care of Empty State, Add an SVG (at top of button)

  return (
    <div>
      <TaskList showForm={showForm} />
      <div className="footer-container">
        <Button
          variant="contained"
          color="primary"
          onClick={() => setShowForm(true)}
          style={{width: "12rem"}}
        >
          Add Task
        </Button>
      </div>
      <Drawer
        anchor="right"
        open={showForm}
        onClose={() => setShowForm(false)}
        transitionDuration={300}
      >
        <AddTask
          setShowForm={setShowForm}
        />
      </Drawer>
    </div>
  )
}

export default ToDo
