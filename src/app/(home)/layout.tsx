import { Metadata } from "next";
import Footer from "../ui/Footer";
import Header from "../ui/Header";

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

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-secondary">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
