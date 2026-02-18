"use client";

import { useTranslations } from "next-intl";

interface HeroProps {
  onGetDemo: () => void;
}

/** Arrow icon for CTA button */
function ArrowRight() {
	return (
		<svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M15.3671 8.03333L9.90046 13.5L9.16712 12.7667L13.4338 8.5H0.633789V7.5H13.4338L9.16712 3.23333L9.90046 2.5L15.3671 8.03333Z"
				fill="white"
			/>
		</svg>
	);
}

/** Hero section — matches Tractian's exact layout and images */
export function Hero({ onGetDemo }: HeroProps) {
	const t = useTranslations("hero");

	return (
		<section
			className="relative w-full md:bg-cover md:bg-right md:bg-no-repeat 2xl:bg-right-top 3xl:min-h-[675px] 4xl:min-h-[695px] md:bg-[url('https://tractian-webpage.s3.us-east-1.amazonaws.com/website/pages/who-we-serve/plant-manager/en/plant-manager-header-image.png')]"
		>
			{/* Left content panel */}
			<div className="relative z-10 flex w-full max-w-full justify-end bg-blue-950 bg-opacity-100 px-4 pb-12 pt-14 md:max-w-[50%] md:items-center md:bg-opacity-80 lg:px-12 lg:py-16 xl:py-20 xl:pl-16 xl:pr-24 3xl:min-h-[675px] 4xl:min-h-[695px]">
				<div className="flex w-full flex-col items-center gap-8 md:w-fit md:items-start">
					<article className="relative z-20 flex w-full flex-col items-center gap-4 md:items-start">
						<p className="text-center font-light text-white text-body-md md:text-left">
							{t("eyebrow")}
						</p>
						<h1 className="text-center font-bold text-white text-title-lg md:text-left">
							{t("title")}
						</h1>
						<p className="text-center font-light text-white text-body-md md:text-left">
							{t("description")}
						</p>
					</article>
					<button
						className="relative z-30 mx-auto flex items-center justify-center gap-2 max-w-fit rounded-sm transition ease-in-out duration-150 bg-blue-600 text-white font-medium text-body-md px-4 py-2 hover:bg-blue-900 active:bg-blue-950 md:mx-0"
						type="button"
						onClick={onGetDemo}
					>
						<p className="text-white text-label-md">{t("cta")}</p>
						<ArrowRight />
					</button>
				</div>
			</div>

			{/* Floating testimonial card — desktop only */}
			<div className="absolute inset-0 mx-auto hidden w-full items-center justify-end lg:flex 2xl:right-8 2xl:mr-0">
				<div className="flex w-full max-w-[240px] flex-col gap-4 rounded-l-sm bg-white px-4 py-4 lg:py-6 2xl:max-w-[280px] 2xl:rounded-sm 2xl:px-5 3xl:max-w-[320px] 3xl:px-6 3xl:py-7 4xl:max-w-[335px]">
					<p className="text-slate-500 text-body-sm 2xl:text-body-md 4xl:text-body-lg">
						&ldquo;{t("testimonial.quote")}&rdquo;
					</p>
					<article className="flex w-full flex-col">
						<p className="text-[13px] font-bold 2xl:text-body-sm 4xl:text-body-md">
							{t("testimonial.name")}
						</p>
						<p className="text-[13px] 2xl:text-body-sm 4xl:text-body-md">
							{t("testimonial.role")}
						</p>
						<p className="text-[13px] font-bold 2xl:text-body-sm 4xl:text-body-md">
							{t("testimonial.company")}
						</p>
					</article>
				</div>
			</div>

			{/* Mobile hero image — shown below text on small screens */}
			<figure className="flex h-[340px] w-full sm:h-[290px] md:hidden md:h-[310px]">
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img
					alt="Header Image"
					loading="lazy"
					width={2560}
					height={1980}
					className="hidden h-full w-full object-cover object-right sm:flex"
					src="https://tractian-webpage.s3.us-east-1.amazonaws.com/website/pages/who-we-serve/plant-manager/en/plant-manager-header-image.png"
				/>
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img
					alt="Header Image"
					loading="lazy"
					width={2560}
					height={1980}
					className="flex h-full w-full object-cover object-center sm:hidden"
					src="https://tractian-webpage.s3.us-east-1.amazonaws.com/website/pages/who-we-serve/plant-manager/en/plant-manager-header-image-mobile.png"
				/>
			</figure>
		</section>
	);
}
