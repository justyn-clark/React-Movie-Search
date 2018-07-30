const UPDATE = "r09181wwnm/search/UPDATE";
const RESET = "r09181wwnm/search/RESET";

const initialState = "";

export function updateText(text) {
  return {
    type: UPDATE,
    text
  };
}

export function reset() {
  return {
    type: RESET
  };
}

export default function search(state = initialState, action) {
  switch (action.type) {
    case UPDATE:
      return action.text;
    case RESET:
      return initialState;
    default:
      return state;
  }
}
