import { StyledAddTaskBtn } from "./AddTask.Btn.styled";

export const AddTaskBtn = ({func,children}) => {

    return (
        <StyledAddTaskBtn onClick={func}>
            {children}
            </StyledAddTaskBtn>
    )
}