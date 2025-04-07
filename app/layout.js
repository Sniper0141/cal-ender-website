import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata = {
  title: "CalEnder - A Calendar App for Endermen",
  description: "The first calendar app designed specifically for Endermen, featuring a soothing dark mode interface that's easy on Enderman eyes.",
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: 'any',
      },
      {
        url: '/icon.png',
        type: 'image/png',
        sizes: '32x32',
      },
      {
        url: '/icon-192.png',
        type: 'image/png',
        sizes: '192x192',
      },
      {
        url: '/icon-512.png',
        type: 'image/png',
        sizes: '512x512',
      },
    ],
    apple: [
      {
        url: '/apple-icon.png',
        type: 'image/png',
        sizes: '180x180',
      },
    ],
  },
  themeColor: '#000000',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={geist.variable}>
      <body>
        {children}
      </body>
    </html>
  );
}
