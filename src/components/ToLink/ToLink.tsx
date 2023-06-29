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
    <Link href={link}>
      <div className={style.link}>{title}</div>
    </Link>
  );
};

export default ToLink;
