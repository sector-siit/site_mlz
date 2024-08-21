import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import FlowbyteTheme from "./components/FlowbyteTheme";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SECTOR SIIT - Municipio de Lomas de Zamora",
  description: "Pagina del municipio de lomas de zamora creado por el SIIT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <FlowbyteTheme>
        <body className="font-geometria">
          <Header />
          <main className="mx-auto pt-8">{children}</main>
          <Footer />
        </body>
      </FlowbyteTheme>
    </html>
  );
}
