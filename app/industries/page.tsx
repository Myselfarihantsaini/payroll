import { Shell, PageHero, IndustryGrid, Callout } from '../site';
export const metadata = { title: 'Industries — Ordin' };
export default function Page() {
  return (
    <Shell>
      <PageHero
        label="Industries"
        title="Where your people work."
        description="Payroll and compliance support shaped around your workforce, locations and operating needs."
      />
      <IndustryGrid />
      <Callout />
    </Shell>
  );
}
