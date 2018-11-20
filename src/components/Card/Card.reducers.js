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
      return state.map(card => {
        const { id } = action.payload;
        if (id === card.id) return Object.assign({}, card, action.payload);
        return card;
      });
    case DELETE_CARD:
      return state;
    default:
      return state;
  }
};

export default reducer;
