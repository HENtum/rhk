import type { Metadata } from "next";
import Form from "./Form";

export const metadata: Metadata = {
  title: `form-page | ${process.env.SITE_NAME}`,
  description: "form-page",
};

export default function Page() {
  return <Form />;
}
