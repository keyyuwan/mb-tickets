import { ThreeDots } from "react-loader-spinner";
import { useTheme } from "styled-components";

interface LoadingProps {
  width: string;
  height: string;
}

export function Loading({ width, height }: LoadingProps) {
  const theme = useTheme();

  return (
    <ThreeDots
      height={height}
      width={width}
      radius="9"
      color={theme.colors.pink}
      ariaLabel="three-dots-loading"
    />
  );
}
