"use client";

import { useTranslations } from "next-intl";

interface CtaBannerProps {
  onGetDemo: () => void;
}

export function CtaBanner({ onGetDemo }: CtaBannerProps) {
	const t = useTranslations("ctaBanner");

	return (
		<section className="w-full bg-[url('https://tractian-webpage.s3.us-east-1.amazonaws.com/website/pages/who-we-serve/maintenance-engineer/en/more-than-machines.png')] bg-cover bg-right bg-no-repeat 2xl:min-h-[475px] 3xl:min-h-[525px] 4xl:min-h-[560px]">
			<div className="relative z-10 flex w-full max-w-full justify-center bg-blue-950 bg-opacity-95 px-4 py-12 md:max-w-[50%] md:justify-end md:bg-opacity-80 lg:px-12 lg:py-16 xl:px-0 xl:py-20 xl:pl-16 2xl:min-h-[475px] 2xl:items-center 2xl:pl-16 3xl:min-h-[525px] 3xl:pl-12 4xl:min-h-[560px]">
				<div className="flex w-full max-w-full flex-col items-center gap-8 md:max-w-[318px] md:items-start lg:max-w-full xl:max-w-[576px]">
					<article className="relative z-20 flex w-full flex-col items-center gap-4 md:items-start">
						<h2 className="text-center font-bold text-white text-title-lg md:text-left">
							{t("title")}
							<br />
							{t("titleLine2")}
						</h2>
					</article>
					<button
						className="max-w-fit rounded-sm w-full transition ease-in-out duration-150 disabled:cursor-not-allowed text-center bg-blue-600 text-white font-medium text-body-md px-4 py-2 hover:bg-blue-900 active:bg-blue-950 disabled:bg-slate-300 relative z-30 mx-auto md:mx-0"
						type="button"
						onClick={onGetDemo}
					>
						{t("cta")}
					</button>
				</div>
			</div>
		</section>
	);
}
