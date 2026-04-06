import "@/App.css";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CEOLetter from "@/components/CEOLetter";
import ServicesSection from "@/components/ServicesSection";
import SolutionsSection from "@/components/SolutionsSection";
import CaseStudies from "@/components/CaseStudies";
import TechStack from "@/components/TechStack";
import StatsSection from "@/components/StatsSection";
import Industries from "@/components/Industries";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import BlogResources from "@/components/BlogResources";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Header />
      <HeroSection />
      <CEOLetter />
      <ServicesSection />
      <SolutionsSection />
      <CaseStudies />
      <TechStack />
      <StatsSection />
      <Industries />
      <WhyChooseUs />
      <Testimonials />
      <BlogResources />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
