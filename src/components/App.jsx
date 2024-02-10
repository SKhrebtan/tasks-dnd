import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import { TasksTabPanel } from "./TabPanel/TasksTabPanel";
import FillExample from './Bootstrap/BootstrapTabs';
export const App = () => {
  return (
    <div>
      <FillExample/>
      <DndProvider backend={HTML5Backend}>
        <TasksTabPanel />
        </DndProvider>
    </div>
  );
};
