"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { useState, useRef, useEffect } from "react";
import { GlobeIcon } from "@/components/ui/GlobeIcon";
import { ChevronDown } from "@/components/ui/ChevronDown";

const localeLabels: Record<Locale, string> = {
	en: "English (United States)",
	pt: "Português (Brasil)",
	es: "Español",
};

export function LanguageSwitcher() {
	const locale = useLocale() as Locale;
	const router = useRouter();
	const pathname = usePathname();
	const [isOpen, setIsOpen] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		function handleClickOutside(e: MouseEvent) {
			if (ref.current && !ref.current.contains(e.target as Node)) {
				setIsOpen(false);
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	function switchLocale(newLocale: Locale) {
		router.replace(pathname, { locale: newLocale });
		setIsOpen(false);
	}

	return (
		<div ref={ref} className="relative inline-flex w-full flex-col py-4 lg:w-auto lg:max-w-none lg:flex-row lg:px-0 lg:py-2">
			<button
				aria-label="Switch Language Button"
				className="group flex w-full items-center justify-between gap-x-2 rounded-sm px-4 py-1 text-body-sm focus:outline-none lg:bg-transparent lg:px-2 xl:pl-3 xl:text-body-md"
				onClick={() => setIsOpen(!isOpen)}
				aria-expanded={isOpen}
				aria-haspopup="listbox"
			>
				<div className="flex items-center gap-x-4">
					<figure>
						<GlobeIcon />
					</figure>
					<p className="font-medium text-slate-500 transition-all duration-150 text-body-sm group-hover:text-blue-600 lg:hidden">
						{localeLabels[locale]}
					</p>
				</div>
				<ChevronDown className={`h-4 w-4 lg:h-3 lg:w-3 ${isOpen ? "rotate-180" : ""}`} />
			</button>

			{isOpen && (
				<ul
					role="listbox"
					className="absolute left-0 top-full z-50 mt-1 w-56 rounded-lg border border-slate-200 bg-white py-1 shadow-lg lg:right-0 lg:left-auto"
				>
					{routing.locales.map((loc) => (
						<li key={loc}>
							<button
								role="option"
								aria-selected={loc === locale}
								onClick={() => switchLocale(loc)}
								className={`w-full px-4 py-2 text-left text-body-sm transition-colors ${
									loc === locale
										? "bg-blue-50 text-blue-600 font-medium"
										: "text-slate-500 hover:bg-slate-50 hover:text-blue-600"
								}`}
							>
								{localeLabels[loc]}
							</button>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
