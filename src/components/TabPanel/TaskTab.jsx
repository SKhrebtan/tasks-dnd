import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { PlusButton } from 'components/PlusButton/PlusButton';
import { DnDList } from 'components/DnDList/DnDList';
import { addTask } from '../../redux/projectsSlice';
import { useDispatch } from 'react-redux';

export const TaskTab = ({ currentProjectId, id, data,index }) => {
  const dispatch = useDispatch();
    return (currentProjectId === id &&
      <Tabs >
        
          <TabList style={{paddingLeft: '20px', position: 'relative'}}>
    {data.map(({ id }, index) => {
    return <Tab key={id}>View #{index}</Tab>
    })}
          <PlusButton func={()=>dispatch(addTask(currentProjectId))} currentProjectId={currentProjectId} />
           </TabList>
       
                         {data.map(tasks => {
              return <TabPanel key={tasks.id}>
                <DnDList currentProjectId={currentProjectId} taskId={id} tasks={tasks}/>      
    </TabPanel>
})}
  </Tabs>
    )
}