import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import FeaturedQawalis from "@/components/home/FeaturedQawalis";
import SufiQuotes from "@/components/home/SufiQuotes";
import YouTubeCTA from "@/components/home/YouTubeCTA";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturedQawalis />
      <SufiQuotes />
      <YouTubeCTA />
    </Layout>
  );
};

export default Index;
