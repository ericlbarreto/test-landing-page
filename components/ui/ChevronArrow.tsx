export function ChevronArrow({ isOpen }: { isOpen: boolean }) {
	return (
		<figure>
			<svg
				className={`transition-all ease-in-out ${isOpen ? "-rotate-90" : "rotate-90"}`}
				fill="none"
				height="14"
				viewBox="0 0 9 14"
				width="9"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M1 1.35364L7 7.35364L1 13.3536"
					stroke={isOpen ? "#2563eb" : "#94A3B8"}
					strokeMiterlimit="10"
					strokeWidth="1.5"
				/>
			</svg>
		</figure>
	);
}