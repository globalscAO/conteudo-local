"use client";

import { useEffect, useRef } from "react";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Discussions from "./components/Discussions";
import Guests from "./components/Guests";
import Hero from "./components/Hero";
import HowToParticipate from "./components/HowToParticipate";
import Partners from "./components/Partners";
import SpecialGuests from "./components/SpecialGuests";
import WhatExpect from "./components/WhatExpect";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    sectionsRef.current.forEach((section) => {
      if (section) {
        gsap.fromTo(
          section,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });
  }, []);

  return (
    <div>
      <Hero />
      <About externalRef={(el) => (sectionsRef.current[0] = el)} />
      <Partners externalRef={(el) => (sectionsRef.current[1] = el)} />
      <WhatExpect externalRef={(el) => (sectionsRef.current[2] = el)} />
      <SpecialGuests externalRef={(el) => (sectionsRef.current[3] = el)} />
      <Guests externalRef={(el) => (sectionsRef.current[4] = el)} />
      <Discussions externalRef={(el) => (sectionsRef.current[5] = el)} />
      <HowToParticipate externalRef={(el) => (sectionsRef.current[6] = el)} />
      <ContactUs externalRef={(el) => (sectionsRef.current[7] = el)} />
    </div>
  );
}
