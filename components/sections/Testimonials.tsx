"use client";

import { useState, useRef } from "react";
import { useTranslations } from "next-intl";

import { QuoteIcon } from "@/components/ui/QuoteIcon";
import { G2Badge } from "@/components/ui/G2Badge";

const AVATAR_URLS = [
	"https://imgix.tractian.com/website/pages/who-we-serve/plant-manager/en/paul-v2.png",
	"https://imgix.tractian.com/website/pages/who-we-serve/plant-manager/en/nicholas.png",
	"https://imgix.tractian.com/website/pages/who-we-serve/plant-manager/en/fabiano.png",
	"https://imgix.tractian.com/website/pages/who-we-serve/plant-manager/en/andy.png",
];

function TestimonialCard({
	quote,
	name,
	role,
	company,
	avatarUrl,
	showG2Badge,
}: {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatarUrl: string;
  showG2Badge?: boolean;
}) {
	return (
		<div className="flex h-auto w-full cursor-grab flex-col gap-4 sm:cursor-default">
			{/* Icons row */}
			<div className="flex w-full items-center gap-4">
				<QuoteIcon />
				{showG2Badge && <G2Badge />}
			</div>

			{/* Quote text */}
			<p className="h-full text-slate-500 text-body-md">{quote}</p>

			{/* Author info */}
			<div className="flex items-center gap-3 lg:justify-between">
				<figure className="flex h-12 w-12 items-center justify-center rounded-full lg:h-14 lg:w-14">
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img
						alt={name}
						loading="lazy"
						width={120}
						height={120}
						decoding="async"
						className="h-full w-full rounded-full object-cover"
						style={{ color: "transparent" }}
						src={`${avatarUrl}?auto=format%2Ccompress&cs=origin&fit=max&q=75&w=256`}
					/>
				</figure>
				<article className="flex w-full flex-1 flex-col">
					<p className="font-bold text-body-sm">{name}</p>
					<p className="text-body-sm">{role}</p>
					<p className="font-bold text-body-sm">{company}</p>
				</article>
			</div>
		</div>
	);
}

export function Testimonials() {
	const t = useTranslations("testimonials");
	const [activeDot, setActiveDot] = useState(0);

	/* Touch/swipe tracking */
	const touchStartX = useRef(0);
	const touchEndX = useRef(0);
	const SWIPE_THRESHOLD = 50;

	const handleTouchStart = (e: React.TouchEvent) => {
		touchStartX.current = e.touches[0].clientX;
	};

	const handleTouchMove = (e: React.TouchEvent) => {
		touchEndX.current = e.touches[0].clientX;
	};

	const handleTouchEnd = () => {
		const diff = touchStartX.current - touchEndX.current;

		if (Math.abs(diff) < SWIPE_THRESHOLD) return;

		if (diff > 0 && activeDot < 3) {
			setActiveDot((prev) => prev + 1);
		} else if (diff < 0 && activeDot > 0) {
			setActiveDot((prev) => prev - 1);
		}
	};

	const items = [0, 1, 2, 3].map((i) => ({
		quote: t(`items.${i}.quote`),
		name: t(`items.${i}.name`),
		role: t(`items.${i}.role`),
		company: t(`items.${i}.company`),
		avatarUrl: AVATAR_URLS[i],
		showG2Badge: i === 1,
	}));

	return (
		<section className="w-full bg-white py-12 sm:px-4 lg:py-16 xl:px-0">
			<div className="item-center mx-auto flex w-full max-w-2xl flex-col items-center gap-8 md:gap-12 lg:max-w-6xl">
				{/* Section heading */}
				<h2 className="px-4 text-left font-bold text-title-md sm:px-0 lg:text-center">
					{t("title")}
				</h2>

				{/* Desktop grid — hidden on mobile */}
				<div className="hidden h-auto w-full items-stretch gap-8 sm:grid sm:grid-cols-2 lg:flex lg:flex-row lg:justify-between lg:gap-12">
					{items.map((item, index) => (
						<TestimonialCard key={index} {...item} />
					))}
				</div>

				{/* Mobile carousel — visible only on mobile */}
				<div className="flex w-full sm:hidden">
					<div className="relative flex w-full">
						<section className="relative mx-auto w-full max-w-full">
							<div
								className="relative z-20 max-w-full overflow-hidden"
								onTouchStart={handleTouchStart}
								onTouchMove={handleTouchMove}
								onTouchEnd={handleTouchEnd}
							>
								{/* Slides wrapper */}
								<div
									className="flex touch-pan-y transition-transform duration-300 ease-in-out"
									style={{
										transform: `translateX(calc(-${activeDot} * (100% - 48px) + 16px))`,
									}}
								>
									{items.map((item, index) => (
										<div
											key={index}
											className="mb-12 w-[calc(100%-48px)] shrink-0 pr-6 first:ml-0"
											style={{ minWidth: "calc(100% - 48px)" }}
										>
											<TestimonialCard {...item} />
										</div>
									))}
								</div>

								{/* Pagination dots */}
								<div className="flex justify-center gap-2">
									{items.map((_, index) => (
										<button
											key={index}
											className={`h-2 w-2 rounded-full transition-colors ${
												activeDot === index ? "bg-blue-600" : "bg-slate-300"
											}`}
											onClick={() => setActiveDot(index)}
											aria-label={`Go to testimonial ${index + 1}`}
										/>
									))}
								</div>
							</div>
						</section>
					</div>
				</div>
			</div>
		</section>
	);
}
