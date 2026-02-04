import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SobreNosotros from "@/components/SobreNosotros";
import QueHacemos from "@/components/QueHacemos";
import MiembrosAliados from "@/components/MiembrosAliados";
import NoticiasEventos from "@/components/NoticiasEventos";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--cream)]">
      <Header />
      <Hero />
      <div className="h-px w-full bg-[var(--border-light)]" />
      <SobreNosotros />
      <div className="h-px w-full bg-[var(--border-light)]" />
      <QueHacemos />
      <div className="h-px w-full bg-[var(--border-light)]" />
      <MiembrosAliados />
      <div className="h-px w-full bg-[var(--border-light)]" />
      <NoticiasEventos />
      <div className="h-px w-full bg-[var(--border-light)]" />
      <Contacto />
      <Footer />
    </div>
  );
}
