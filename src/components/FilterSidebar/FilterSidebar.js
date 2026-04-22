"use client";

import { useState } from "react";
import "./FilterSidebar.css";

const FILTER_SECTIONS = [
	{
		id: "idealFor",
		label: "IDEAL FOR",
		options: ["Men", "Women", "Baby & Kids"],
	},
	{ id: "occasion", label: "OCCASION", options: ["All"] },
	{ id: "work", label: "WORK", options: ["All"] },
	{ id: "fabric", label: "FABRIC", options: ["All"] },
	{ id: "segment", label: "SEGMENT", options: ["All"] },
	{ id: "suitableFor", label: "SUITABLE FOR", options: ["All"] },
	{ id: "rawMaterials", label: "RAW MATERIALS", options: ["All"] },
	{ id: "pattern", label: "PATTERN", options: ["All"] },
];

export default function FilterSidebar({ onFilterChange }) {
	const [openSections, setOpenSections] = useState({});
	const [customizable, setCustomizable] = useState(false);
	const [selectedFilters, setSelectedFilters] = useState({});

	function toggleSection(id) {
		setOpenSections((prev) => ({ ...prev, [id]: !prev[id] }));
	}

	function handleOptionChange(sectionId, option) {
		const updated = { ...selectedFilters, [sectionId]: option };
		setSelectedFilters(updated);
		if (onFilterChange) onFilterChange(updated);
	}

	return (
		<aside className="filter-sidebar">
			<div className="filter-sidebar__customizable">
				<input
					type="checkbox"
					id="customizable"
					checked={customizable}
					onChange={() => setCustomizable((prev) => !prev)}
					className="filter-sidebar__checkbox"
				/>
				<label
					htmlFor="customizable"
					className="filter-sidebar__checkbox-label"
				>
					CUSTOMIZABLE
				</label>
			</div>

			<div className="filter-sidebar__divider"></div>

			{FILTER_SECTIONS.map((section) => (
				<div key={section.id} className="filter-sidebar__section">
					<button
						className="filter-sidebar__section-header"
						onClick={() => toggleSection(section.id)}
						aria-expanded={!!openSections[section.id]}
					>
						<span className="filter-sidebar__section-label">
							{section.label}
						</span>
						<svg
							className={`filter-sidebar__chevron ${openSections[section.id] ? "filter-sidebar__chevron--open" : ""}`}
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

					<p className="filter-sidebar__current-value">
						{selectedFilters[section.id] || "All"}
					</p>

					{openSections[section.id] && (
						<div className="filter-sidebar__options">
							{section.options.map((option) => (
								<button
									key={option}
									className={`filter-sidebar__option ${selectedFilters[section.id] === option ? "filter-sidebar__option--active" : ""}`}
									onClick={() => handleOptionChange(section.id, option)}
								>
									{option}
								</button>
							))}
						</div>
					)}

					<div className="filter-sidebar__divider"></div>
				</div>
			))}
		</aside>
	);
}
