import db from '../db';
import {
  RESPONSES_ADD,
  RESPONSES_DELETE,
  RESPONSES_UPDATE,
} from '../actionEnums';

export function addResponse(response) {
  return (dispatch) => {
    return db.responses
      .add(response)
      .then((id) => {
        response.id = id;
        dispatch({
          type: RESPONSES_ADD,
          data: response,
        });

        return response;
      });
  }
}

export function deleteResponse(id) {
  return (dispatch) => {
    return db.responses
      .delete(id)
      .then(() => {
        dispatch({
          type: RESPONSES_DELETE,
          data: id,
        });

        return id;
      });
  };
}

export function updateResponse(response) {
  return (dispatch) => {
    return db.responses
      .update(response.id, response)
      .then(() => {
        dispatch({
          type: RESPONSES_UPDATE,
          data: response,
        });

        return response;
      });
  };
}

export default {
  addResponse,
  deleteResponse,
  updateResponse,
}
