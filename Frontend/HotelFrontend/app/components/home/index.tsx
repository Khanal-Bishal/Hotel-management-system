import { cn } from '~/lib/utils';
import HeroSection from './HeroSection';
import HomeBanner from './HomeBanner';

export default function HomeLayout() {
  return (
    // <div className="relative h-[35rem] bg-black/[0.96]">
    //   <div
    //     className={cn(
    //       'pointer-events-none absolute inset-0 [background-size:40px_40px] select-none',
    //       '[background-image:linear-gradient(to_right,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.07)_1px,transparent_1px)]'
    //     )}
    //   />
    <main className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-8 py-2 lg:py-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <HeroSection />
          <HomeBanner />
        </div>
      </div>
    </main>
    // </div>
  );
}
