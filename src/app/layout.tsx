import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: "300",
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Fórum: O IMPACTO DO SECTOR FINANCEIRO NO CONTEÚDO LOCAL",
  description: `O Fórum sobre "O Impacto do Setor Financeiro no Conteúdo Local" é um desdobramento do debate realizado durante a 5ª Plenária da 4ª Edição da Mesa Redonda com CEOs.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-PT">
      <body className={`${poppins} antialiased`}>{children}</body>
    </html>
  );
}
