"use lient";

import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import style from "./about-comp.module.scss";
import { IForm } from "@/app/form/input.iterface";

const AboutComp = () => {
  const [params, setParams] = useState<IForm>();
  useEffect(() => {
    const params = Cookies.get("about");
    params && setParams(JSON.parse(params));
  }, []);

  return (
    <div className="container">
      {params && (
        <div className={style.root}>
          <p>
            Привет {params.name} вы из {params.fromCountry} и вам {params.age}{" "}
            {params.age < 6
              ? params.age < 5
                ? params.age < 2
                  ? "годик"
                  : "годика"
                : "годиков"
              : "лет"}
          </p>
        </div>
      )}
    </div>
  );
};

export default AboutComp;
