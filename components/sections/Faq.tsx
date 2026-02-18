"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

import { ChevronArrow } from "@/components/ui/ChevronArrow";

function FaqItem({
	question,
	answer,
	isOpen,
	onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
	return (
		<button
			className="group w-full border border-slate-300 rounded-sm bg-transparent p-4 transition hover:border-blue-600"
			onClick={onToggle}
			aria-expanded={isOpen}
		>
			<div
				className={`${isOpen ? "mb-2" : "mb-0"} flex w-full items-center justify-between gap-3 transition-all`}
			>
				<h3
					className={`text-left font-medium text-body-md lg:font-semibold transition-all group-hover:brightness-110 ${
						isOpen
							? "text-blue-600"
							: "text-slate-700 group-hover:text-blue-600"
					}`}
				>
					{question}
				</h3>
				<ChevronArrow isOpen={isOpen} />
			</div>
			<p
				className="overflow-hidden text-left text-slate-500 ease-in-out text-body-md"
				style={{
					maxHeight: isOpen ? "400px" : "0px",
					transition: "0.2s",
				}}
			>
				{answer}
			</p>
		</button>
	);
}

export function Faq() {
	const t = useTranslations("faq");
	const [openIndex, setOpenIndex] = useState(0);

	const items = Array.from({ length: 17 }, (_, i) => ({
		question: t(`items.${i}.question`),
		answer: t(`items.${i}.answer`),
	}));

	return (
		<div className="relative w-full bg-slate-100 py-12 lg:py-16">
			<section className="mx-auto flex max-w-2xl flex-col items-center gap-8 px-4 lg:max-w-6xl lg:gap-16">
				<article className="flex w-full flex-col items-center gap-2 lg:gap-4">
					<p className="text-center uppercase text-blue-600 text-body-md">
						{t("eyebrow")}
					</p>
					<h2 className="text-center font-semibold text-title-md lg:font-bold lg:text-title-lg">
						{t("title")}
					</h2>
				</article>

				<div className="flex flex-col gap-y-6">
					{items.map((item, index) => (
						<FaqItem
							key={index}
							question={item.question}
							answer={item.answer}
							isOpen={openIndex === index}
							onToggle={() =>
								setOpenIndex(openIndex === index ? -1 : index)
							}
						/>
					))}
				</div>
			</section>
		</div>
	);
}
