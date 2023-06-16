import { Metadata } from "next";
import "./globals.scss";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  weight: ["400", "500", "600", "700"],
  style: "normal",
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${process.env.SITE_NAME}`,
  description: "Practice react-hook-form",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
