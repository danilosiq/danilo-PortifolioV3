import "@/core/styles/tailwind-config.css";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
const geistSans = Geist({
  variable: "--font-geist-poppins",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Danilo Dante Siqueira",
  description: "Bem vindo ao meu site portifólio!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} font-mono bg-background antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
