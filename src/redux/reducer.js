// src/redux/reducer.js
import { SET_SELECTED_REGION, SET_REGION_INFO, TOGGLE_NIGHT_MODE } from './action';

const initialState = {
  selectedRegion: 'united-states',
  regionInfo: null,
  nightMode: false, // Initial night mode state is set to false (day mode).
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_REGION:
      return {
        ...state,
        selectedRegion: action.payload,
      };
    case SET_REGION_INFO:
      return {
        ...state,
        regionInfo: action.payload,
      };
    case TOGGLE_NIGHT_MODE:
      return {
        ...state,
        nightMode: !state.nightMode, // Toggle the night mode state.
      };
    default:
      return state;
  }
};

export default reducer;
