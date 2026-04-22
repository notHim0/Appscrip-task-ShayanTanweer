"use client";

import { useState, useMemo, useEffect } from "react";
import FilterSidebar from "../FilterSidebar/FilterSidebar";
import SortDropdown from "../SortDropdown/SortDropdown";
import ProductGrid from "../ProductGrid/ProductGrid";
import "./PLPClient.css";

export default function PLPClient({ products: initialProducts }) {
	const [products, setProducts] = useState(
		Array.isArray(initialProducts) ? initialProducts : [],
	);

	// Fallback client-side fetch if SSR returned empty
	useEffect(() => {
		if (!initialProducts || initialProducts.length === 0) {
			fetch("https://fakestoreapi.com/products")
				.then((res) => res.json())
				.then((data) => setProducts(data))
				.catch((err) => console.error("Client fetch failed:", err));
		}
	}, [initialProducts]);

	const [showFilter, setShowFilter] = useState(false);
	const [sortBy, setSortBy] = useState("recommended");
	const [filters, setFilters] = useState({});

	const sortedProducts = useMemo(() => {
		const arr = [...products];
		if (sortBy === "price-high") return arr.sort((a, b) => b.price - a.price);
		if (sortBy === "price-low") return arr.sort((a, b) => a.price - b.price);
		if (sortBy === "newest") return arr.sort((a, b) => b.id - a.id);
		if (sortBy === "popular")
			return arr.sort((a, b) => b.rating.count - a.rating.count);
		return arr;
	}, [products, sortBy]);

	return (
		<div className="plp-client">
			<div className="plp-client__filter-bar">
				<div className="plp-client__filter-left">
					<span className="plp-client__item-count">3425 ITEMS</span>
					<span className="plp-client__separator">|</span>
					<button
						className="plp-client__filter-toggle"
						onClick={() => setShowFilter((prev) => !prev)}
					>
						<svg
							width="14"
							height="14"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
						>
							<polyline
								points={showFilter ? "15 18 9 12 15 6" : "9 18 15 12 9 6"}
							/>
						</svg>
						{showFilter ? "HIDE FILTER" : "SHOW FILTER"}
					</button>
				</div>
				<SortDropdown onSortChange={setSortBy} />
			</div>

			<div className="plp-client__divider"></div>

			<div className="plp-client__content">
				{showFilter && <FilterSidebar onFilterChange={setFilters} />}
				<div
					className={`plp-client__grid-wrapper ${showFilter ? "plp-client__grid-wrapper--filtered" : ""}`}
				>
					{products.length === 0 ? (
						<p style={{ padding: "40px 0", color: "#888" }}>
							Loading products...
						</p>
					) : (
						<ProductGrid products={sortedProducts} />
					)}
				</div>
			</div>
		</div>
	);
}
