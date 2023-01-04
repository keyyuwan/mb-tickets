import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import { LinkContent } from "./styles";

interface ActiveLinkProps extends LinkProps {
  icon: ReactElement;
  text: string;
}

export function ActiveLink({ icon, text, ...rest }: ActiveLinkProps) {
  const { asPath } = useRouter();

  const isActive = asPath === rest.href;

  return (
    <Link {...rest}>
      <LinkContent isActive={isActive}>
        {icon}
        <span>{text}</span>
      </LinkContent>
    </Link>
  );
}
