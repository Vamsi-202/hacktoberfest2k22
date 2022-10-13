/**
Author - Brijesh Pandey
Git - https://bitbucket.org/__brijesh/
**/

import React from 'react';

import {
  Button,
  CircularProgress,
  TextField,
} from '@material-ui/core';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


const AddTask = ({
  setShowForm,
  isLoading,
  handleInputChange,
  handleAddTask
}) => {

  const classes = useStyles();

  return (
    <>
      <div className="panel-header">
        <ArrowBackIcon onClick={() => setShowForm(false)} />
        <h4 className="panel-title">ADD TASK</h4>
      </div>
      <div className="panel-body">
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="task-description"
            label="Task Description"
            name="description"
            autoFocus
            onChange={handleInputChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={event => handleAddTask(event)}
          >
          {
            isLoading ? (
            <CircularProgress color="white" />
            ) :
            ("Add Task")
          }
          </Button>
        </form>
      </div>
    </>
  )
}

export default AddTask;
