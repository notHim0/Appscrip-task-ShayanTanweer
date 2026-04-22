"use client";

import { useState } from "react";
import "./SortDropdown.css";

const SORT_OPTIONS = [
	{ value: "recommended", label: "RECOMMENDED" },
	{ value: "newest", label: "NEWEST FIRST" },
	{ value: "popular", label: "POPULAR" },
	{ value: "price-high", label: "PRICE: HIGH TO LOW" },
	{ value: "price-low", label: "PRICE: LOW TO HIGH" },
];

export default function SortDropdown({ onSortChange }) {
	const [isOpen, setIsOpen] = useState(false);
	const [selected, setSelected] = useState(SORT_OPTIONS[0]);

	function handleSelect(option) {
		setSelected(option);
		setIsOpen(false);
		if (onSortChange) onSortChange(option.value);
	}

	return (
		<div className="sort-dropdown">
			<button
				className="sort-dropdown__trigger"
				onClick={() => setIsOpen((prev) => !prev)}
				aria-expanded={isOpen}
				aria-haspopup="listbox"
			>
				{selected.label}
				<svg
					className={`sort-dropdown__chevron ${isOpen ? "sort-dropdown__chevron--open" : ""}`}
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

			{isOpen && (
				<ul className="sort-dropdown__menu" role="listbox">
					{SORT_OPTIONS.map((option) => (
						<li
							key={option.value}
							role="option"
							aria-selected={selected.value === option.value}
						>
							<button
								className={`sort-dropdown__option ${selected.value === option.value ? "sort-dropdown__option--active" : ""}`}
								onClick={() => handleSelect(option)}
							>
								{selected.value === option.value && (
									<svg
										width="14"
										height="14"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2.5"
									>
										<polyline points="20 6 9 17 4 12" />
									</svg>
								)}
								{option.label}
							</button>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
