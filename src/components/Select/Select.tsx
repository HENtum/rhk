import React, { FC, useEffect, useState } from "react";
import style from "./select.module.scss";
import Select, { OnChangeValue } from "react-select";
import makeAnimated from "react-select/animated";
import { ISelectProps, selectOptions } from "./select.interface";

export const SelectComp: FC<ISelectProps> = ({
  error,
  field,
  placeholder,
  isMulti,
}) => {
  const options: selectOptions[] = [
    {
      value: "Comedy",
      label: "Comedy",
    },
    {
      value: "Fantasy",
      label: "Fantasy",
    },
    {
      value: "Action",
      label: "Action",
    },
    {
      value: "Drama",
      label: "Drama",
    },
    {
      value: "Detective",
      label: "Detective",
    },
  ];
  const animated = makeAnimated();
  const [isLoading, setIsLoading] = useState(false);

  const [err, setErr] = useState(false);
  useEffect(() => {
    setErr(true);
    setTimeout(() => {
      setErr(false);
    }, 10000);
  }, [error]);

  const setValue = (
    newValue: unknown | OnChangeValue<selectOptions, boolean>
  ) => {
    setIsLoading(true);
    field.onChange(
      isMulti
        ? (newValue as selectOptions[]).map((item) => item.value)
        : (newValue as selectOptions).value
    );
    setIsLoading(false);
  };

  const getValue = () => {
    if (field.value) {
      return isMulti
        ? options.filter((option) => field.value.indexOf(option.value) >= 0)
        : options.find((option) => option.value === field.value);
    } else {
      return isMulti ? [] : "";
    }
  };

  return (
    <div>
      <Select
        classNamePrefix={"custom-select"}
        className={style.select}
        options={options}
        closeMenuOnSelect={false}
        isMulti={isMulti}
        components={animated}
        isSearchable={false}
        placeholder={placeholder}
        defaultValue={options[0]}
        onChange={setValue}
        value={getValue()}
        isLoading={isLoading}
      />
      {error && err && <div className={style.error}>{error.message}</div>}
    </div>
  );
};
