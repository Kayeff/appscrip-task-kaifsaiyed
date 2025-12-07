import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import ReduxProvider from "./components/common/Provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Appscrip Task",
  description:
    "A functional Next.js e-commerce app with just HTML & CSS which is both functional and responsive.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.className}`} suppressHydrationWarning>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
