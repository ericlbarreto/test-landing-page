"use client";

import { useTranslations } from "next-intl";

const LOGOS = [
	{
		name: "Georgia Aquarium",
		src: "https://imgix.tractian.com/website/components/company-logos/georgiaAquarium.png",
		maxWidth: 70,
		width: 305,
		height: 224,
	},
	{
		name: "Air Liquide",
		src: "https://imgix.tractian.com/website/components/company-logos/airLiquide.png",
		maxWidth: 120,
		width: 500,
		height: 96,
	},
	{
		name: "Scotts Miracle Gro",
		src: "https://imgix.tractian.com/website/pages/home/v3/general/carousel-logos/CustomerScottsMiracleGro.png",
		maxWidth: 140,
		width: 140,
		height: 20,
	},
	{
		name: "Ingredion",
		src: "https://imgix.tractian.com/website/components/company-logos/ingredion.png",
		maxWidth: 75,
		width: 300,
		height: 192,
	},
	{
		name: "Kraft Heinz",
		src: "https://imgix.tractian.com/website/components/company-logos/kraftHeinz.png",
		maxWidth: 118,
		width: 473,
		height: 80,
	},
	{
		name: "Whirlpool",
		src: "https://imgix.tractian.com/website/components/company-logos/whirlpool.png",
		maxWidth: 96,
		width: 289,
		height: 96,
	},
	{
		name: "CSX",
		src: "https://imgix.tractian.com/website/components/company-logos/csx.png",
		maxWidth: 74,
		width: 419,
		height: 200,
	},
	{
		name: "Verizon",
		src: "https://imgix.tractian.com/website/components/company-logos/verizon.png",
		maxWidth: 90,
		width: 446,
		height: 100,
	},
	{
		name: "Kubota",
		src: "https://imgix.tractian.com/website/components/company-logos/kubota.png",
		maxWidth: 85,
		width: 377,
		height: 80,
	},
	{
		name: "Cummins",
		src: "https://imgix.tractian.com/website/components/company-logos/cummins.png",
		maxWidth: 50,
		width: 222,
		height: 224,
	},
	{
		name: "Mauser",
		src: "https://imgix.tractian.com/website/components/company-logos/mauser.png",
		maxWidth: 105,
		width: 469,
		height: 144,
	},
	{
		name: "Greif",
		src: "https://imgix.tractian.com/website/components/company-logos/greif.png",
		maxWidth: 72,
		width: 303,
		height: 96,
	},
];

function LogoItem({
	logo,
	scaleMobile = true,
}: {
  logo: (typeof LOGOS)[number];
  scaleMobile?: boolean;
}) {
	return (
		<figure className="mx-auto flex w-full max-w-fit shrink-0 items-center justify-center transition duration-300">
			<div className="inline-flex" style={{ maxWidth: `${logo.maxWidth}px` }}>
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img
					alt={`${logo.name} logo`}
					loading="lazy"
					width={logo.width}
					height={logo.height}
					decoding="async"
					className={`h-auto w-full object-contain pointer-events-none select-none ${
						scaleMobile ? "scale-[0.7] lg:scale-100" : ""
					}`}
					style={{ color: "transparent" }}
					src={`${logo.src}?auto=format%2Ccompress&cs=origin&fit=max&q=75&w=640`}
				/>
			</div>
		</figure>
	);
}

export function TrustedBy() {
	const t = useTranslations("trustedBy");

	return (
		<section className="w-full overflow-hidden px-0 pt-4 lg:px-4 lg:pb-16">
			<div className="mx-auto flex w-full max-w-full flex-col items-center gap-8 lg:gap-12">
				{/* Section subtitle */}
				<h2 className="mx-auto max-w-2xl px-4 text-center text-slate-500 text-body-md lg:px-0">
					{t("title")}
				</h2>

				{/* Mobile: infinite scroll carousel */}
				<div className="w-full overflow-hidden lg:hidden">
					<div className="flex w-full flex-col">
						<section className="overflow-hidden">
							<section className="relative h-20 lg:h-28">
								<div className="carousel-track flex items-center gap-12">
									{/* Render logos 4x for seamless infinite scroll */}
									{[...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS].map(
										(logo, index) => (
											<LogoItem key={`${logo.name}-${index}`} logo={logo} />
										)
									)}
								</div>
							</section>
						</section>
					</div>
				</div>

				{/* Desktop: 6-column grid */}
				<div className="mx-auto hidden w-full flex-wrap justify-center gap-12 lg:grid lg:max-w-6xl lg:grid-cols-6 lg:items-center lg:justify-center">
					{LOGOS.map((logo) => (
						<div
							key={logo.name}
							className="flex w-full items-center justify-center"
						>
							<div
								className="inline-flex"
								style={{ maxWidth: `${logo.maxWidth}px` }}
							>
								{/* eslint-disable-next-line @next/next/no-img-element */}
								<img
									alt={`${logo.name} logo`}
									loading="lazy"
									width={logo.width}
									height={logo.height}
									decoding="async"
									className="h-auto w-full object-contain"
									style={{ color: "transparent" }}
									src={`${logo.src}?auto=format%2Ccompress&cs=origin&fit=max&q=75&w=640`}
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
