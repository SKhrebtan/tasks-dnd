import { TaskTab } from './TaskTab';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { StyledUl, StyledLi } from './TabPanel.styled';
import { PlusButton } from 'components/PlusButton/PlusButton';
import { addProject } from '../../redux/projectsSlice';
export const TasksTabPanel = () => {
  const { projects } = useSelector(state => state.projects);
  const [currentProjectId, setCurrentProjectId] = useState(projects[0].id)
  const dispatch = useDispatch();

  return (
    <div>
         <StyledUl>
        {projects.map(({ id}, index) => {
          return <StyledLi $data={currentProjectId===id} onClick={()=>setCurrentProjectId(id)} key={id}>Project {index + 1}</StyledLi>
        })}
          <PlusButton func={()=>dispatch(addProject())} />
        </StyledUl>
          { projects.map(({ id, tasks }, index)=> {
            return <TaskTab currentProjectId={currentProjectId} index={index} id={id} key={id} data={tasks} />
})}
  </div>

  )
 
}