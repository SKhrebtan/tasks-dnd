import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import { nanoid } from 'nanoid';
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
                         value: 'task-1',
                         items: [
                             {
                                 id: '1',
                                 value: 'items-1',
                                 subtasks: [
                                     {
                                        id: '1',
                                 value: 'subtasks-1', 
                                     },   {
                                        id: '2',
                                 value: 'subtasks-1', 
                                     },
                                 ]
                             },  {
                                 id: '2',
                                 value: 'items-2',
                                 subtasks: []
                             },  {
                                 id: '3',
                                 value: 'items-3',
                                 subtasks: []
                             },  {
                                 id: '4',
                                 value: 'items-4',
                                 subtasks: []
                             },  {
                                 id: '5',
                                 value: 'items-5',
                                 subtasks: []
                             } , {
                                 id: '6',
                                 value: 'items-6',
                                 subtasks: []
                             }
                         ]
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
        addProject(state) {
            state.projects.push({id: nanoid(), tasks: [{id: nanoid(), value:''}]})
        },
        addTask(state,action) {
            state.projects.find(item => (item.id === action.payload) && item.tasks.push({id: nanoid(), value:''}))
        },
        addToSubtasks(state, action) {
            const { id, newId, taskId, currentProjectId } = action.payload;
         state.projects = state.projects.map(project => {
             if (project.id === currentProjectId) {
                 if (project.tasks.find(task => task.id === taskId).items.find(item => item.id === id).subtasks.length > 0) return project;
            const deleted = project.tasks.find(task => task.id === taskId).items.find(item => item.id === id);
            console.log(deleted);
            project.tasks = project.tasks.map(task => {
                if (task.id === taskId) {
                    task.items = task.items.filter(item => item.id !== id);
                                   }
                return task;
            });

           project.tasks.find(task => task.id === taskId).items.find(item => item.id === newId).subtasks.push(deleted)
                   }
        return project;
});
           
        },
    }
})

export const persistedReducer = persistReducer(persistConfig, myProjectsSlice.reducer)

export const { addProject, addTask,addToSubtasks } = myProjectsSlice.actions;