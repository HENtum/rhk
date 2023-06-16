"use client";
import Link from "next/link";
import style from "./to-link.module.scss";
import { FC } from "react";

type Props = {
  link: string;
  title: string;
};

const ToLink: FC<Props> = ({ link, title }) => {
  return (
    <div className={style.link}>
      <Link href={link}>{title}</Link>
    </div>
  );
};

export default ToLink;
