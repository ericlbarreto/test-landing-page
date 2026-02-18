import { redirect } from "next/navigation";

/**
 * Root locale page redirects to the plant-manager page.
 */
export default async function LocaleRoot({
	params,
}: {
  params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	redirect(`/${locale}/who-we-serve/plant-manager`);
}
