import { StyledLi } from "./ListItem.styled"
import { useDrop, useDrag } from 'react-dnd'
import { memo } from "react"
import { addToSubtasks } from "../../redux/projectsSlice"
import { useDispatch } from "react-redux"
export const ListItem = memo(function Listitem({ id, taskId,currentProjectId,value, subtasks }) {
    const dispatch = useDispatch();
    const [{ canDrop, isOver }, drop] = useDrop(() => ({
            accept: 'li',
		drop: () => ({ name: id }),
		collect: (monitor) => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop(),
		}),
	}))

	const isActive = canDrop && isOver
	let backgroundColor = '#222'
	if (isActive) {
		backgroundColor = 'darkgreen'
	} else if (canDrop) {
		backgroundColor = 'darkkhaki'
    }
    

    const [{ isDragging }, drag] = useDrag(() => ({
		type: 'li',
		item: { id },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult()
            if (item.id === dropResult.name) return;
            if (item && dropResult) {
                dispatch(addToSubtasks({ id: item.id, newId: dropResult.name,currentProjectId,taskId }))
				// alert(`You dropped ${item.id} into ${dropResult.name}!`)
			}
		},
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
			handlerId: monitor.getHandlerId(),
		}),
	}))

    const opacity = isDragging ? 0.4 : 1
    
    return (
        <div ref={drag}  style={{ opacity }}>
            <StyledLi ref={drop} style={{ backgroundColor }} data-testid="dustbin">{value}</StyledLi>
            <ul>
                {subtasks?.map(({ id, value }) => <li key={id}>{value}</li>)}
            </ul>
        </div>
        
    )
})