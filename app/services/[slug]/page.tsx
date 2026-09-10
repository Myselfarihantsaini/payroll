import { notFound } from 'next/navigation';
import { services } from '../../content';
import { ServicePage } from '../../site';
export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = services.find((s) => s.slug === slug);
  return {
    title: s ? `${s.title} — Ordin` : 'Service not found — Ordin',
    description: s?.desc,
  };
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!services.some((s) => s.slug === slug)) notFound();
  return <ServicePage slug={slug} />;
}
