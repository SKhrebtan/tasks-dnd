import { Tab,TabList,TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { PlusButton } from 'components/PlusButton/PlusButton';
import { DnDList } from 'components/DnDList/DnDList';
import { addTask , addItem} from '../../redux/projectsSlice';
import { useDispatch } from 'react-redux';
import { StyledTabs } from './TaskTab.styled';
import { AddTaskBtn } from 'components/AddTaskBtn/AddTaskBtn';
import { ReactComponent as SvgOne } from '../../image/1.svg'
import {ReactComponent as SvgTwo} from '../../image/2.svg'
export const TaskTab = ({ currentProjectId, id, data}) => {
  const dispatch = useDispatch();
    return (currentProjectId === id &&
      <StyledTabs >
        
          <TabList style={{paddingLeft: '20px', position: 'relative'}}>
    {data.map(({ id }, index) => {
    return <Tab key={id}><span className='span'><SvgOne/>View #{index+1}<SvgTwo/></span></Tab>
    })}
          <PlusButton func={()=>dispatch(addTask(currentProjectId))} currentProjectId={currentProjectId} />
           </TabList>
        {/* {data.map(task =>
          <TabPanel key={task.id}><TabPanelJsx currentProjectId={currentProjectId} taskId={task.id} task={task} /></TabPanel>
       )} */}
        {data.map(tasks => {
                           const taskID= tasks.id
              return <TabPanel key={tasks.id}>
                <DnDList key={tasks.id} currentProjectId={currentProjectId} taskId={tasks.id} tasks={tasks} />  
                <AddTaskBtn func={() => dispatch(addItem({ currentProjectId, taskID }))}>+</AddTaskBtn>
    </TabPanel>
})}
  </StyledTabs>
    )
}