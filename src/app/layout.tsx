import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { HeadBar } from "@/components/head-bar";
import { GlobalContextProvider } from "@/components/global-context-provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "de[map] 2.0",
  description: "de[map] 2.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex h-screen flex-col">
          <GlobalContextProvider>
            <HeadBar></HeadBar>
            {children}
          </GlobalContextProvider>
        </div>
      </body>
    </html>
  );
}
