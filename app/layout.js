import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import FooterComponent from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Wholystic Haven",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <FooterComponent />
      </body>
    </html>
  );
}
