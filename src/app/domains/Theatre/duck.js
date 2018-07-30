import { batchActions } from "redux-batched-actions";

const SET_ACTIVE_TAB = "r09181wwnm/theatre/SET_ACTIVE_TAB";
const FETCHING = "r09181wwnm/theatre/FETCHING";
const FETCH_SUCCESS = "r09181wwnm/theatre/FETCH_SUCCESS";

const initialState = {
  fetching: false,
  activeTab: "",
  theatres: []
};

export function setActiveTab(tab) {
  return {
    type: SET_ACTIVE_TAB,
    tab
  };
}

export function fetching() {
  return {
    type: FETCHING
  };
}

export function fetchSuccess(theatres) {
  return {
    type: FETCH_SUCCESS,
    theatres
  };
}

export function getTheatres() {
  return function(dispatch) {
    dispatch(fetching());

    return fetch("/theatres.json")
      .then(response => response.json())
      .then(theatres =>
        dispatch(
          batchActions([setActiveTab(theatres[0].name), fetchSuccess(theatres)])
        )
      );
  };
}

export default function theatre(state = initialState, action) {
  switch (action.type) {
    case SET_ACTIVE_TAB:
      return Object.assign({}, state, {
        activeTab: action.tab
      });
    case FETCHING:
      return Object.assign({}, state, {
        fetching: true
      });
    case FETCH_SUCCESS:
      return Object.assign({}, state, {
        fetching: false,
        theatres: action.theatres
      });
    default:
      return state;
  }
}
