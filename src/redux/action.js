// src/redux/actions.js
export const SET_SELECTED_REGION = 'SET_SELECTED_REGION';
export const SET_REGION_INFO = 'SET_REGION_INFO';
export const SET_LOADING = 'SET_LOADING';
export const TOGGLE_NIGHT_MODE = 'TOGGLE_NIGHT_MODE';

export const setSelectedRegion = (region) => ({
  type: SET_SELECTED_REGION,
  payload: region,
});

export const setRegionInfo = (info) => ({
  type: SET_REGION_INFO,
  payload: info,
});

export const toggleNightMode = () => ({
  type: TOGGLE_NIGHT_MODE,
});

// Your existing code here...

// Add an empty line at the end of the file:
