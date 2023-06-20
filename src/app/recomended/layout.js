import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function RecomendLayout({ children }) {
  return (
    <div className="container">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
