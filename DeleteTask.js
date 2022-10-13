/**
Author - Brijesh Pandey
Git - https://bitbucket.org/__brijesh/
**/

import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles({
  loader: {
    margin: "0 auto",
    paddingBottom: "0.3rem"
  }
});

const DeleteTask = ({
  isLoading,
  showModal,
  id,
  deleteTaskHandler,
  handleClose
}) => {

  const classes = useStyles();

  return (
    <Dialog
      open={showModal}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Delete Task"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure you want to delete this task ?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
      {
        isLoading ? (
          <CircularProgress
            color="primary"
            className={classes.loader}
          />
        ) : (
          <>
            <Button onClick={() => deleteTaskHandler(id)} color="primary">
              Yes
            </Button>
            <Button onClick={handleClose} color="primary" autoFocus>
              No
            </Button>
          </>
        )
      }
      </DialogActions>
    </Dialog>
  )
}

export default DeleteTask
