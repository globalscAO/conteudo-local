import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

const poppins = Poppins({
  weight: "300",
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Fórum: O IMPACTO DO SECTOR FINANCEIRO NO CONTEÚDO LOCAL",
  description: `Participe do Fórum sobre o impacto do setor financeiro no conteúdo local, uma extensão do debate realizado durante a 5ª Plenária da 4ª Edição da Mesa Redonda com CEOs. Descubra insights valiosos sobre o futuro do setor financeiro e sua relação com os negócios locais.`,
  openGraph: {
    type: "website",
    title: "Fórum: O IMPACTO DO SECTOR FINANCEIRO NO CONTEÚDO LOCAL",
    description: `Participe do Fórum sobre o impacto do setor financeiro no conteúdo local, uma extensão do debate realizado durante a 5ª Plenária da 4ª Edição da Mesa Redonda com CEOs. Entenda como o setor financeiro influencia os negócios locais.`,
    url: "https://conteudolocal.globalsc.ao",
    siteName: "Fórum Impacto Financeiro",
    images: [
      {
        url: "/plenaria/1.JPG",
        width: 1200,
        height: 630,
        alt: "Fórum sobre o impacto do setor financeiro no conteúdo local",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-PT">
      <Analytics />
      <body className={`${poppins} antialiased`}>{children}</body>
    </html>
  );
}
