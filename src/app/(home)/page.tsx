import { Metadata } from "next";
import Home from "./Home";

export const metadata: Metadata = {
  title:
    "Página Inicial - Fórum: O IMPACTO DO SECTOR FINANCEIRO NO CONTEÚDO LOCAL",
  description: `Participe do Fórum sobre o impacto do setor financeiro no conteúdo local, uma extensão do debate realizado durante a 5ª Plenária da 4ª Edição da Mesa Redonda com CEOs. Descubra insights valiosos sobre o futuro do setor financeiro e sua relação com os negócios locais.`,
  keywords: [
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

    "finanças sustentáveis Angola",
    "educação financeira em Angola",
    "CEOs e inovação local",
    "desenvolvimento económico Angola",
    "debate sobre economia angolana",
    "discussão sobre setor financeiro em Luanda",
    "empoderamento econômico local",
    "estratégias de investimento Angola",
    "melhoria do conteúdo local com apoio financeiro",

    "plataforma de debate Angola",
    "evento sobre economia local",
    "eventos sobre finanças em Luanda",
    "como o setor financeiro ajuda o conteúdo local",
    "impacto das empresas financeiras no conteúdo local",
    "finanças locais e desenvolvimento comunitário",
  ],
  openGraph: {
    type: "website",
    title:
      "Página Inicial - Fórum: O IMPACTO DO SECTOR FINANCEIRO NO CONTEÚDO LOCAL",
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

export default function Page() {
  return (
    <>
      <Home />
    </>
  );
}
