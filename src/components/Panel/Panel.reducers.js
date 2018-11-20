import {
  CREATE_PANEL,
  DELETE_PANEL,
  EDIT_PANEL,
  MOVE_PANEL,
  INSERT_IN_PANEL,
  REMOVE_FROM_PANEL,
  MOVE_CARD,
} from './Panel.actions.type';

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PANEL:
      return [
        ...state,
        action.payload
      ];
    case EDIT_PANEL:
      return state.map(panel => {
        const { id } = action.payload;
        if (id === panel.id) return Object.assign({}, panel, action.payload);
        return panel;
      });
    case DELETE_PANEL:
      const { id } = action.payload;
      return state.filter(panel => id !== panel.id);
    case INSERT_IN_PANEL:
      const { panelId, cardId } = action.payload;
      return state.map((panel) => {
        const { cards } = panel;
        if (!panel.cards.indexOf(cardId)) {
          return Object.assign({}, panel, {
            cards: cards.filter((cardIdFilter) => {
              return cardId !== cardIdFilter
            })
          });
        }

        if (panel.id === panelId) {
          return Object.assign({}, panel, {
            cards: cards.concat(cardId)
          });
        }

        return panel;
      });
      case MOVE_PANEL:
        const targetDropId = action.payload.id;
        const monitorId = action.payload.monitorId;

        const targetImdex = state.findIndex(panel => panel.id === targetDropId)
        const monitorIndex = state.findIndex(panel => panel.id === monitorId);
        
        return state;
      case MOVE_CARD:
        return state;
      case REMOVE_FROM_PANEL:
        const { panelIdRemove, cardIdRemove } = action.payload;
        return state.map((panel) => {
          const { cards } = panel;

          if (panelIdRemove !== panel.id) {
            return panel;
          }

          return Object.assign({}, panel, {
            cards: cards.filter(id => cardIdRemove !== id)
          });
        });
    default:
      return state;
  }
};

export default reducer;
