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
  title: {
    absolute: "",
    default: " Dev Concept | Desenvolvedor de website institucionais",
    template: "%s | Desenvolvedor de website institucionais"
  },
  openGraph: {
    title: "Dev Concept | Desenvolvedor de website institucionais",

  },
  description: "Criamos o site de sua empresa",
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
