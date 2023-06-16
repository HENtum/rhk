"use client";
import { FC } from "react";
import { FormState, UseFormRegister } from "react-hook-form";
import Field from "@/components/Field/Field";

type Props = {
  register: UseFormRegister<any>;
  formState: FormState<any>;
};

const FormFields: FC<Props> = ({ register, formState: { errors } }) => {
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
    </>
  );
};

export default FormFields;
