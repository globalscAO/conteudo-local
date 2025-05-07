import Footer from "../ui/Footer";
import Header from "../ui/Header";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-[url(/background.png)] bg-cover">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
