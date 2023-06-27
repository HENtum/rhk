import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: "",
};

export const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    updateMessage(state, { payload }) {
      state.message = payload;
    },
  },
});

export const { reducer, actions } = messageSlice;
