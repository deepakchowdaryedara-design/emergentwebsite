import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { ArrowRight } from "lucide-react";
import HeroAnimatedBackdrop from "./HeroAnimatedBackdrop";
import { CONTACT_TOPIC, contactFormTo } from "../lib/contactIntent";

export default function HeroSection() {
  return (
    <section id="hero" data-testid="hero-section" className="sticky top-0 w-full aspect-video max-h-screen bg-[#F0F4F8] z-0 overflow-hidden">
      <HeroAnimatedBackdrop video="/hero/hero-background.mp4" bgDark={false} />
    </section>
  );
}
