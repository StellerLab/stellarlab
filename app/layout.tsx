import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
 
const taipeiSansTCBeta = localFont({
  src: './fonts/TaipeiSansTCBeta-Bold.ttf',
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${taipeiSansTCBeta.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
