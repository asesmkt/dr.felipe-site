import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { ManifestoSection } from '@/components/ManifestoSection';
import { ApproachSection } from '@/components/ApproachSection';
import { HealthPillarsSection } from '@/components/HealthPillarsSection';
import { SpecialtiesSection } from '@/components/SpecialtiesSection';
import { ImpactBanner } from '@/components/ImpactBanner';
import { AboutSection } from '@/components/AboutSection';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { FAQSection } from '@/components/FAQSection';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ManifestoSection />
        <ApproachSection />
        <HealthPillarsSection />
        <SpecialtiesSection />
        <ImpactBanner />
        <AboutSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <FAQSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
