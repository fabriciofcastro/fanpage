import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.scss";
import Header from "@/pages/header/Header";
import Main from "@/components/Main";
import Footer from "@/pages/footer/Footer";


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600']
});

export const metadata: Metadata = {
  title: "Fabrício Castro",
  description: "Portifolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={ poppins.className }>
        <Main >
          <Header />
          { children }
          <Footer />
        </Main>
      </body>
    </html>
  );
}
