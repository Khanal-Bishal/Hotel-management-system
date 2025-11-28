import { cn } from '~/lib/utils';
import HeroSection from './HeroSection';
import HomeBanner from './HomeBanner';

export default function HomeLayout() {
  return (
    <main className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-8 py-2 lg:py-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <HeroSection />
          <HomeBanner />
        </div>
      </div>
    </main>
  );
}
