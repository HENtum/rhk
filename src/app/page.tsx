import { Metadata } from "next";
import Home from "./Home";

export const metadata: Metadata = {
  title: `${process.env.SITE_NAME}`,
  description: "Practice react-hook-form",
  authors: [{ name: "HENtum" }],
  robots: "index",
};

export default function HomePage() {
  return <Home />;
}
