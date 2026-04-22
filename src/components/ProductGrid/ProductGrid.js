import "./ProductGrid.css";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductGrid({ products }) {
	return (
		<section className="product-grid" aria-label="Product listing">
			{products.map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
		</section>
	);
}
