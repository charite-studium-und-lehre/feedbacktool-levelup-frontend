import BaseStore from "../../../Core/BaseStore";
import { selectors as mcSelectors } from "../Store";
import { url } from "../../Store";

export const identifier = "questions";
const baseStore = BaseStore(
  identifier,
  state => mcSelectors.getStore(state)[identifier]
);

export const types = {
  QUESTIONS_DATA_FETCHED: identifier.toUpperCase() + "_DATA_FETCHED"
};

export const actions = {
  load: id =>
    baseStore
      .withLoadAction(`${url}/${id}/fragen`)({})
      .load()
};

const getById = (state, id) => baseStore.getStore(state)[id];
const loaded = (state, id) => !!getById(state, id);

export const selectors = {
  loaded,
  getById
};

export const reducer = (state = {}, action) => {
  switch (action.type) {
    case types.QUESTIONS_DATA_FETCHED:
      const { studiPruefungsId, fragen } = action.payload;
      return { ...state, [studiPruefungsId]: fragen };
    default:
      return state;
  }
};
