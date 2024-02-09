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
                 id: nanoid(),
                 tasks: [
                     {
                         id: nanoid(),
                         value: 'task-1',
                         items: [
                             {
                                 id: nanoid(),
                                 value: 'items-1',
                                 subtasks: [
                                     {
                                        id: nanoid(),
                                 value: 'subtasks-1', 
                                     },   {
                                        id: nanoid(),
                                 value: 'subtasks-1', 
                                     },
                                 ]
                             },
                             {
                                 id: nanoid(),
                                 value: 'items-2',
                                 subtasks: []
                             },  {
                                 id: nanoid(),
                                 value: 'items-3',
                                 subtasks: []
                             },  {
                                 id: nanoid(),
                                 value: 'items-4',
                                 subtasks: []
                             },  {
                                 id: nanoid(),
                                 value: 'items-5',
                                 subtasks: []
                             } , {
                                 id: nanoid(),
                                 value: 'items-6',
                                 subtasks: []
                             }
                         ]
                     },
                     {
                         id: nanoid(),
                         value: 'task-2',
                         items: [
                             {
                                 id: nanoid(),
                                 value: 'items-1',
                                 subtasks: [
                                     {
                                        id:nanoid(),
                                 value: 'subtasks-1', 
                                     },   {
                                        id: nanoid(),
                                 value: 'subtasks-1', 
                                     },
                                 ]
                             },
                            ]
                     }
                 ],
             },
             {
                 id: nanoid(),
                 tasks: [
                     {
                         id: nanoid(),
                         value: 'task-3',
                          items: [
                             {
                                 id: nanoid(),
                                 value: 'items-1',
                                 subtasks: [
                                     {
                                        id: nanoid(),
                                 value: 'subtasks-1', 
                                     },   {
                                        id: nanoid(),
                                 value: 'subtasks-1', 
                                     },
                                 ]
                             },
                            ]
                     },
                     {
                         id: nanoid(),
                         value: 'task-4',
                         items: [
                             {
                                 id: nanoid(),
                                 value: 'items-1',
                                 subtasks: [
                                     {
                                        id: nanoid(),
                                 value: 'subtasks-1', 
                                     },   {
                                        id: nanoid(),
                                 value: 'subtasks-1', 
                                     },
                                 ]
                             },
                         ]
                     }
                 ]
             }
         ]
     },
    reducers: {
        addProject(state) {
            state.projects.push({id: nanoid(), tasks: [{id: nanoid(), value:'',items:[]}]})
        },
        addTask(state,action) {
            state.projects.find(item => (item.id === action.payload) && item.tasks.push({id: nanoid(), value:'',items:[]}))
        },
        addItem(state, action) {
            const {currentProjectId, taskID} = action.payload
            state.projects = state.projects.map(project => {
                if (project.id === currentProjectId) {
                    project.tasks.map(task => {
                                             if (task.id === taskID) {
                            task.items.push({id: nanoid(), value:'new task',subtasks:[]})
                        }
                        return task
                }
                    )
                }
                return project
                })
        },
        addToSubtasks(state, action) {
            const { id, newId, taskId, currentProjectId } = action.payload;
         state.projects = state.projects.map(project => {
             if (project.id === currentProjectId) {
                 if (project.tasks.find(task => task.id === taskId).items.find(item => item.id === id).subtasks?.length > 0) return project;
            const deleted = project.tasks.find(task => task.id === taskId).items.find(item => item.id === id);
            
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

export const { addProject, addTask,addToSubtasks,addItem } = myProjectsSlice.actions;