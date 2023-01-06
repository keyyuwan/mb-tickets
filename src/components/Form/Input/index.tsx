import { HTMLProps } from "react";
import { InputContainer, HelperText } from "./styles";

interface InputProps extends HTMLProps<HTMLInputElement> {
  label: string;
  helperText?: string;
}

export function Input({ label, helperText, ...rest }: InputProps) {
  return (
    <InputContainer>
      <label htmlFor={rest.name}>{label}</label>
      <input {...rest} />

      {helperText && <HelperText>{helperText}</HelperText>}
    </InputContainer>
  );
}
