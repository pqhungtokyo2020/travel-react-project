import "./globals.css";

import { Footer, NavBar } from "@components";

export const metadata = {
  title: "Travel",
  description: "Discover world's most beautiful places and travel destinations.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='relative'>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
