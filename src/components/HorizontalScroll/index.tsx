import { ReactNode, useRef } from "react";
import { CaretLeft, CaretRight } from "phosphor-react";

import { HorizontalScrollContainer, List, ScrollButton } from "./styles";

interface HorizontalScrollProps {
  children: ReactNode;
}

export function HorizontalScroll({ children }: HorizontalScrollProps) {
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

  return (
    <HorizontalScrollContainer>
      <ScrollButton onClick={scrollBack}>
        <CaretLeft weight="bold" />
      </ScrollButton>

      <List ref={horizontalScrollContainerRef}>{children}</List>

      <ScrollButton onClick={scrollForward}>
        <CaretRight weight="bold" />
      </ScrollButton>
    </HorizontalScrollContainer>
  );
}
