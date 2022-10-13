/**
Author - Brijesh Pandey
Git - https://bitbucket.org/__brijesh/
**/

import React from 'react';

import moment from 'moment';

import { makeStyles } from '@material-ui/core/styles';

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  CircularProgress
} from '@material-ui/core';

import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import DeleteIcon from '@material-ui/icons/Delete';

import {Empty} from "utils";

import DeleteTask from "./components/DeleteTask";
import MarkSuccess from "./components/MarkSuccess";

const useStyles = makeStyles({
  root: {
    width: '100vw',
  },
  container: {
    maxHeight: 440,
  },
  loader: {
    position: 'absolute',
    left: "45%",
    top: "45%"
  }
});

const TaskList = ({
  isLoading,
  tasksList,
  setIsDeleting,
  isDeleting,
  isMarkingSuccess,
  setIsMarkingSuccess,
  getTaskList
}) => {
  const classes = useStyles();

  const columns = [
    {
      id: 'description',
      label: 'Task',
      minWidth: 170
    },
    {
      id: 'completed',
      label: 'Completed',
      minWidth: 80,
      align: 'left',
      format: (value) => value.toLocaleString('en-US')
    },
    {
      id: 'createdAt',
      label: 'Created-At',
      minWidth: 170,
      align: 'right',
      format: (value) => moment(value).format("MMMM Do YYYY, h:mm a")
    },
    {
      id: 'updatedAt',
      label: 'Updated-At',
      minWidth: 170,
      align: 'right',
      format: (value) => moment(value).format("MMMM Do YYYY, h:mm a")
    },
    {
      label: "Actions",
      minWidth: 170,
      align: "right"
    }
  ];

  return (
    <>
      {
        tasksList.length || isLoading ? (
          <Paper className={classes.root}>
            <TableContainer className={classes.container}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                {
                  isLoading ? (
                    <CircularProgress
                      color="primary"
                      className={classes.loader}
                    />
                  ) : (
                    <TableBody>
                      {
                        tasksList.map((task) => {
                          return (
                            <TableRow hover key={task.id}>
                              {columns.slice(0, 4).map((column) => {
                                const value = task[column.id];
                                return (
                                  <TableCell key={column.id} align={column.align}>
                                    {column.format ? column.format(value) : value}
                                  </TableCell>
                                );
                              })}
                              <TableCell style={{cursor: 'pointer'}} align="right">
                                <AssignmentTurnedInIcon
                                  onClick={() => task.completed ? null : setIsMarkingSuccess(true)}
                                  style={{marginRight: "1rem"}}
                                  color={`${task.completed ? "disabled" : "primary"}`}
                                />
                                <DeleteIcon
                                  onClick={() => setIsDeleting(true)}
                                  color="secondary"
                                />
                              </TableCell>
                              {
                                isDeleting && (
                                  <DeleteTask
                                    id={task.id}
                                    setIsDeleting={setIsDeleting}
                                    getTaskList={getTaskList}
                                  />
                                )
                              }
                              {
                                isMarkingSuccess && (
                                  <MarkSuccess
                                    id={task.id}
                                    setIsMarkingSuccess={setIsMarkingSuccess}
                                    getTaskList={getTaskList}
                                  />
                                )
                              }
                            </TableRow>
                          );
                        }
                      )}
                    </TableBody>
                  )
                }
              </Table>
            </TableContainer>
          </Paper>
        ) : (
          <Empty
            message="Your Task List Is Empty, Start by Adding New Task"
          />
        )
      }
    </>

  );
}

export default TaskList;
