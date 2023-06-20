import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function allMoviesLayout({ children }) {
  return (
    <div className="container">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
