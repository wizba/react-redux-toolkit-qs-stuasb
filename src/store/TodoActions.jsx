import { createAction, nanoid } from '@reduxjs/toolkit';

export const addTodo = createAction('todos/add', function prepare(text) {
  return {
    payload: {
      text,
      id: nanoid(),
      createdAt: new Date().toISOString(),
    },
  };
});

export const getTodo = createAction('todos/get');
