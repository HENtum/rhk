import { ButtonHTMLAttributes, HTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

export interface IFieldProps {
  placeholder: string;
  error?: FieldError | undefined;
}

type TypeInputField = HTMLAttributes<HTMLInputElement> & IFieldProps;

export interface IField extends TypeInputField {
  type: "text" | "number";
}
