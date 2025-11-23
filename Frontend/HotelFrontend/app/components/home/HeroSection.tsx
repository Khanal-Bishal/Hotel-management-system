import React from 'react';
import { Button } from '../ui/button';
import ColorfulText from '../common/ColorfulText';
import { TextGenerateEffect } from '../ui/text-generate-effect';
const words = `Enhance hotel operations with our intuitive dashboard for staff
          scheduling, attendance tracking, and performance insights.`;

const HeroSection = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-5xl leading-tight font-bold text-gray-900 lg:text-6xl">
          <ColorfulText colorfulContent={'Hotel'} />
          <ColorfulText colorfulContent={'Employee'} />
          <span className="text-foreground">Management</span> <br />
          <span className="text-foreground">Subsystem</span>
        </h1>
        <TextGenerateEffect words={words} className="text-foreground" />
      </div>

      {/* CTA Buttons */}
      <div className="flex items-center gap-4">
        <Button variant={'default'}>Demo 南宿云</Button>
        <Button variant="ghost">Learn More</Button>
      </div>
    </div>
  );
};

export default HeroSection;
