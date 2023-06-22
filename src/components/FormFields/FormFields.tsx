"use client";
import { FC } from "react";
import {
  Control,
  Controller,
  FormState,
  UseFormRegister,
} from "react-hook-form";
import Field from "@/components/Field/Field";
import { SelectComp } from "../Select/Select";

type Props = {
  register: UseFormRegister<any>;
  formState: FormState<any>;
  control: Control<any>;
};

const FormFields: FC<Props> = ({
  register,
  formState: { errors },
  control,
}) => {
  return (
    <>
      <Field
        error={errors?.name}
        type="text"
        placeholder="Name"
        {...register("name", {
          required: "Name is reqiured",
          minLength: {
            value: 3,
            message: "The name must be more than 3 characters",
          },
        })}
      />
      <Field
        error={errors?.fromCountry}
        type="text"
        placeholder="Country"
        {...register("fromCountry", {
          required: "country is reqiured",
          minLength: {
            value: 3,
            message: "The country must be more than 3 characters",
          },
        })}
      />
      <Field
        error={errors?.age}
        type="number"
        placeholder="Age"
        {...register("age", {
          required: "Age is reqiured",
          min: {
            value: 1,
            message: "You can't be less than 1 year old",
          },
        })}
      />
      <Controller
        name="selectJanre"
        control={control}
        render={({ field }) => (
          <SelectComp
            isMulti={true}
            placeholder="Choose Jenres"
            field={field}
            error={errors?.selectJanre}
          />
        )}
        rules={{ required: "Janre is required" }}
      />
    </>
  );
};

export default FormFields;
