import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TrustedBrands from '@/components/TrustedBrands';
import FeaturesSection from '@/components/FeaturesSection';
import CTASection from '@/components/CTASection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <TrustedBrands />
      <FeaturesSection />
      <CTASection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
