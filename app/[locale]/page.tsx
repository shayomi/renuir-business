import { HomeHero } from '@/components/home/HomeHero';
import { AudienceRoutes } from '@/components/home/AudienceRoutes';
import { HowItWorks } from '@/components/home/HowItWorks';
import { BusinessBridge } from '@/components/home/BusinessBridge';
import { RecoveryFAQ } from '@/components/home/RecoveryFAQ';
import { ClosingCTA } from '@/components/home/ClosingCTA';

const SECTIONS = [HomeHero, AudienceRoutes, HowItWorks, BusinessBridge, RecoveryFAQ, ClosingCTA];

export default function Home() {
  return <main id="main-content" className="overflow-hidden">{SECTIONS.map(Component => <Component key={Component.name} />)}</main>;
}
