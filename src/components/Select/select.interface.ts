import { ControllerRenderProps, FieldError } from "react-hook-form";
import { IFieldProps } from "../Field/form.interface";

export interface selectOptions {
  value: string;
  label: string;
}
export interface ISelectProps extends IFieldProps {
  error: FieldError | undefined | any;
  field: ControllerRenderProps<any, any>;
  isMulti?: boolean;
  isLoading?: boolean;
}
