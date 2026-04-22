"use client";

import { useState } from "react";

export default function FooterAccordion({ title, children }) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="footer-accordion">
			<button
				className="footer-accordion__header"
				onClick={() => setIsOpen((prev) => !prev)}
				aria-expanded={isOpen}
			>
				<span className="footer-accordion__title">{title}</span>
				<svg
					className={`footer-accordion__chevron ${isOpen ? "footer-accordion__chevron--open" : ""}`}
					width="16"
					height="16"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
				>
					<polyline points="6 9 12 15 18 9" />
				</svg>
			</button>
			{isOpen && <div className="footer-accordion__content">{children}</div>}
		</div>
	);
}
