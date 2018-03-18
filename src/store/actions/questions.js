import db from '../db';
import {
  QUESTIONS_ADD,
  QUESTIONS_DELETE,
  QUESTIONS_UPDATE,
} from '../actionEnums';

export function addQuestion(question) {
  return (dispatch) => {
    return db.questions
      .add(question)
      .then((id) => {
        question.id = id;
        dispatch({
          type: QUESTIONS_ADD,
          data: question,
        });

        return question;
      });
  }
}

export function deleteQuestion(id) {
  return (dispatch) => {
    return db.questions
      .delete(id)
      .then(() => {
        dispatch({
          type: QUESTIONS_DELETE,
          data: id,
        });

        return id;
      });
  };
}

export function updateQuestion(question) {
  return (dispatch) => {
    return db.questions
      .update(question.id, question)
      .then(() => {
        dispatch({
          type: QUESTIONS_UPDATE,
          data: question,
        });

        return question;
      });
  };
}

export default {
  addQuestion,
  deleteQuestion,
  updateQuestion,
}
