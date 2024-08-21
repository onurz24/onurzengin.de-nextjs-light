import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./assets/styles/globals/globals.scss";
import { StoreProvider } from "@/store/StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Onur Zengin Webentwicklung",
  description: "Online Präsenz erschaffen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="de">
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
        </head>
        <body className={inter.className}>
          
          {children}
        </body>
      </html>
    </StoreProvider>
  );
}