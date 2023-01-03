import { StyledTitle } from "./styles";

interface TitleProps {
  title: string;
}

export function Title({ title }: TitleProps) {
  return <StyledTitle>{title}</StyledTitle>;
}
