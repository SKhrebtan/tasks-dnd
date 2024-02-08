import { TaskTab } from './TaskTab';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { StyledUl, StyledLi } from './TabPanel.styled';

export const TasksTabPanel = () => {
  const {  projects } = useSelector(state => state.projects);
  const [currentProjectId, setCurrentProjectId] = useState('1')
  
  useEffect(() => {
    setCurrentProjectId(projects[0].id)
  },[projects])
  return (
    <div>
      <StyledUl>
        {projects.map(({ id}) => {
          return <StyledLi $data={currentProjectId===id} onClick={()=>setCurrentProjectId(id)} key={id}>Project {id}</StyledLi>
        })}
      </StyledUl>
          { projects.map(({ id, tasks })=> {
            return <TaskTab currentProjectId={currentProjectId} id={id} key={id} data={tasks} />
})}
  </div>

  )
 
}