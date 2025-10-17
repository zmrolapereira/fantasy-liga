import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Fantasy Liga Portugal",
  description: "A tua fantasy da Liga Portugal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body className="min-h-screen">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
