"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

function CheckmarkIcon() {
	return (
		<svg fill="none" height="14" viewBox="0 0 25 25" width="18" xmlns="http://www.w3.org/2000/svg">
			<path d="M2.02344 11.5L10.0234 19.5M2.02344 11.5L10.0234 19.5" stroke="#fff" strokeWidth="1.8" />
			<path d="M9.02344 19.5L23.0234 5.5" stroke="#fff" strokeWidth="1.8" />
		</svg>
	);
}

const tabImages = [
	"https://imgix.tractian.com/website/pages/who-we-serve/plant-manager/en/prove-the-roi.png?auto=format%2Ccompress&cs=origin&fit=max&q=75&w=1080",
	"https://imgix.tractian.com/website/pages/who-we-serve/plant-manager/en/get-ahead.png?auto=format%2Ccompress&cs=origin&fit=max&q=75&w=1080",
	"https://imgix.tractian.com/website/pages/who-we-serve/plant-manager/en/run-a-leaner.png?auto=format%2Ccompress&cs=origin&fit=max&q=75&w=1080",
	"https://imgix.tractian.com/website/pages/who-we-serve/plant-manager/en/keeps-audit-simple.png?auto=format%2Ccompress&cs=origin&fit=max&q=75&w=1080",
];

export function WhyChoose() {
	const t = useTranslations("whyChoose");
	const [activeIndex, setActiveIndex] = useState(0);

	const items = [0, 1, 2, 3].map((i) => ({
		title: t(`items.${i}.title`),
		description: t(`items.${i}.description`),
	}));

	return (
		<section className="w-full bg-slate-100 px-4 py-12 lg:py-16" style={{ overflowAnchor: "none" }}>
			<div className="mx-auto flex w-full max-w-2xl flex-col gap-8 lg:max-w-6xl lg:gap-16">
				{/* Header */}
				<article className="flex w-full flex-col gap-4">
					<p className="uppercase text-blue-600 text-body-md">
						{t("eyebrow")}
					</p>
					<h2 className="font-bold text-title-lg">
						{t("title")}
					</h2>
				</article>

				{/* Content: accordion + image */}
				<div className="flex w-full flex-col items-start gap-8 lg:min-h-[360px] lg:flex-row lg:justify-between">
					{/* Left: accordion tabs */}
					<div className="flex h-[316px] w-full flex-col gap-4 border-l-2 border-slate-300 xs:h-auto lg:gap-6">
						{items.map((item, index) => {
							const isActive = activeIndex === index;
							return (
								<button
									key={index}
									className={`group h-full w-full bg-transparent px-4 transition-all duration-300 -ml-[2px] border-l-2 ${
										isActive ? "border-blue-500" : "border-slate-300"
									}`}
									aria-label="Select Tab"
									onClick={() => setActiveIndex(index)}
								>
									{/* Tab header: checkbox + title */}
									<div className={`${isActive ? "mb-2" : "mb-0"} flex w-full items-center gap-3 transition-all duration-500 lg:justify-between`}>
										<figure
											className={`flex h-6 w-6 items-center justify-center transition-all duration-300 ease-in-out ${
												isActive ? "bg-blue-600" : "bg-slate-400"
											}`}
										>
											<CheckmarkIcon />
										</figure>
										<h3
											className={`w-full flex-1 text-left font-medium transition-all duration-500 text-body-lg lg:font-semibold lg:text-title-xs ${
												isActive
													? "text-slate-700 group-hover:brightness-110"
													: "text-slate-400"
											}`}
										>
											{item.title}
										</h3>
									</div>

									{/* Expandable description */}
									<div
										className="overflow-hidden transition-all duration-500 ease-in-out"
										style={{ maxHeight: isActive ? "120px" : "0px" }}
									>
										<div className="flex flex-col gap-1 text-left text-slate-500 text-body-md">
											<p>{item.description}</p>
										</div>
									</div>
								</button>
							);
						})}
					</div>

					{/* Right: image */}
					<figure className="relative flex h-full w-full justify-center rounded-sm lg:h-[320px]">
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img
							alt={items[activeIndex].title}
							loading="lazy"
							width={1071}
							height={749}
							className="h-full w-full rounded-sm object-contain transition-all duration-300 ease-in-out md:object-cover lg:object-contain"
							src={tabImages[activeIndex]}
						/>
					</figure>
				</div>
			</div>
		</section>
	);
}
