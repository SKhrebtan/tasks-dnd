import { useEffect, useRef, useState } from "react";
import { useDragDropManager } from "react-dnd";
import Card from "./Card";

const SCROLL_SPEED = 5;
const BOUND_HEIGHT = 70;

const containerStyles = {
  display: "flex",
  width: '486px',
  flexDirection: "column",
  gap: 8,
  background: "white",
};

const CARDS = Array.from({ length: 20 }).map((_, idx) => ({
  id: Date.now() + idx * 1000,
  note: `Task ${1 + idx}`
}));

const Container = () => {
  const [cards, setCards] = useState(CARDS);
  const [isHovered, setIsHovered] = useState('')
  const containerRef = useRef(null);
  const handleHover = (id) => {
  setIsHovered(id)
}
  const dndManager = useDragDropManager();
  const monitor = dndManager.getMonitor();

  useEffect(() => {
    const unsubscribe = monitor.subscribeToOffsetChange(() => {
      handleScroll(monitor.getSourceClientOffset()?.y);
    });
    return unsubscribe;
  }, [monitor]);

  const handleScroll = (offsetY) => {
    if (!!containerRef.current && !!offsetY) {
      const scrollTop = containerRef.current.scrollTop;
      const { top, bottom } = containerRef.current.getBoundingClientRect();
      if (offsetY > bottom - BOUND_HEIGHT) {
        return (containerRef.current.scrollTop = scrollTop + SCROLL_SPEED);
      }
      if (offsetY < top + BOUND_HEIGHT) {
        return (containerRef.current.scrollTop = scrollTop - SCROLL_SPEED);
      }
    }
  };

  const handleSort = (dragIdx, hoverIdx) => {
    setCards((prev) => {
      const newCards = prev.slice();
      const removed = newCards.splice(dragIdx, 1);
      newCards.splice(hoverIdx, 0, removed[0]);
      return newCards;
    });
  };

  return (
    <div ref={containerRef} style={containerStyles}>
      {cards.map((card, idx) => (
        <Card
          key={card.id}
          index={idx}
          {...card}
          enableDnd
          handleHover={handleHover}
          hoveredItemId={isHovered}
          onSort={handleSort}
        />
      ))}
    </div>
  );
};

export default Container;
