"use client";

import { useTranslations } from "next-intl";
import { TractianLogo } from "@/components/ui/TractianLogo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useState } from "react";
import { ChevronDown } from "@/components/ui/ChevronDown";
import Link from "next/link";
interface HeaderProps {
  onGetDemo: () => void;
}

export function Header({ onGetDemo }: HeaderProps) {
	const t = useTranslations("nav");
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	const navItems = [
		{ label: t("solutions"), hasDropdown: true },
		{ label: t("whoWeServe"), hasDropdown: true },
		{ label: t("resources"), hasDropdown: true },
		{ label: t("company"), hasDropdown: true },
		{ label: t("pricing"), hasDropdown: true },
	];

	return (
		<nav className="sticky top-0 z-40 flex w-full flex-col items-center justify-center bg-slate-100 border-b border-slate-200 transition-colors duration-150 ease-in-out">
			<div className="flex w-full max-w-screen-2xl items-center justify-between px-4 py-2 lg:px-8 lg:py-0">
				{/* ===== DESKTOP NAV ===== */}
				<div className="hidden h-full w-full items-center justify-between lg:flex">
					{/* Left: logo + nav items */}
					<section className="flex items-center gap-x-4">
						<figure className="fill-blue-600">
							<Link aria-label="Tractian Logo" href="/">
								<TractianLogo className="w-32 fill-blue-600" />
							</Link>
						</figure>

						<div className="flex h-[72px] items-center">
							{navItems.map((item) => (
								<section key={item.label} className="flex h-full items-center pl-4 xl:pl-8">
									<div className="group flex cursor-pointer items-center gap-x-2">
										<p className="select-none font-medium text-slate-500 hover:text-blue-600 group-hover:text-blue-600 text-body-md">
											{item.label}
										</p>
										{item.hasDropdown && (
											<ChevronDown className="h-3 w-3 text-slate-500 group-hover:text-blue-600" />
										)}
									</div>
								</section>
							))}
						</div>
					</section>

					{/* Right: language, login, get demo */}
					<section className="flex items-center gap-x-8 lg:gap-4 xl:gap-x-8">
						<LanguageSwitcher />
						<a
							className="block text-center font-medium text-slate-500 hover:text-blue-600 text-body-md lg:hidden xl:block"
							href="https://app.tractian.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							{t("login")}
						</a>
						<button
							className="max-w-fit rounded-sm transition ease-in-out duration-150 text-center text-blue-600 outline outline-1 outline-blue-600 hover:outline-2 active:outline-4 text-body-md px-4 py-2"
							type="button"
							onClick={onGetDemo}
						>
							{t("getDemo")}
						</button>
					</section>
				</div>

				{/* ===== MOBILE NAV ===== */}
				<div className="w-full overflow-hidden lg:hidden">
					<div className="flex w-full items-center justify-between">
						<figure className="fill-blue-600">
							<Link aria-label="Tractian Logo" href="/">
								<TractianLogo className="w-32 fill-blue-600" />
							</Link>
						</figure>
						<figure className="flex items-center justify-center">
							<button
								className="flex h-10 w-10 items-center justify-center"
								type="button"
								aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
								onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
							>
								{mobileMenuOpen ? (
									<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600">
										<path d="M18 6L6 18" stroke="currentColor" strokeWidth="1.5" />
										<path d="M6 6L18 18" stroke="currentColor" strokeWidth="1.5" />
									</svg>
								) : (
									<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600">
										<path d="M0.599609 4.5V3H23.3996V4.5H0.599609Z" fill="currentColor" />
										<path d="M0.599609 13V11.5H23.3996V13H0.599609Z" fill="currentColor" />
										<path d="M0.599609 21.5V20H23.3996V21.5H0.599609Z" fill="currentColor" />
									</svg>
								)}
							</button>
						</figure>
					</div>

					{/* Mobile menu slide-in */}
					<div
						className={`fixed top-[56px] z-9999 bg-white transition-all duration-150 ${
							mobileMenuOpen ? "right-0 w-full" : "-right-full w-0"
						}`}
						style={{
							height: "calc(100dvh - 56px)",
							overflowY: "auto",
							overflowX: "hidden",
							WebkitOverflowScrolling: "touch",
						}}
					>
						<div className="pt-4">
							{navItems.map((item) => (
								<div key={item.label} className="w-full">
									<button
										aria-label="Open Navbar Button"
										className="flex w-full items-center justify-between px-4 py-3 hover:brightness-125"
									>
										<p className="text-slate-500 text-body-md">{item.label}</p>
										<ChevronDown className="h-4 w-4 text-slate-500" />
									</button>
								</div>
							))}

							{/* Language switcher (mobile) */}
							<div className="w-full px-4 py-4">
								<LanguageSwitcher />
							</div>

							{/* Login + Get Demo */}
							<div className="flex items-center justify-between gap-4 px-4 py-6">
								<div className="w-full">
									<Link
										className="block w-full rounded-sm transition ease-in-out duration-150 text-center text-blue-600 outline-1 outline-blue-600 hover:outline-2 text-body-md px-4 py-2"
										href="https://app.tractian.com"
										target="_blank"
										rel="noopener noreferrer"
									>
										{t("login")}
									</Link>
								</div>
								<button
									className="w-full max-w-full rounded-sm transition ease-in-out duration-150 text-center bg-blue-600 text-white font-medium text-body-md px-4 py-2 hover:bg-blue-900 active:bg-blue-950"
									type="button"
									onClick={() => {
										setMobileMenuOpen(false);
										onGetDemo();
									}}
								>
									{t("getDemo")}
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}
