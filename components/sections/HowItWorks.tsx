"use client";

import { useTranslations } from "next-intl";

/** "From first call to full rollout" steps section */
export function HowItWorks() {
	const t = useTranslations("howItWorks");

	const steps = [0, 1, 2, 3].map((i) => ({
		title: t(`steps.${i}.title`),
		description: t(`steps.${i}.description`),
	}));

	return (
		<section className="bg-slate-100 px-4 py-12 lg:py-16">
			<div className="mx-auto flex w-full max-w-2xl flex-col items-start gap-8 lg:max-w-6xl lg:items-center lg:gap-12">
				<h2 className="text-left font-bold text-title-md lg:mb-4 lg:text-center">
					{t("title")}
				</h2>

				<div className="flex w-full flex-col gap-8 lg:flex-row lg:justify-between lg:gap-12 xl:gap-16">
					{steps.map((step, index) => (
						<div key={index} className="flex h-full w-full flex-col gap-4">
							<span className="flex h-7 w-7 items-center justify-center rounded-sm bg-blue-600 text-white text-body-xl lg:h-8 lg:w-8">
								{index + 1}
							</span>
							<article className="flex w-full flex-col gap-1 lg:gap-4">
								<h3 className="font-bold text-title-xs">{step.title}</h3>
								<p className="text-slate-500 text-body-md">{step.description}</p>
							</article>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
