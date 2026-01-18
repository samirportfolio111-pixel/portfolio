import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import Preloader from "@/layout/Preloader";

// Global CSS
import "./globals.css";

// Template CSS (from public/assets/css)
import "@css/animate.min.css";
import "@css/bootstrap.min.css";
import "@css/flaticon.min.css";
import "@css/fontawesome-5.14.0.min.css";
import "@css/nice-select.min.css";
import "@css/slick.min.css";
import "@css/style.css";

// Google Fonts
import { DM_Sans, Inter } from "next/font/google";

// Load fonts properly
const inter = Inter({
  subsets: ["latin"],
  weight: ["100","300","400","500","700","900"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["100","300","400","500","700","900"],
  display: "swap",
});

export const metadata = {
  title: "Samir Valimbe - Creative Portfolio",
  description: "Graphic Designer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.className} ${dmSans.className} scroll-smooth`}>
      <body>
        <Preloader />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
