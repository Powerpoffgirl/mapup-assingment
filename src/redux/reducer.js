import {
  SET_SELECTED_REGION,
  SET_REGION_INFO,
  TOGGLE_NIGHT_MODE,
  SET_LOADING,
} from './action';

const initialState = {
  selectedRegion: 'united-states',
  regionInfo: null,
  nightMode: false,
  showModal: false, // New property added to the initial state.
};

const reducer = (state = initialState, action = {}) => {
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
        nightMode: !state.nightMode,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
