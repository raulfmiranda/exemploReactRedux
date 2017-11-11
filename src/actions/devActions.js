import * as types from './actionTypes';
import devApi from '../api/devApi';

export function createDev(dev) {
  return { type: types.CREATE_DEV, dev};
}

export function loadDevs() {
  return function (dispatch) {
    return devApi.getAllDevs().then(devs => {
      dispatch(loadDevsSuccess(devs.data));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadDevsSuccess(devs) {
  return { type: types.LOAD_DEVS_SUCCESS, devs };
}