import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'projects',
  storage,
}

 const myProjectsSlice = createSlice({
    name: 'projects',
     initialState: {
         projects: [{
                 id: '1',
                 tasks: [
                     {
                         id: '1',
                         value: 'task-1'
                     },
                     {
                         id: '2',
                         value: 'task-2'
                     }
                 ],
             },
             {
                 id: '2',
                 tasks: [
                     {
                         id: '3',
                         value: 'task-3'
                     },
                     {
                         id: '4',
                         value: 'task-4'}
                 ]
             }
         ]
     },
    reducers: {
        add(state, {payload}) {
            // state.items.push(payload)
        },
        remove(state, {payload}) {
            // state.items = state.items.filter(item => item.id !== payload);
        }
    }
})

export const persistedReducer = persistReducer(persistConfig, myProjectsSlice.reducer)

export const { add, remove } = myProjectsSlice.actions;