import db from '../db';
import {
  FORMS_ADD,
  FORMS_DELETE,
  FORMS_UPDATE,
} from '../actionEnums';

export function addForm(form) {
  return (dispatch) => {
    return db.forms
      .add(form)
      .then((id) => {
        form.id = id;
        dispatch({
          type: FORMS_ADD,
          data: form,
        });

        return form;
      });
  }
}

export function deleteForm(id) {
  return (dispatch) => {
    return db.forms
      .delete(id)
      .then(() => {
        dispatch({
          type: FORMS_DELETE,
          data: id,
        });

        return id;
      });
  };
}

export function updateForm(form) {
  return (dispatch) => {
    return db.forms
      .update(form.id, form)
      .then(() => {
        dispatch({
          type: FORMS_UPDATE,
          data: form,
        });

        return form;
      });
  };
}

export default {
  addForm,
  deleteForm,
  updateForm,
}
