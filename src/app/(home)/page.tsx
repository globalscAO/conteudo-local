import About from "./components/About";
import Discussions from "./components/Discussions";
import Guests from "./components/Guests";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import SpecialGuests from "./components/SpecialGuests";
import WhatExpect from "./components/WhatExpect";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Partners />
      <WhatExpect />
      <SpecialGuests />
      <Guests />
      <Discussions />
    </div>
  );
}
