import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import { TasksTabPanel } from "./TabPanel/TasksTabPanel";

export const App = () => {
  return (
    <div>
      <DndProvider backend={HTML5Backend}>
        <TasksTabPanel />
        </DndProvider>
    </div>
  );
};
