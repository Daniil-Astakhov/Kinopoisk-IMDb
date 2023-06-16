import Header from "@/components/header/header/Header";
import Footer from "@/components/header/footer/Footer";
export default function PagesLayout({ children }) {
  return (
    <section>
      <Header />

      {children}
      <Footer />
    </section>
  );
}
