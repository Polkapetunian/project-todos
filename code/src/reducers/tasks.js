import { createSlice } from '@reduxjs/toolkit'

const tasks = createSlice({
  name: 'tasks',
  initialState: {
    items: [
      {id: 1, title: 'Clean cupboard', createdAt: undefined, isComplete: false},
      {id: 2, title: 'Feed cat', createdAt: undefined, isComplete: false},
      {id: 3, title: 'Eat lunch', createdAt: undefined, isComplete: false},
      {id: 4, title: 'Water flowers', createdAt: undefined, isComplete: false},
    ],
  },
  reducers: {
    toggleComplete: (store, action) => {
      const updatedItems = store.items.map(task => {
        if (task.id === action.payload) {
          return {
            ...task,
            isComplete: !task.isComplete
          }
        } else {
          return task;
        }
      });
      store.items = updatedItems;
    }
  }
});

export default tasks;