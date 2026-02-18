import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

/** Centered container with max-width and horizontal padding */
export function Container({ children, className = "" }: ContainerProps) {
	return (
		<div className={`mx-auto w-full max-w-[1280px] px-5 md:px-8 lg:px-12 ${className}`}>
			{children}
		</div>
	);
}
