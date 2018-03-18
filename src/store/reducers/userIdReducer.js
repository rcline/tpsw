import { NOT_FOUND } from 'redux-first-router'

const userIdReducer = (state = null, action = {}) => {
  switch(action.type) {
    case 'HOME':
    case NOT_FOUND:
      return null;
    case 'USER':
      return action.payload.id;
    default:
      return state
  }
}

export default userIdReducer;
