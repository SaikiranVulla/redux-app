import { ADD_TODO, API_SUCCESS, API_ERROR, API_PENDING } from "./constants";

let todoId = 0;

export const add_Todo = (task) => ({
  type: ADD_TODO,
  payload: {
    id: ++todoId,
    task,
  },
});

export const sendData = (userData) => {
  return { type: API_SUCCESS, payload: userData };
};

export const getDataApi = () => {
  return async (dispatch) => {
    try {
      const data = await fetch("https://jsonplaceholder.typicode.com/users/1");
      const userData = await data.json();
      console.log(userData);
      dispatch(sendData(userData));
      return;
    } catch (err) {
      // dispatch({ type: API_ERROR, payload: err });
    }
  };
};

export function setPageList(pageList) {
  return {
    type: API_SUCCESS,
    payload: pageList,
  };
}

export function getPageList() {
  return async (dispatch) => {
    try {
      const apiResponse = await fetch(
        "http://dummy.restapiexample.com/api/v1/employees",
        {
          method: "GET",
        }
      );

      const employees = await apiResponse.json();

      // console.error(“getPageList => “ + JSON.stringify(employees));
      await dispatch(setPageList(employees.data));

      return employees.data || [];
    } catch (error) {
      console.error(error);
    }
  };
}
