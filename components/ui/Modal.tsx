"use client";

import { ReactNode, useEffect, useRef, useCallback } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
}

/** Accessible modal dialog with focus trap and escape key handling */
export function Modal({ isOpen, onClose, children, title }: ModalProps) {
	const overlayRef = useRef<HTMLDivElement>(null);
	const contentRef = useRef<HTMLDivElement>(null);

	// Close on Escape key
	const handleKeyDown = useCallback(
		(e: KeyboardEvent) => {
			if (e.key === "Escape") onClose();
		},
		[onClose]
	);

	useEffect(() => {
		if (isOpen) {
			document.addEventListener("keydown", handleKeyDown);
			document.body.style.overflow = "hidden";

			// Focus first focusable element
			const focusable = contentRef.current?.querySelector<HTMLElement>(
				'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
			);
			focusable?.focus();
		}

		return () => {
			document.removeEventListener("keydown", handleKeyDown);
			document.body.style.overflow = "";
		};
	}, [isOpen, handleKeyDown]);

	if (!isOpen) return null;

	return (
		<div
			ref={overlayRef}
			className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
			onClick={(e) => {
				if (e.target === overlayRef.current) onClose();
			}}
			role="dialog"
			aria-modal="true"
			aria-label={title}
		>
			<div
				ref={contentRef}
				className="relative w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl md:p-8 max-h-[90vh] overflow-y-auto"
			>
				{/* Close button */}
				<button
					onClick={onClose}
					className="absolute right-4 top-4 rounded-full p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"
					aria-label="Close"
				>
					<svg
						className="h-5 w-5"
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
				</button>

				{children}
			</div>
		</div>
	);
}
