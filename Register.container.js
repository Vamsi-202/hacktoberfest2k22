/**
Author - Brijesh Pandey
Git - https://bitbucket.org/__brijesh/
**/

import React, {useState} from "react";
import {useHistory} from "react-router";

import {userRegister} from "api";
import {handleApiError} from "utils";

import Register from "./Register";

const RegisterContainer = ({setToken}) => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    age: ""
  })

  const handleInputChange = (event) => {
    const {
      name,
      value
    } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    userRegister(formData)
      .then(({data}) => {
        if (data && data.token) {
          sessionStorage.setItem("token", JSON.stringify(data.token));
          setToken(sessionStorage.getItem("token"));
          history.push("/todo");
        }
      })
      .catch(handleApiError)
      .finally(() => setIsLoading(false))
  }

  return (
    <Register
      isLoading={isLoading}
      handleInputChange={handleInputChange}
      handleRegisterSubmit={handleRegisterSubmit}
    />
  )

}

export default RegisterContainer;