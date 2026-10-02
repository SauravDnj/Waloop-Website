import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PlatformPageView } from "@/components/platform/PlatformPageView";
import { getPlatformArea, platformAreas } from "@/lib/platform";

export const dynamicParams = false;

export function generateStaticParams() {
  return platformAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: PageProps<"/platform/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const area = getPlatformArea(slug);
  if (!area) return {};
  return { title: area.seo.title, description: area.seo.description };
}

export default async function PlatformAreaPage({ params }: PageProps<"/platform/[slug]">) {
  const { slug } = await params;
  const area = getPlatformArea(slug);
  if (!area) notFound();
  return <PlatformPageView area={area} />;
}
