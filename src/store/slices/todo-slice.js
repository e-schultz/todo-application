import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    fetchTodo: (state, action) => {
      const newTodo = action.payload;
      state.push(newTodo);
    },
    toggleProgress: (state, action) => {
      const toggledItemId = action.payload;
      const existingItem = state.find((item) => {
        return item.id === toggledItemId;
      });
      existingItem.inProgress = false;
    },
  },
});

export const { fetchTodo, toggleProgress } = todoSlice.actions;

export default todoSlice.reducer;
