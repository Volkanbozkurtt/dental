import Banner from "./components/Banner";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <Navbar />
      <Banner />
      <Cards />
      <body>{children}</body>
    </html>
  );
}
