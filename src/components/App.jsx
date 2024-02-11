import { TouchBackend } from "react-dnd-touch-backend";
import { DndProvider } from 'react-dnd'
import { TasksTabPanel } from "./TabPanel/TasksTabPanel";
// import FillExample from './Bootstrap/BootstrapTabs';
import Container  from './DnDSorter/Container';
import CardPreview from "./DnDSorter/CardPreview";
// import { Card } from "react-bootstrap";
export const App = () => {
  return (
    <div>
      <DndProvider backend={TouchBackend} options={{ enableMouseEvents: true }}>
        <Container />
        <CardPreview/>
          <TasksTabPanel />
        </DndProvider>
    </div>
  );
};
