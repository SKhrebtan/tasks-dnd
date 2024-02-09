import { StyledPlusButton } from "./PlusButton.styled"

export const PlusButton = ({func, currentProjectId}) => {
    return (
        <StyledPlusButton onClick={func}>+</StyledPlusButton>
    )
}