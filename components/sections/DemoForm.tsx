"use client";

import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Modal } from "@/components/ui/Modal";
import type { DemoFormData, FormStatus } from "@/types";

interface DemoFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DemoForm({ isOpen, onClose }: DemoFormProps) {
	const t = useTranslations("demoForm");
	const [status, setStatus] = useState<FormStatus>("idle");

	const schema = z.object({
		firstName: z.string().min(1, t("validation.firstNameRequired")),
		lastName: z.string().min(1, t("validation.lastNameRequired")),
		email: z
			.string()
			.min(1, t("validation.emailRequired"))
			.email(t("validation.emailInvalid")),
		company: z.string().min(1, t("validation.companyRequired")),
		jobTitle: z.string().min(1, t("validation.jobTitleRequired")),
		phone: z.string().min(1, t("validation.phoneRequired")),
	});

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<DemoFormData>({
		resolver: zodResolver(schema),
	});

	async function onSubmit(data: DemoFormData) {
		setStatus("loading");

		try {
			await new Promise<void>((resolve, reject) => {
				setTimeout(() => {
					// 90% success rate for demo purposes
					if (Math.random() > 0.1) {
						resolve();
					} else {
						reject(new Error("Network error"));
					}
				}, 1500);
			});

			console.log("Form submitted:", data);
			setStatus("success");
		} catch {
			setStatus("error");
		}
	}

	function handleClose() {
		if (status === "success") {
			reset();
			setStatus("idle");
		}
		onClose();
	}

	return (
		<Modal isOpen={isOpen} onClose={handleClose} title={t("title")}>
			{/* Success state */}
			{status === "success" && (
				<div className="text-center py-8">
					<div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
						<svg
							className="h-7 w-7 text-green-500"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={2}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M5 13l4 4L19 7"
							/>
						</svg>
					</div>
					<h3 className="text-xl font-bold text-slate-900 mb-2">
						{t("success.title")}
					</h3>
					<p className="text-sm text-slate-500">{t("success.message")}</p>
				</div>
			)}

			{/* Error state */}
			{status === "error" && (
				<div className="text-center py-8">
					<div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-100">
						<svg
							className="h-7 w-7 text-red-500"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={2}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</div>
					<h3 className="text-xl font-bold text-slate-900 mb-2">
						{t("error.title")}
					</h3>
					<p className="text-sm text-slate-500 mb-6">{t("error.message")}</p>
					<button
						onClick={() => setStatus("idle")}
						className="rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
					>
						Try Again
					</button>
				</div>
			)}

			{/* Form (idle/loading) */}
			{(status === "idle" || status === "loading") && (
				<>
					<h3 className="text-xl font-bold text-slate-900 mb-1">
						{t("title")}
					</h3>
					<p className="text-sm text-slate-500 mb-6">{t("subtitle")}</p>

					<form onSubmit={handleSubmit(onSubmit)} noValidate>
						<div className="grid grid-cols-2 gap-4 mb-4">
							{/* First Name */}
							<FormField
								label={t("fields.firstName")}
								placeholder={t("placeholders.firstName")}
								error={errors.firstName?.message}
								disabled={status === "loading"}
								{...register("firstName")}
							/>

							{/* Last Name */}
							<FormField
								label={t("fields.lastName")}
								placeholder={t("placeholders.lastName")}
								error={errors.lastName?.message}
								disabled={status === "loading"}
								{...register("lastName")}
							/>
						</div>

						{/* Email */}
						<div className="mb-4">
							<FormField
								label={t("fields.email")}
								type="email"
								placeholder={t("placeholders.email")}
								error={errors.email?.message}
								disabled={status === "loading"}
								{...register("email")}
							/>
						</div>

						<div className="grid grid-cols-2 gap-4 mb-4">
							{/* Company */}
							<FormField
								label={t("fields.company")}
								placeholder={t("placeholders.company")}
								error={errors.company?.message}
								disabled={status === "loading"}
								{...register("company")}
							/>

							{/* Job Title */}
							<FormField
								label={t("fields.jobTitle")}
								placeholder={t("placeholders.jobTitle")}
								error={errors.jobTitle?.message}
								disabled={status === "loading"}
								{...register("jobTitle")}
							/>
						</div>

						{/* Phone */}
						<div className="mb-6">
							<FormField
								label={t("fields.phone")}
								type="tel"
								placeholder={t("placeholders.phone")}
								error={errors.phone?.message}
								disabled={status === "loading"}
								{...register("phone")}
							/>
						</div>

						{/* Submit */}
						<button
							type="submit"
							disabled={status === "loading"}
							className="w-full rounded-lg bg-blue-600 py-3 text-sm font-semibold text-white hover:bg-blue-900 active:bg-blue-950 transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
						>
							{status === "loading" && (
								<svg
									className="h-4 w-4 animate-spin"
									fill="none"
									viewBox="0 0 24 24"
								>
									<circle
										className="opacity-25"
										cx="12"
										cy="12"
										r="10"
										stroke="currentColor"
										strokeWidth="4"
									/>
									<path
										className="opacity-75"
										fill="currentColor"
										d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
									/>
								</svg>
							)}
							{status === "loading" ? t("submitting") : t("submit")}
						</button>
					</form>
				</>
			)}
		</Modal>
	);
}

import { forwardRef, type InputHTMLAttributes } from "react";

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const FormField = forwardRef<HTMLInputElement, FormFieldProps>(
	({ label, error, ...props }, ref) => {
		const id = props.name || label.toLowerCase().replace(/\s/g, "-");

		return (
			<div>
				<label
					htmlFor={id}
					className="mb-1.5 block text-sm font-medium text-slate-700"
				>
					{label}
				</label>
				<input
					ref={ref}
					id={id}
					className={`w-full rounded-lg border px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 transition-colors focus:border-primary focus:ring-1 focus:ring-primary outline-none ${
						error ? "border-red-400" : "border-slate-300"
					}`}
					aria-invalid={!!error}
					aria-describedby={error ? `${id}-error` : undefined}
					{...props}
				/>
				{error && (
					<p
						id={`${id}-error`}
						className="mt-1 text-xs text-red-500"
						role="alert"
					>
						{error}
					</p>
				)}
			</div>
		);
	}
);

FormField.displayName = "FormField";
