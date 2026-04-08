import HeroSection from "../components/HeroSection";
import CEOLetter from "../components/CEOLetter";
import ServicesSection from "../components/ServicesSection";
import SolutionsSection from "../components/SolutionsSection";
import CaseStudies from "../components/CaseStudies";
import TechStack from "../components/TechStack";
import StatsSection from "../components/StatsSection";
import Industries from "../components/Industries";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import BlogResources from "../components/BlogResources";
import ContactForm from "../components/ContactForm";
import AnimatedSection from "../components/AnimatedSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AnimatedSection><CEOLetter /></AnimatedSection>
      <AnimatedSection><ServicesSection /></AnimatedSection>
      <AnimatedSection><SolutionsSection /></AnimatedSection>
      <CaseStudies />
      <TechStack />
      <AnimatedSection><StatsSection /></AnimatedSection>
      <AnimatedSection><Industries /></AnimatedSection>
      <AnimatedSection><WhyChooseUs /></AnimatedSection>
      <AnimatedSection><Testimonials /></AnimatedSection>
      <AnimatedSection><BlogResources /></AnimatedSection>
      <ContactForm />
    </>
  );
}
