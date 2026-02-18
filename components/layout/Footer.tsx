"use client";

import { useTranslations } from "next-intl";
import { TractianLogo } from "@/components/ui/TractianLogo";
import Image from "next/image";

const badges = [
	{
		alt: "Front Runners",
		src: "https://imgix.tractian.com/website/components/footer/v2/front-runners.png?auto=format%2Ccompress&cs=origin&fit=max&q=75&w=384",
		maxWidth: 50,
		w: 149,
		h: 156,
	},
	{
		alt: "Forbes",
		src: "https://imgix.tractian.com/website/components/footer/v2/forbes-ai.png?auto=format%2Ccompress&cs=origin&fit=max&q=75&w=384",
		maxWidth: 60,
		w: 181,
		h: 144,
	},
	{
		alt: "AICPA",
		src: "https://imgix.tractian.com/website/components/footer/v2/aicpa-soc.png?auto=format%2Ccompress&cs=origin&fit=max&q=75&w=384",
		maxWidth: 52,
		w: 157,
		h: 156,
	},
	{
		alt: "SAP Silver Partner",
		src: "https://imgix.tractian.com/website/components/footer/v2/sap-partner.png?auto=format%2Ccompress&cs=origin&fit=max&q=75&w=640",
		maxWidth: 68,
		w: 205,
		h: 120,
	},
	{
		alt: "ISO 27001",
		src: "https://imgix.tractian.com/website/components/footer/v2/BadgeISO27001.png?auto=format%2Ccompress&cs=origin&fit=max&q=75&w=640",
		maxWidth: 90,
		w: 201,
		h: 80,
	},
	{
		alt: "Oracle Cloud",
		src: "https://imgix.tractian.com/website/components/footer/v2/oracle-cloud.png?auto=format%2Ccompress&cs=origin&fit=max&q=75&w=384",
		maxWidth: 59,
		w: 177,
		h: 138,
	},
	{
		alt: "ISO 9001",
		src: "https://imgix.tractian.com/website/components/footer/v2/iso-9001.png?auto=format%2Ccompress&cs=origin&fit=max&q=75&w=384",
		maxWidth: 42,
		w: 180,
		h: 158,
	},
	{
		alt: "Best Meets Requirements",
		src: "https://imgix.tractian.com/website/components/footer/v2/asset-management-best-meets-requirements.png?auto=format%2Ccompress&cs=origin&fit=max&q=75&w=384",
		maxWidth: 42,
		w: 180,
		h: 158,
	},
];

/* ── Link map (href per section) ────────────────────── */
const linkHrefs: Record<string, string[]> = {
	conditionMonitoring: [
		"/en/solutions/condition-monitoring/vibration-analysis",
		"/en/solutions/condition-monitoring/ai-powered-condition-monitoring",
		"/en/solutions/condition-monitoring/root-cause-and-reliability",
		"/en/solutions/condition-monitoring/downtime-prevention-and-reporting",
		"/en/solutions/condition-monitoring/sensor-specifications",
	],
	cmms: [
		"/en/solutions/cmms/maintenance-sop",
		"/en/solutions/cmms/work-order-software",
		"/en/solutions/cmms/inventory-management-software",
		"/en/solutions/cmms/preventive-maintenance-software",
		"/en/solutions/cmms/mobile-app",
	],
	oee: [
		"/en/solutions/oee/ai-production-tracking",
		"/en/solutions/oee/operator-performance",
		"/en/solutions/oee/digitalized-quality",
		"/en/solutions/oee/custom-dashboards",
		"/en/solutions/oee/energy-trac",
	],
	pricing: [
		"/en/solutions/condition-monitoring/vibration-sensor/pricing",
		"/en/solutions/cmms/pricing",
		"/en/solutions/oee",
	],
	integrations: [
		"/en/solutions/integrations/oracle-netsuite",
		"/en/solutions/integrations/sap",
		"/en/solutions/integrations/power-bi",
		"/en/solutions/integrations",
	],
	resources: [
		"/en/case-studies",
		"/en/resources",
		"/en/blog",
		"/en/assets",
		"https://releases.tractian.com/en",
		"https://academy.tractian.com/en",
		"https://faq.tractian.com/en/",
		"/en/resources/calculators/maintenance-calculators",
	],
	support: [
		"/en/about",
		"/en/referrals",
		"https://careers.tractian.com/",
		"/en/press",
		"/en/hardware-warranty",
		"/en/service-level-agreement",
		"https://trust.tractian.com/",
	],
	download: [
		"https://apps.apple.com/app/tractian/id1590498655",
		"https://play.google.com/store/apps/details?id=com.tractian.app&pli=1",
		"https://store.sap.com/dcp/en/product/display-2001016127_live_v1/tractian-ai-machine-intelligence-software",
	],
};

function FooterColumn({
	title,
	links,
	hrefs,
	borderBottom = true,
}: {
  title: string;
  links: string[];
  hrefs: string[];
  borderBottom?: boolean;
}) {
	return (
		<div
			className={`flex w-full flex-col gap-2 ${
				borderBottom
					? "border-b border-slate-300 pb-4 sm:border-transparent lg:pb-0"
					: ""
			}`}
		>
			<p className="font-bold text-slate-500 text-body-sm">{title}</p>
			{links.map((link, i) => (
				<a
					key={i}
					className="text-slate-500 text-body-sm hover:underline"
					href={hrefs[i] || "#"}
					{...(hrefs[i]?.startsWith("http") ? { target: "_blank" } : {})}
				>
					{link}
				</a>
			))}
		</div>
	);
}

function LinkedInIcon() {
	return (
		<svg fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-slate-400 transition hover:text-slate-500">
			<path d="M4.90689 19.3237C4.90814 19.6962 4.60689 19.9994 4.23439 20C4.23439 20 4.23314 20 4.23252 20H1.35752C0.985019 20.0012 0.681894 19.7 0.681269 19.3275C0.681269 19.3262 0.681269 19.325 0.681269 19.3237V7.2725C0.681269 6.89875 0.984394 6.59625 1.35752 6.59625H4.23189C4.60502 6.5975 4.90627 6.9 4.90627 7.2725V19.3231L4.90689 19.3237ZM2.79439 5.45437C1.28814 5.45437 0.0668945 4.23375 0.0668945 2.7275C0.0668945 1.22125 1.28814 0 2.79439 0C4.30064 0 5.52189 1.22125 5.52189 2.7275C5.52189 4.23375 4.30064 5.455 2.79439 5.455V5.45437ZM19.9325 19.3706C19.9338 19.7131 19.6569 19.9912 19.3144 19.9925C19.3131 19.9925 19.3119 19.9925 19.3106 19.9925H16.22C15.8775 19.9937 15.5994 19.7169 15.5981 19.3744C15.5981 19.3731 15.5981 19.3719 15.5981 19.3706V13.725C15.5981 12.8812 15.8456 10.0306 13.3925 10.0306C11.4925 10.0306 11.105 11.9812 11.0288 12.8581V19.3781C11.0288 19.7181 10.7556 19.995 10.4163 20H7.43064C7.08814 20 6.81064 19.7225 6.81064 19.38C6.81064 19.38 6.81064 19.3787 6.81064 19.3781V7.22C6.80939 6.8775 7.08627 6.59937 7.42877 6.59812C7.42877 6.59812 7.43002 6.59812 7.43064 6.59812H10.4163C10.7594 6.59812 11.0381 6.87625 11.0381 7.22V8.27062C11.7438 7.21062 12.7888 6.39625 15.02 6.39625C19.9619 6.39625 19.9294 11.0106 19.9294 13.5456L19.9331 19.3712L19.9325 19.3706Z" fill="currentColor" />
		</svg>
	);
}

function FacebookIcon() {
	return (
		<svg fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-slate-400 transition hover:text-slate-500">
			<path d="M14.2844 10.0081H11.481V20H7.32737V10.0081H5.35254V6.47641H7.32737V4.19196C7.32737 2.55637 8.10478 0 11.5193 0L14.5973 0.0121155V3.44013H12.3634C11.9999 3.44013 11.4823 3.62186 11.4823 4.40197V6.47708H14.6471L14.2844 10.0081Z" fill="currentColor" />
		</svg>
	);
}

function InstagramIcon() {
	return (
		<svg fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-slate-400 transition hover:text-slate-500">
			<path d="M15.1807 3.91566C15.6801 3.91566 16.0843 4.31988 16.0843 4.81928C16.0843 5.31868 15.6801 5.72289 15.1807 5.72289C14.6813 5.72289 14.2771 5.31868 14.2771 4.81928C14.2771 4.31988 14.6813 3.91566 15.1807 3.91566ZM14.5181 10C14.5181 12.4916 12.4916 14.5181 10 14.5181C7.50843 14.5181 5.48193 12.4916 5.48193 10C5.48193 7.50843 7.50843 5.48193 10 5.48193C12.4916 5.48193 14.5181 7.50843 14.5181 10ZM12.7108 10C12.7108 8.50301 11.497 7.28916 10 7.28916C8.50301 7.28916 7.28916 8.50301 7.28916 10C7.28916 11.497 8.50301 12.7108 10 12.7108C11.497 12.7108 12.7108 11.497 12.7108 10ZM14.5783 0C17.5675 0 20 2.43253 20 5.42169V14.5783C20 17.5675 17.5675 20 14.5783 20H5.42169C2.43253 20 0 17.5675 0 14.5783V5.42169C0 2.43253 2.43253 0 5.42169 0H14.5783ZM14.5783 1.80723H5.42169C3.42831 1.80723 1.80723 3.42831 1.80723 5.42169V14.5783C1.80723 16.5717 3.42831 18.1928 5.42169 18.1928H14.5783C16.5717 18.1928 18.1928 16.5717 18.1928 14.5783V5.42169C18.1928 3.42831 16.5717 1.80723 14.5783 1.80723Z" fill="currentColor" />
		</svg>
	);
}

function YoutubeIcon() {
	return (
		<svg fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-slate-400 transition hover:text-slate-500">
			<path d="M19.7213 5.23495C19.6163 4.35943 18.7911 3.51955 17.9273 3.40676C12.662 2.75244 7.33706 2.75244 2.0732 3.40676C1.20891 3.51907 0.383681 4.35894 0.278697 5.23495C-0.0928989 8.44454 -0.0928989 11.5565 0.278697 14.7656C0.383681 15.6411 1.20891 16.4819 2.0732 16.5938C7.33706 17.2481 12.662 17.2481 17.9273 16.5938C18.7906 16.4824 19.6163 15.6416 19.7213 14.7656C20.0929 11.557 20.0929 8.44454 19.7213 5.23495ZM8.33319 12.7377V7.26383C8.33319 7.00894 8.61738 6.85659 8.8293 6.9982L12.9349 9.73511C13.1244 9.86158 13.1244 10.1399 12.9349 10.2664L8.8293 13.0033C8.61738 13.1449 8.33319 12.9926 8.33319 12.7377Z" fill="currentColor" />
		</svg>
	);
}

function TwitterIcon() {
	return (
		<svg fill="none" viewBox="0 0 26 25" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-slate-400 transition hover:text-slate-500">
			<g clipPath="url(#clip0_footer_x)">
				<path d="M14.9475 10.587L24.2481 0H22.045L13.9659 9.19067L7.5179 0H0.0791016L9.83181 13.8993L0.0791016 25H2.28227L10.8085 15.2923L17.6195 25H25.0583M3.07744 1.62698H6.46212L22.0433 23.453H18.6578" fill="currentColor" />
			</g>
			<defs>
				<clipPath id="clip0_footer_x">
					<rect fill="white" height="25" transform="translate(0.0791016)" width="24.9792" />
				</clipPath>
			</defs>
		</svg>
	);
}

function PhoneIcon() {
	return (
		<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="h-4 w-4" strokeWidth="1.5">
			<path d="M19.64 21.25c-2.54 2.55-8.38.83-13-3.84S.2 6.9 2.75 4.36l2.78-2.79 5.37 5.37-2 2a2.18 2.18 0 0 0 0 3.06l3.1 3.1a2.18 2.18 0 0 0 3.07 0l2-2 5.37 5.37Z" style={{ fill: "none", stroke: "currentColor", strokeMiterlimit: 10 }} />
		</svg>
	);
}

function PrivacyIcon() {
	return (
		<svg className="flex w-6" fill="none" height="24" viewBox="0 0 48 24" width="48" xmlns="http://www.w3.org/2000/svg">
			<g clipPath="url(#clip0_footer_priv)">
				<rect height="22.4" rx="11.2" stroke="#94a3b8" strokeWidth="1.6" width="46.4" x="0.8" y="0.8" />
				<path d="M22.0667 23.2L28.6 0.8H36C42.1856 0.8 47.2 5.81441 47.2 12C47.2 18.1856 42.1856 23.2 36 23.2H22.0667Z" fill="#94a3b8" stroke="#94a3b8" strokeWidth="1.6" />
				<path d="M7.12019 11.4853L11.3628 15.7279L19.8481 7.24264" stroke="#94a3b8" strokeWidth="1.6" />
				<path d="M39.228 16.2426L30.7427 7.75732" stroke="#fff" strokeWidth="1.6" />
				<path d="M39.228 7.75739L30.7427 16.2427" stroke="#fff" strokeWidth="1.6" />
			</g>
			<defs>
				<clipPath id="clip0_footer_priv">
					<rect fill="#94a3b8" height="24" width="48" />
				</clipPath>
			</defs>
		</svg>
	);
}

export function Footer() {
	const t = useTranslations("footer");

	const getLinks = (section: string, count: number): string[] =>
		Array.from({ length: count }, (_, i) => t(`${section}.links.${i}`));

	return (
		<footer className="bg-slate-100 px-4 py-12 xl:px-0">
			<div className="mx-auto flex w-full max-w-6xl flex-col gap-8 lg:gap-12">
				{/* ── Top: Logo + Badges ─────────────────────── */}
				<div className="flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
					<figure className="hidden w-full sm:flex">
						<TractianLogo className="h-8 w-28 lg:h-12 lg:w-36 fill-blue-600" />
					</figure>
					<div className="flex w-full flex-wrap gap-1 sm:flex-nowrap sm:gap-2 lg:gap-6">
						{badges.map((badge) => (
							<figure
								key={badge.alt}
								style={{ maxWidth: badge.maxWidth }}
								className="flex items-center"
							>
								<Image
									alt={badge.alt}
									loading="lazy"
									width={badge.w}
									height={badge.h}
									className="scale-[0.8] object-contain sm:scale-100"
									src={badge.src}
								/>
							</figure>
						))}
					</div>
				</div>

				{/* ── Link columns ───────────────────────────── */}
				<div className="flex w-full flex-col gap-4 sm:flex-row sm:justify-between sm:gap-8 lg:gap-16">
					{/* Left: 2-col grid */}
					<div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:gap-x-16 lg:gap-y-8">
						<FooterColumn
							title={t("conditionMonitoring.title")}
							links={getLinks("conditionMonitoring", 5)}
							hrefs={linkHrefs.conditionMonitoring}
						/>
						<FooterColumn
							title={t("cmms.title")}
							links={getLinks("cmms", 5)}
							hrefs={linkHrefs.cmms}
						/>
						<FooterColumn
							title={t("oee.title")}
							links={getLinks("oee", 5)}
							hrefs={linkHrefs.oee}
						/>
						<FooterColumn
							title={t("pricing.title")}
							links={getLinks("pricing", 3)}
							hrefs={linkHrefs.pricing}
						/>
					</div>

					{/* Right: 2-col stacked groups */}
					<div className="flex w-full flex-col gap-4 md:flex-row lg:gap-16">
						<div className="flex w-full flex-col gap-4 sm:gap-8 lg:gap-12">
							<FooterColumn
								title={t("integrations.title")}
								links={getLinks("integrations", 4)}
								hrefs={linkHrefs.integrations}
							/>
							<FooterColumn
								title={t("resources.title")}
								links={getLinks("resources", 8)}
								hrefs={linkHrefs.resources}
							/>
						</div>
						<div className="flex w-full flex-col gap-4 sm:gap-8 lg:gap-12">
							<FooterColumn
								title={t("support.title")}
								links={getLinks("support", 7)}
								hrefs={linkHrefs.support}
							/>
							<FooterColumn
								title={t("download.title")}
								links={getLinks("download", 3)}
								hrefs={linkHrefs.download}
								borderBottom={false}
							/>
						</div>
					</div>
				</div>

				{/* ── Bottom bar ─────────────────────────────── */}
				<div className="mt-2 flex w-full flex-col-reverse items-center gap-2 sm:mt-0 md:flex-row md:items-start md:justify-between md:gap-4">
					{/* Left: privacy + copyright */}
					<div className="flex w-full flex-col items-center gap-2 md:items-start">
						<button className="group flex items-center gap-x-2" id="ot-sdk-btn">
							<PrivacyIcon />
							<p className="text-xs group-hover:underline sm:text-body-sm text-slate-400">
								{t("privacy")}
							</p>
						</button>
						<p className="text-xs text-slate-400 sm:text-body-sm">
							{t("copyright")}
						</p>
					</div>

					{/* Right: socials + phone + address */}
					<div className="flex w-full flex-col items-center gap-2 md:items-end">
						<div className="flex items-center gap-x-4 lg:gap-x-6">
							<a
								className="transition-all ease-in-out lg:hover:brightness-110"
								href="https://www.linkedin.com/company/get-tractian/"
								target="_blank"
								title="Linkedin"
							>
								<LinkedInIcon />
							</a>
							<a
								className="transition-all ease-in-out lg:hover:brightness-110"
								href="https://www.facebook.com/get.tractian/"
								target="_blank"
								title="Facebook"
							>
								<FacebookIcon />
							</a>
							<a
								className="transition-all ease-in-out lg:hover:brightness-110"
								href="https://www.instagram.com/get.tractian/"
								target="_blank"
								title="Instagram"
							>
								<InstagramIcon />
							</a>
							<a
								className="transition-all ease-in-out lg:hover:brightness-110"
								href="https://www.youtube.com/channel/UCmrRZOCxvMbDnR5haGfFe8w"
								target="_blank"
								title="Youtube"
							>
								<YoutubeIcon />
							</a>
							<a
								className="transition-all ease-in-out lg:hover:brightness-110"
								href="https://x.com/tractian"
								target="_blank"
								title="Twitter"
							>
								<TwitterIcon />
							</a>
							<a
								className="group relative flex items-center gap-x-2 text-slate-400 transition"
								href="tel:+18334388722"
							>
								<PhoneIcon />
								<span className="text-xs group-hover:underline sm:text-body-sm">
									{t("phone")}
								</span>
							</a>
						</div>
						<div className="flex flex-col lg:items-end">
							<a href="https://maps.app.goo.gl/DTDjgu4zXJrxbfWT9">
								<p className="text-center text-xs text-slate-400 hover:underline sm:text-body-sm md:text-right">
									{t("address")}
								</p>
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
