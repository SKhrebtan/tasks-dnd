import { useEffect, useRef, useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import { getEmptyImage } from "react-dnd-html5-backend";

export const cardStyles = ({ opacity = 1, isDragging, hovered }) => ({
    padding: 16,
    background: isDragging ? 'white':"rgba(0, 0, 0, 0.03)",
    border: isDragging ? '1px dashed rgba(0, 0, 0, 0.38)' :'',
  cursor: "pointer",
  borderRadius: 4,
    opacity,
fontWeight: '400',
fontSize: '14px',
color: hovered ? 'red':'rgba(0, 0, 0, 0.87)',
});

const Card = ({ id, index, note, enableDnd = false, onSort }) => {
    const [isDragging, setIsDragging] = useState(false)
    const [isHovered, setIsHovered] = useState('')
  const cardRef = useRef(null);

  const [opacity, drag, preview] = useDrag({
    type: "item",
    canDrag: enableDnd,
    item: () => {
      document.body.classList.add("is-dragging");
      return { id, index, note, cardRef: cardRef.current };
    },
      collect: (monitor) => {
           setIsDragging(monitor.isDragging());
        return {
            isDragging: monitor.isDragging() ? 0 : 1
        };
      },
      end: () => {
                  setIsDragging(false)
          document.body.classList.remove("is-dragging")
      }
  });

  const [, drop] = useDrop({
    accept: "item",
      canDrop: () => enableDnd,
      drop: (item) => {
          setIsHovered(false)
          if (item.id === id) return;
          alert(`Кинуто на ${note}`)
      },
          
      hover: (item, monitor) => {
          
                  if (!cardRef.current || item.index === index || item.id === id) {
        setIsHovered(id)
        return;
      }
  
      const hoverRect = cardRef.current.getBoundingClientRect();
      const hoverMiddleY = (hoverRect.bottom - hoverRect.top) / 2;
      const hoverClientY = (monitor.getClientOffset()?.y || 0) - hoverRect.top;

      if (item.index < index && hoverClientY < hoverMiddleY) {
        return;
      }
      if (item.index > index && hoverClientY > hoverMiddleY) {
        return;
      }
setIsHovered('')
      onSort(item.index, index);
      item.index = index;
    }
  });
  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: false });
  }, [preview]);

  drag(drop(cardRef));
    const hovered = isHovered === id
  
  return (
    <div ref={cardRef} key={id} style={cardStyles({ opacity, isDragging,hovered  })}>
      {note}
    </div>
  );
};

export default Card;
