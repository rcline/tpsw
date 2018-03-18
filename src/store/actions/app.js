import db from '../db';
import {
  APP_LOAD,
} from '../actionEnums';

import fixtureData from '../../../test/fixture-data.json';

function clearAll() {
  return db.forms
    .clear()
    .then(() => {
      return db.questions.clear();
    })
    .then(() => {
      return db.responses.clear();
    });
}
function getAll(dispatch) {
  const data = {};
  db.forms
    .toArray()
    .then((forms) => {
      data.forms = forms;
      return db.questions.toArray();
    })
    .then((questions) => {
      data.questions = questions;
      return db.responses.toArray();
    })
    .then((responses) => {
      data.responses = responses;
      dispatch({
        type: APP_LOAD,
        data,
      });
    });
}

export function clearAllData() {
  return (dispatch) => {
    clearAll()
      .then(() => {
        getAll(dispatch);
      });
  };
}

export function loadFixtureData() {
  return (dispatch) => {
    clearAll()
      .then(() => {
        return db.forms.bulkAdd(fixtureData.forms);
      })
      .then(() => {
        return db.questions.bulkAdd(fixtureData.questions);
      })
      .then(() => {
        return db.responses.bulkAdd(fixtureData.responses);
      })
      .then(() => {
        getAll(dispatch);
      });
  };
}

export function loadApp() {
  return (dispatch) => {
    getAll(dispatch);
  };
}

export default {
  clearAllData,
  loadApp,
  loadFixtureData,
}
