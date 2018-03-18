import {
  APP_LOAD,
  RESPONSES_ADD,
  RESPONSES_UPDATE,
  RESPONSES_DELETE,
} from '../actionEnums';

const INITIAL_STATE = [];

function responses(state = INITIAL_STATE, action) {
  let nextState = state;

  switch (action.type) {
    case APP_LOAD:
      const responsesObj = action.data.responses.reduce(function(acc, cur) {
        acc[cur.id] = cur;
        return acc;
      }, {});
      nextState = responsesObj;
      break;
    case RESPONSES_ADD:
    case RESPONSES_UPDATE:
      nextState[action.data.id] = action.data;
      break;
    case RESPONSES_DELETE:
      delete nextState[action.data];
      break;
    default:
      break;
  }

  return nextState;
}

export {
  responses,
};

export default responses;
