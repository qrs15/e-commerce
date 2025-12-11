import { Inter, Knewave } from "next/font/google";
import "./globals.css";
import Header from "./(components)/Header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const knewave = Knewave({
  variable: "--font-knewave",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Thunder",
  description: "E-commerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${knewave.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
