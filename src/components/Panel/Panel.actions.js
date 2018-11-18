import uuid from 'uuid/v4';

import {
  CREATE_PANEL,
  EDIT_PANEL,
  DELETE_PANEL,
  MOVE_PANEL,
  INSERT_IN_PANEL,
  REMOVE_FROM_PANEL,
} from './Panel.actions.type';

const isFetchCreatePanel = value => ({
  type: CREATE_PANEL,
  payload: {
    id: uuid(),
    text: value,
    edit: false,
    cards: []
  }
});

export const isFetchEditPanel = payload => ({ type: EDIT_PANEL, payload });
export const isFetchDeletePanel = id => ({ type: DELETE_PANEL, payload: { id } });
export const isFetchMovelPanel = (id, monitorId) => ({ type: MOVE_PANEL, payload: { id, monitorId }});

export const isFetchInsertPanel = (panelId, cardId) => ({ type: INSERT_IN_PANEL, payload: { panelId, cardId } });
export const isFetchRemoveFromPanel = (panelId, cardId) => ({ type: REMOVE_FROM_PANEL, payload: { panelId, cardId } });

export const createPanel = () => async (dispatch) => {
  dispatch(isFetchCreatePanel('New Panel'));
};

export const editPanel = (id, value) => dispatch => {
  const edited = { id };

  if (!value) {
    edited.edit = true;
  } else {
    edited.edit = false;
    edited.text = value;
  }

  dispatch(isFetchEditPanel(edited));
};

export const deletePanel = (id) => dispatch => {
  dispatch(isFetchDeletePanel(id));
};

export const movePanel = (id, monitorId) => dispatch => {
  dispatch(isFetchMovelPanel(id, monitorId));
};
