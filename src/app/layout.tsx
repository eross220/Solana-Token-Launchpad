import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "./providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mirage Launchpad Beta Version",
  description: "Mirage Launchpad Beta Version. Creating an SPL Token on the Solana blockchain. This application allows you to easily create a custom token on Solana",
  icons:{
    icon: [
      {
        url: '/solana-sol-logo.svg',
        type: 'image/svg+xml',
      }
    ],
    shortcut: '/solana-sol-logo.svg',
    apple: '/solana-sol-logo.svg'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
