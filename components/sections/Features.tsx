"use client";

import { useState, useEffect, useCallback } from "react";
import { useTranslations } from "next-intl";

const TAB_IMAGES = [
	"reports-for-scalability",
	"operational-oversight",
	"multisite-visibility",
	"no-labor-gaps",
];

export function Features() {
	const t = useTranslations("features");
	const [activeTab, setActiveTab] = useState(1);

	const TOTAL_TABS = 4;
	const AUTO_ROTATE_MS = 5000;

	const goToNext = useCallback(() => {
		setActiveTab((prev) => (prev + 1) % TOTAL_TABS);
	}, []);

	useEffect(() => {
		const timer = setInterval(goToNext, AUTO_ROTATE_MS);

		return () => clearInterval(timer);
	}, [activeTab, goToNext]);

	const tabs = [0, 1, 2, 3].map((i) => ({
		label: t(`tabs.${i}.label`),
		title: t(`tabs.${i}.title`),
		description: t(`tabs.${i}.description`),
		bullets: [0, 1, 2, 3, 4].map((j) => t(`tabs.${i}.bullets.${j}`)),
		image: `https://imgix.tractian.com/website/pages/who-we-serve/plant-manager/en/${TAB_IMAGES[i]}.png`,
	}));

	const active = tabs[activeTab];

	return (
		<section
			className="relative w-full bg-white px-4 py-12 lg:px-16 lg:py-20"
			style={{ overflowAnchor: "none" }}
		>
			<div className="mx-auto flex max-w-xl flex-col items-center gap-8 text-slate-700 lg:max-w-6xl lg:gap-12">
				<article className="flex w-full flex-col items-start gap-4 lg:items-center">
					<h2 className="mt-4 w-full text-left font-bold text-title-md lg:text-center">
						{t("title")}
					</h2>
				</article>

				<section className="w-full">
					<div className="mx-auto flex w-full flex-col gap-12">
						<div className="relative mx-auto mt-2 flex w-full flex-col bg-[#F4F4F9] py-1 sm:flex-row sm:bg-transparent sm:py-0 lg:mt-0">
							{tabs.map((tab, index) => (
								<div
									key={index}
									className={`ease relative col-span-1 flex w-full items-center justify-center border-b px-1 pb-[3px] pt-1 transition-all duration-300 sm:px-0 sm:py-0 ${
										activeTab === index
											? "rounded-md border-transparent bg-[#F4F4F9] sm:rounded-none sm:border-b-blue-600 sm:bg-transparent"
											: "border-transparent bg-[#F4F4F9] transition-all duration-100 sm:border-b-slate-300 sm:bg-white sm:duration-300 lg:hover:bg-transparent"
									}`}
								>
									<button
										className={`w-full rounded-sm px-6 py-1.5 transition-all duration-100 text-body-md sm:w-auto sm:items-start sm:p-4 sm:duration-300 sm:text-[11px] md:text-body-sm lg:rounded-none lg:px-2 lg:text-body-md xl:px-4 2xl:px-6 ${
											activeTab === index
												? "bg-white font-semibold text-slate-700 shadow-sm sm:bg-transparent sm:font-bold sm:shadow-none"
												: "bg-white font-semibold text-slate-500 shadow-sm sm:bg-transparent sm:font-bold sm:shadow-none hover:text-slate-600"
										}`}
										aria-label="Select Tab"
										onClick={() => setActiveTab(index)}
									>
										{tab.label}
									</button>
								</div>
							))}

							<hr
								className="absolute bottom-0 hidden transition-all duration-500 xl:block xl:border xl:border-blue-600"
								style={{
									width: `${100 / tabs.length}%`,
									left: `${(activeTab * 100) / tabs.length}%`,
								}}
							/>
						</div>

						<article className="flex w-full justify-between gap-8 lg:gap-12">
							<div className="flex w-full flex-col items-center justify-between gap-8 transition duration-500 ease-in-out lg:min-h-[437px] lg:flex-row lg:gap-16">
								<div className="flex w-full flex-col gap-8 lg:max-w-[382px] lg:gap-12">
									<article className="flex flex-col items-center gap-4 lg:max-w-[382px] lg:items-start">
										<h2 className="font-bold text-title-xs">{active.title}</h2>
										<p className="text-slate-500 text-body-md">
											{active.description}
										</p>
										<ul className="ml-4 flex w-full list-disc flex-col gap-1">
											{active.bullets.map((bullet, i) => (
												<li key={i} className="text-slate-500 text-body-md">
													{bullet}
												</li>
											))}
										</ul>
									</article>
								</div>

								<figure className="w-full rounded-sm">
									<div className="relative">
										<button
											className="absolute inset-0 block cursor-zoom-in"
											type="button"
											aria-label="Zoom In"
										>
											<div className="group absolute inset-0 flex h-full w-full items-center justify-center" />
										</button>
										{/* eslint-disable-next-line @next/next/no-img-element */}
										<img
											alt={active.title}
											loading="lazy"
											width={1920}
											height={1080}
											decoding="async"
											className="object-contain"
											src={`${active.image}?auto=format%2Ccompress&cs=origin&fit=max&q=75&w=3840`}
											style={{ color: "transparent" }}
										/>
									</div>
								</figure>
							</div>
						</article>
					</div>
				</section>
			</div>
		</section>
	);
}
