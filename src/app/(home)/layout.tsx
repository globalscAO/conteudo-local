import Footer from "../ui/Footer";
import Header from "../ui/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-secondary">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
