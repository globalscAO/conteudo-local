import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";

const poppins = Poppins({
  weight: "300",
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Fórum: O Impacto do Setor Financeiro no Conteúdo Local",
  description:
    "Descubra como o setor financeiro está moldando o conteúdo local. Participe do fórum e explore insights estratégicos da 5ª Plenária da Mesa Redonda com CEOs.",
  keywords: [
    // Palavras-chave principais
    "fórum setor financeiro",
    "conteúdo local",
    "mesa redonda CEOs",
    "impacto financeiro Angola",
    "evento setor financeiro Luanda",
    "debate sobre finanças em Angola",
    "impacto das finanças no conteúdo local",
    "setor financeiro angolano",
    "finanças em Angola",
    "negócios locais e finanças",
    "evento de CEOs em Angola",
    "fórum sobre conteúdo local",
    "Global Services Corporation",
    "evento GSC Angola",
    "GSC Luanda fórum",
    "mesa redonda CEOs Angola",
    "finanças e conteúdo local",
    "conteúdo local em Angola",
    "iniciativas financeiras Angola",
    "investimento local Angola",

    // SEO local
    "evento em Luanda",
    "conferência em Luanda 2025",
    "eventos corporativos Angola",
    "eventos empresariais Luanda",
    "setor privado Angola",
    "fórum Angola 2025",
    "debate empresarial Luanda",
    "fórum empresarial Angola",
    "GSC Angola evento",
    "empresas de Angola finanças",

    // Long-tail (cauda longa)
    "como o setor financeiro afeta o conteúdo local",
    "impacto do setor financeiro nos negócios locais",
    "desenvolvimento local com apoio financeiro",
    "debate sobre o setor financeiro angolano",
    "conteúdo local e crescimento econômico",
    "estratégias financeiras para negócios locais",
    "financiamento e conteúdo cultural local",
    "fórum de líderes financeiros em Angola",
    "relação entre CEOs e economia local",
    "setor bancário e conteúdo local",

    // Institucional / educacional
    "finanças sustentáveis Angola",
    "educação financeira em Angola",
    "CEOs e inovação local",
    "desenvolvimento económico Angola",
    "debate sobre economia angolana",
    "discussão sobre setor financeiro em Luanda",
    "empoderamento econômico local",
    "estratégias de investimento Angola",
    "melhoria do conteúdo local com apoio financeiro",

    // Variantes úteis
    "plataforma de debate Angola",
    "evento sobre economia local",
    "eventos sobre finanças em Luanda",
    "como o setor financeiro ajuda o conteúdo local",
    "impacto das empresas financeiras no conteúdo local",
    "finanças locais e desenvolvimento comunitário",
  ],
  openGraph: {
    type: "website",
    title: "Fórum: O Impacto do Setor Financeiro no Conteúdo Local",
    description:
      "Descubra como o setor financeiro molda o conteúdo local. Veja os destaques do evento com CEOs.",
    url: "https://conteudolocal.globalsc.ao",
    siteName: "Fórum Impacto Financeiro",
    images: [
      {
        url: "https://conteudolocal.globalsc.ao/plenaria/1.JPG",
        width: 1200,
        height: 630,
        alt: "Evento sobre o impacto do setor financeiro",
      },
    ],
  },
  alternates: {
    canonical: "https://conteudolocal.globalsc.ao",
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
      {/* Google Tag Manager */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=AW-942628907"></Script>
      <Script
        id="gtag-init"
        strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-942628907');`}
      </Script>
    </html>
  );
}
