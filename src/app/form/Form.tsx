"use client";

import ToLink from "@/components/ToLink/ToLink";
import { IForm } from "@/app/form/input.iterface";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Cookies from "js-cookie";
import style from "./form.module.scss";
import { useRouter } from "next/navigation";

import FormFields from "@/components/FormFields/FormFields";

const Form: FC = () => {
  const { register, handleSubmit, formState, control } = useForm<IForm>({
    mode: "onChange",
  });

  const { push } = useRouter();

  const onSubmit: SubmitHandler<IForm> = ({
    age,
    fromCountry,
    name,
    selectJanre,
  }) => {
    const abouts = { name, fromCountry, age, selectJanre };
    Cookies.set("about", JSON.stringify(abouts));
    push("./");
  };

  return (
    <div className="container">
      <ToLink title="Вернуться" link="./" />
      <div className={style.formRoot}>
        <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
          {
            <FormFields
              register={register}
              formState={formState}
              control={control}
            />
          }
          <button className={style.button} type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
