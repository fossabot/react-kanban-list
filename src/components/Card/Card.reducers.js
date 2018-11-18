import {
  CREATE_CARD,
  EDIT_CARD,
  DELETE_CARD,
} from './Card.actions.type';

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CARD:
      return [
        ...state,
        action.payload
      ];
    case EDIT_CARD:
      return state;
    case DELETE_CARD:
      return state;
    default:
      return state;
  }
};

export default reducer;
