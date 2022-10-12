/**
Author - Brijesh Pandey
Git - https://bitbucket.org/__brijesh/
**/

import React, {useState} from "react";

import { useHistory } from 'react-router-dom';

import { userLogin } from "api";
import {handleApiError} from "utils";

import Login from "./Login";

const LoginContainer = ({
  setToken
}) => {

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    userLogin(formData)
      .then(({data}) => {
        if (data && data.token) {
          sessionStorage.setItem("token", JSON.stringify(data.token));
          setToken(sessionStorage.getItem("token"));
          history.push("/todo")
        }
      })
      .catch((error) => handleApiError(error))
      .finally(() => setIsLoading(false));
  }

  return (
    <Login
      formData={formData}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
      isLoading={isLoading}
    />
  )
}

export default LoginContainer;