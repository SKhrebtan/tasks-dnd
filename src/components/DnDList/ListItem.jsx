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
	let backgroundColor = 'rgba(0, 0, 0, 0.03)'
	let transform;
	if (isActive) {
		transform = 'rotate(2deg)'
		backgroundColor = 'rgba(25, 118, 210, 0.3)'
	} else if (canDrop) {
		backgroundColor = 'rgba(0, 0, 0, 0.03)'
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

	const background = isDragging ? 'white' : '';
	
	const border = isDragging ? '1px dashed rgba(0, 0, 0, 0.38)': ''
    return (
        <div ref={drag}  style={{ background, width:'470px', border}}>
            <StyledLi ref={drop} style={{ backgroundColor, transform}} data-testid="dustbin">{value}</StyledLi>
            <ul>
                {subtasks?.map(({ id, value }) => <li key={id}>{value}</li>)}
            </ul>
        </div>
        
    )
})