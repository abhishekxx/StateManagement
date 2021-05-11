import { GET_EMPLOYEES, ADD_EMPLOYEE, DELETE_EMPLOYEE, EDIT_EMPLOYEE } from './actiontypes';
import axios from 'axios';

export const getEmployees = () => {
return dispatch => {
return axios.get("http://localhost:5000/employees").then((response) => {
console.log(response);
dispatch({ type: GET_EMPLOYEES, payload: response.data });
})
}
}

export const addEmployee = () => {
    return dispatch => {
    return axios.get("http://localhost:5000/employees").then((response) => {
    console.log(response);
    dispatch({ type: ADD_EMPLOYEE, payload: response.data });
    })
    }
    }

export const editEmployee = () => {
    return dispatch => {
    return axios.get("http://localhost:5000/employees").then((response) => {
    console.log(response);
    dispatch({ type: EDIT_EMPLOYEE, payload: response.data });
    })
    }
    }

    