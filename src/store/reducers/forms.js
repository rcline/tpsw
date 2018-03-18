import {
  APP_LOAD,
  FORMS_ADD,
  FORMS_UPDATE,
  FORMS_DELETE,
} from '../actionEnums';

const INITIAL_STATE = [];

function forms(state = INITIAL_STATE, action) {
  let nextState = state;

  switch (action.type) {
    case APP_LOAD:
      const formsObj = action.data.forms.reduce(function(acc, cur) {
        acc[cur.id] = cur;
        return acc;
      }, {});
      nextState = formsObj;
      break;
    case FORMS_ADD:
    case FORMS_UPDATE:
      nextState[action.data.id] = action.data;
      break;
    case FORMS_DELETE:
      delete nextState[action.data];
      break;
    default:
      break;
  }

  return nextState;
}

export {
  forms,
};

export default forms;
