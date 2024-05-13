import type {Metadata} from "next";
import {IBM_Plex_Mono} from 'next/font/google'

import "./globals.css";
import Navbar from "@/components/navbar";
import {Web3ModalProvider} from "@/config/Web3Modal";

const plexmono = IBM_Plex_Mono(
  {weight: "400", subsets: ["latin"]},
);

export const metadata: Metadata = {
  title: "Behmoth Fight",
  description: "Battle with on-chain AI Behmoth",
  openGraph: {
    images: [""],
    description: "Battle with on-chain AI 'Behmoth'"
  }
};


export default function RootLayout(
  {
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>
) {
  return (
    <html lang="en">
    <body className="bg-brand-blue">
      <div className="h-screen bg-fight bg-no-repeat bg-contain bg-center">
        <Navbar />
        <Web3ModalProvider>{children}</Web3ModalProvider>
      </div>
    </body>
    </html>
  );
}
