import HeroSection from '@/react-app/components/HeroSection';
import ServicesOverview from '@/react-app/components/ServicesOverview';
import StatsSection from '@/react-app/components/StatsSection';
import CoreValues from '@/react-app/components/CoreValues';
import NewsPreview from '@/react-app/components/NewsPreview';
import CTASection from '@/react-app/components/CTASection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesOverview />
      <StatsSection />
      <CoreValues />
      <NewsPreview />
      <CTASection />
    </div>
  );
}
