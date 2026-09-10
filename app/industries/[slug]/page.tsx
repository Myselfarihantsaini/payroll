import { notFound } from 'next/navigation';
import { industries } from '../../content';
import { IndustryPage } from '../../site';
export function generateStaticParams() {
  return industries.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const i = industries.find((i) => i.slug === slug);
  return {
    title: i
      ? `${i.name} Payroll & Compliance — Ordin`
      : 'Industry not found — Ordin',
    description: i?.desc,
  };
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!industries.some((i) => i.slug === slug)) notFound();
  return <IndustryPage slug={slug} />;
}
