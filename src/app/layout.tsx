import Footer from "@/components/footer/footer";
import { cn } from "@/lib/utils";
import Header from "@/pages/header/header";
import { ThemeProvider } from "@/providers/ThemeProvider/theme-provider";
import type { Metadata } from "next";
import { Inter as FontSa } from "next/font/google";
import "../styles/globals.css";

const inter = FontSa({ subsets: ["latin"] });

const fontSa = FontSa({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fabriciofcastro.com.br/"),
  title: {
    default: " Dev Concept | Desenvolvedor de website institucionais",
    template: "%s | Desenvolvedor de front-end"
  },
  openGraph: {
    title: "Dev Concept | Desenvolvedor front-end",
    type: "website",
    locale: "pt-BR",
    url: "https://www.fabriciofcastro.com.br/",
    siteName: "Fabrício Castro Dev"

  },
  description: "Fabrício Castro desenvolvedor front-end, aqui tem parte do meu trajeto como desenvolver,  onde mostro minha paixão por software, como serviço (SaaS), website e compartilho insights sobre as soluções que construo. ",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={ cn(
        "min-h-screen bg-background font-sans antialiased",{"debug-screens" : process.env.NODE_ENV === "development"},
        fontSa.variable
      ) }>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem 
        >
          <Header />
          { children }
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
