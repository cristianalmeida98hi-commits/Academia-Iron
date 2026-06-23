import { useState } from "react";
import DemoBanner from "./components/DemoBanner";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Planos from "./components/Planos";
import Aulas from "./components/Aulas";
import Testimonials from "./components/Testimonials";
import Contato from "./components/Contato";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import SEOInspector from "./components/SEOInspector";
import EnrollModal from "./components/EnrollModal";

export default function App() {
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | undefined>(undefined);

  const handleOpenEnroll = (planId?: string) => {
    setSelectedPlan(planId);
    setIsEnrollOpen(true);
  };

  const handleCloseEnroll = () => {
    setIsEnrollOpen(false);
    setSelectedPlan(undefined);
  };

  return (
    <div id="iron-pulse-app-root" className="min-h-screen bg-brand-black text-gray-100 flex flex-col font-sans overflow-x-hidden selection:bg-brand-red selection:text-white">
      
      {/* Permanent Demo / High Fidelity Amostra Banner */}
      <DemoBanner />

      {/* Permanent Header Navigation */}
      <Header onOpenEnroll={handleOpenEnroll} />

      {/* Main Layout Blocks */}
      <main className="flex-grow">
        {/* Banner with instant CTA triggers */}
        <Hero onOpenEnroll={() => handleOpenEnroll("fit")} />

        {/* Structure and Highlights of the GYM */}
        <Sobre />

        {/* Dynamic subscription cards */}
        <Planos onOpenEnroll={handleOpenEnroll} />

        {/* Class Schedules and calendar */}
        <Aulas />

        {/* Social reviews feedback */}
        <Testimonials />

        {/* Reach and Contact details */}
        <Contato />
      </main>

      {/* FOOTER links and indexing hooks */}
      <Footer />

      {/* Fixed quick conversational CTA */}
      <WhatsAppButton />

      {/* Custom active Search Inspector (Presentation Tool) */}
      <SEOInspector />

      {/* Subscription capture lightbox form */}
      <EnrollModal
        isOpen={isEnrollOpen}
        onClose={handleCloseEnroll}
        selectedPlanId={selectedPlan}
      />

    </div>
  );
}
