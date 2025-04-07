import { Press_Start_2P } from "next/font/google";
import { GeistSans } from 'geist/font';
import "./globals.css";

const pixelFont = Press_Start_2P({
  weight: '400',
  subsets: ["latin"],
  variable: "--font-pixel",
});

export const metadata = {
  title: "CalEnder - A Calendar App for Endermen",
  description: "The first calendar app designed specifically for Endermen, featuring a soothing dark interface that's easy on Enderman eyes.",
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/apple-icon.png',
  },
};

export const viewport = {
  themeColor: '#000000',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${pixelFont.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
