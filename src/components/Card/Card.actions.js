import uuid from 'uuid/v4';

import {
  CREATE_CARD,
  EDIT_CARD,
  DELETE_CARD,
} from './Card.actions.type';

import { isFetchInsertPanel, isFetchRemoveFromPanel, isFetchMoveCard } from '../Panel/Panel.actions';

export const isFetchCreateCard = payload => ({ type: CREATE_CARD, payload });
export const isFetchEditCard = payload => ({ type: EDIT_CARD, payload });
export const isFetchDeleteCard = id => ({ type: DELETE_CARD, payload: { id } });

export const createCard = (panelId) => dispatch => {
  const createNewCard = {
    id: uuid(),
    edit: false,
    text: 'New Card'
  };

  dispatch(isFetchCreateCard(createNewCard));
  const { id } = createNewCard;
  dispatch(isFetchInsertPanel(panelId, id));
};

export const editCard = (id, value) => dispatch => {
  const edited = { id };

  if (!value) {
    edited.edit = true;
  } else {
    edited.edit = false;
    edited.text = value;
  }

  dispatch(isFetchEditCard(edited));
}

export const deleteCard = (panelId, cardId) => dispatch => {
  dispatch(isFetchDeleteCard(cardId));

  if (!panelId) return;

  dispatch(isFetchRemoveFromPanel(panelId, cardId));
}

export const moveCard = (id, monitorId) => dispatch => {
  dispatch(isFetchMoveCard(id, monitorId));
};

export const insertInPanel = (id, monitorId) => dispatch => {
  dispatch(isFetchInsertPanel(id, monitorId));
};
