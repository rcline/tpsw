import {
  APP_LOAD,
  QUESTIONS_ADD,
  QUESTIONS_UPDATE,
  QUESTIONS_DELETE,
} from '../actionEnums';

const INITIAL_STATE = [];

function questions(state = INITIAL_STATE, action) {
  let nextState = state;

  switch (action.type) {
    case APP_LOAD:
      const questionsObj = action.data.questions.reduce(function(acc, cur) {
        acc[cur.id] = cur;
        return acc;
      }, {});
      nextState = questionsObj;
      break;
    case QUESTIONS_ADD:
    case QUESTIONS_UPDATE:
      nextState[action.data.id] = action.data;
      break;
    case QUESTIONS_DELETE:
      delete nextState[action.data];
      break;
    default:
      break;
  }

  return nextState;
}

export {
  questions,
};

export default questions;
