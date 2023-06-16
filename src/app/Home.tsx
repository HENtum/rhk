"use client";
import { FC } from "react";
import styles from "./home.module.scss";
import AboutComp from "../components/AboutC/AboutComp";
import ToLink from "@/components/ToLink/ToLink";
import Cookies from "js-cookie";

const Home: FC = () => {
  return (
    <div className="container">
      <ToLink title="Перейти к заполнению формы" link="/form" />
      <AboutComp />
    </div>
  );
};

export default Home;
