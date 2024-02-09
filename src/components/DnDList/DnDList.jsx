import { StyledUl } from "./DnDList.styled";
import { ListItem } from "./ListItem";
export const DnDList = ({tasks, currentProjectId,taskId}) => {

    return (
        <StyledUl>
            {tasks?.items?.map(({ id, value, subtasks }) => {
                return <ListItem taskId={taskId} currentProjectId={currentProjectId} key={id} id={id} value={value} subtasks={subtasks} />
            })}
</StyledUl>
    )
}