"use client";

import { QueryClient, QueryClientProvider } from "react-query";
import "./globals.scss";
import { Raleway } from "next/font/google";
import Message from "@/components/Message/Message";
import { Provider } from "react-redux";
import { store } from "@/store/store";

const raleway = Raleway({
  weight: ["400", "500", "600", "700"],
  style: "normal",
  display: "swap",
  subsets: ["latin"],
});

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <Message>{children}</Message>
          </QueryClientProvider>
        </Provider>
      </body>
    </html>
  );
}
{
}
