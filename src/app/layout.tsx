import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "../themes/themes.css"
import Header from "@/pages/header/Header";
import Footer from "@/pages/footer/Footer";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600']
});

export const metadata: Metadata = {
  
  title: {
    default: "Website Fabrício Castro",
    template: '%s | Fabrício Castro'
  },
  description: "Bem-vindo ao meu Site. Meu nome é Fabrício Castro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={ poppins.className }>
       
          <Header />
          { children }
          <Footer />
       
      </body>
    </html>
  );
}
