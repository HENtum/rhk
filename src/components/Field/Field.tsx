"use client";

import { forwardRef, useEffect, useState } from "react";
import style from "./field.module.scss";
import { IField } from "./form.interface";

const Field = forwardRef<HTMLInputElement, IField>(
  ({ placeholder, error, type = "text", ...rest }, ref) => {
    const [err, setErr] = useState(false);
    useEffect(() => {
      setErr(true);
      setTimeout(() => {
        setErr(false);
      }, 10000);
    }, [error]);

    return (
      <div>
        <label className={style.label}>
          <span>{placeholder}</span>
          <input ref={ref} type={type} {...rest} />
        </label>
        {error && err && <div className={style.error}>{error?.message}</div>}
      </div>
    );
  }
);

Field.displayName = "Field";
export default Field;
