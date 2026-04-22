import ProductGrid from "@/components/ProductGrid/ProductGrid";
import PLPClient from "@/components/PLPClient/PLPClient";
import "./page.css";

async function getProducts() {
	try {
		const res = await fetch("https://fakestoreapi.com/products", {
			next: { revalidate: 3600 },
			headers: {
				Accept: "application/json",
				"User-Agent": "Mozilla/5.0",
			},
		});

		if (!res.ok) return [];

		const data = await res.json();
		return Array.isArray(data) ? data : [];
	} catch (error) {
		console.error("Failed to fetch products:", error);
		return [];
	}
}
export default async function Home() {
	const products = await getProducts();

	// JSON-LD Schema
	const schema = {
		"@context": "https://schema.org",
		"@type": "ItemList",
		name: "Metta Muse Product Collection",
		description: "Browse our exclusive collection of handcrafted products",
		url: "https://mettamuse.com/shop",
		numberOfItems: products.length,
		itemListElement: products.map((product, index) => ({
			"@type": "ListItem",
			position: index + 1,
			item: {
				"@type": "Product",
				name: product.title,
				description: product.description,
				image: product.image,
				url: `https://mettamuse.com/product/${product.id}`,
				category: product.category,
				aggregateRating: {
					"@type": "AggregateRating",
					ratingValue: product.rating.rate,
					reviewCount: product.rating.count,
				},
			},
		})),
	};

	return (
		<div className="plp">
			{/* JSON-LD Schema */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
			/>

			{/* Breadcrumb */}
			<nav className="plp__breadcrumb" aria-label="Breadcrumb">
				<a href="/" className="plp__breadcrumb-link">
					HOME
				</a>
				<span className="plp__breadcrumb-separator">|</span>
				<span className="plp__breadcrumb-current">SHOP</span>
			</nav>

			{/* Hero - H1 */}
			<div className="plp__hero">
				<h1 className="plp__title">DISCOVER OUR PRODUCTS</h1>
				<p className="plp__description">
					Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
					scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
					dolor.
				</p>
			</div>

			<PLPClient products={products} />
		</div>
	);
}
