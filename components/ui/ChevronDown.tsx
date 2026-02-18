export function ChevronDown({ className = "" }: { className?: string }) {
	return (
		<svg
			viewBox="0 0 22 13"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={`pointer-events-none text-slate-500 transition-transform hover:text-blue-600 group-hover:text-blue-600 ${className}`}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M21.5657 1.56569L11.0001 12.1314L0.43457 1.56569L1.56595 0.434329L11.0001 9.86863L20.4344 0.434326L21.5657 1.56569Z"
				fill="currentColor"
			/>
		</svg>
	);
}