import {createSlice} from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gpt: null,
    gptError: null,
    gptLoading: false,
    isGptSearch: false,
    gptMovie: null,
    gptTMDBMovie: null,
    searchText: "",
  },
  reducers: {
    setGpt: (state, action) => {
      state.gpt = action.payload;
    },
    setGptError: (state, action) => {
      state.gptError = action.payload;
    },
    setGptLoading: (state, action) => {
      state.gptLoading = action.payload;
    },
    setIsGptSearch: (state, action) => {
      state.isGptSearch = action.payload;
    },
    setGptMovie: (state, action) => {
      state.gptMovie = action.payload;
    },
    setGptTMDBMovie: (state, action) => {
      state.gptTMDBMovie = action.payload;
    },
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
  },
});

export const {
  setGpt,
  setGptError,
  setGptLoading,
  setIsGptSearch,
  setGptMovie,
  setGptTMDBMovie,
  setSearchText,
} = gptSlice.actions;

export default gptSlice.reducer;
