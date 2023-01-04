import { ReactNode, useEffect, useRef, useState } from "react";
import { CaretLeft, CaretRight } from "phosphor-react";

import { HorizontalScrollContainer, List, ScrollButton } from "./styles";

interface HorizontalScrollProps {
  children: ReactNode;
}

export function HorizontalScroll({ children }: HorizontalScrollProps) {
  const [hasOverflowingChildren, setHasOverflowingChildren] = useState(false);

  const horizontalScrollContainerRef = useRef<HTMLDivElement>(null);

  function scrollForward() {
    if (horizontalScrollContainerRef.current) {
      horizontalScrollContainerRef.current.scrollLeft += 400;
    }
  }

  function scrollBack() {
    if (horizontalScrollContainerRef.current) {
      horizontalScrollContainerRef.current.scrollLeft -= 400;
    }
  }

  useEffect(() => {
    const listHasOverflowingChildren =
      horizontalScrollContainerRef.current!.offsetWidth <
      horizontalScrollContainerRef.current!.scrollWidth;

    setHasOverflowingChildren(listHasOverflowingChildren);
  }, []);

  return (
    <HorizontalScrollContainer hasOverflowingChildren={hasOverflowingChildren}>
      {hasOverflowingChildren && (
        <ScrollButton onClick={scrollBack}>
          <CaretLeft weight="bold" />
        </ScrollButton>
      )}

      <List ref={horizontalScrollContainerRef}>{children}</List>

      {hasOverflowingChildren && (
        <ScrollButton onClick={scrollForward}>
          <CaretRight weight="bold" />
        </ScrollButton>
      )}
    </HorizontalScrollContainer>
  );
}
