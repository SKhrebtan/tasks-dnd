import styled from 'styled-components'

export const StyledUl = styled.ul`
list-style: none;
display: flex;
gap: 10px;
`

export const StyledLi = styled.li`
color: ${props => (props.$data ? 'blue' : '')};
`