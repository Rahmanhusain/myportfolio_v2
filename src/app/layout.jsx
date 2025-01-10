import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hey, I'm Rahman Husain",
  description: "I'm Rahman Husain, a software engineering  Enthusiast with a knack for solving problems and creating seamless digital experiences. Explore my work and let's connect!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div id="wrapper" className="wrapper">
        </div>
        {children}
      </body>
    </html>
  );
}
