'use client';

import Hero from '@/components/Hero';
import Intro1 from '@/components/Intro1';
import Intro2 from '@/components/Intro2';
import Recipes from '@/components/Recipes';
import Testimonial from '@/components/Testimonial';
import Instagram from '@/components/Instagram';

export default function Home() {
  return (
    <div className="scroll-smooth">
      <Hero />
      <Intro1 />
      <Intro2 />
      <Recipes />
      <Testimonial />
      <Instagram />
    </div>
  );
}
