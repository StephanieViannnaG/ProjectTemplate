import axios from 'axios';
import { Rooturl } from '../../constants/Title';
export const CreateQuickRunTask = (workflow, client, username) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `${Rooturl}CreateQuickRunTask?selectedworkflow=${workflow}&client=${client}&username=${username}`
      );
      dispatch({
        type: 'CreateQuickRunTask',
        payload: response.data.split(' ')
      });
      // dispatch({
      //   type: 'GetNjRegionWiseLoader',
      //   payload: false
      // });
    } catch (error) {
      console.error(error);
    }
  };
};
export const CreateLongRunTask = (workflow, client, username) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `${Rooturl}CreateLongRunTask?selectedworkflow=${workflow}&client=${client}&username=${username}`
      );
      dispatch({
        type: 'CreateLongRunTask',
        payload: response.data.split(' ')
      });
      // dispatch({
      //   type: 'GetNjRegionWiseLoader',
      //   payload: false
      // });
    } catch (error) {
      console.error(error);
    }
  };
};
export const GetTaskState = (job, task) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`${Rooturl}GetTaskState?JobId=${job}&Task=${task}`);
      dispatch({
        type: 'GetTaskState',
        payload: response.data.split(' ')
      });
      // dispatch({
      //   type: 'GetNjRegionWiseLoader',
      //   payload: false
      // });
    } catch (error) {
      console.error(error);
    }
  };
};
export const GetSubDirectory = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`${Rooturl}GetSubDirectory`);
      dispatch({
        type: 'GetSubDirectory',
        payload: JSON.parse(response.data)
      });
      // dispatch({
      //   type: 'GetNjRegionWiseLoader',
      //   payload: false
      // });
    } catch (error) {
      console.error(error);
    }
  };
};
export const GetFileandDir = (path) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`${Rooturl}GetFileandDir?path=${path}`);
      console.log(response, 'action');
      dispatch({
        type: 'GetFileandDir',
        payload: response
      });
      // dispatch({
      //   type: 'GetNjRegionWiseLoader',
      //   payload: false
      // });
    } catch (error) {
      console.error(error);
    }
  };
};
