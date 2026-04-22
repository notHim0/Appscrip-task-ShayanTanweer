import Link from "next/link";
import "./ProductCard.css";
import Image from "next/image";

export default function ProductCard({ product }) {
	return (
		<article className="product-card">
			<div className="product-card__image-wrapper">
				<Image
					src={product.image}
					alt={product.title}
					fill
					sizes="(max-width: 768px) 50vw, 25vw"
					className="product-card__image"
				/>
				<button
					className="product-card__wishlist"
					aria-label={`Add ${product.title} to wishlist`}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="lucide lucide-heart-icon lucide-heart"
					>
						<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
					</svg>
				</button>
				{product.outOfStock && (
					<div className="product-card__out-of-stock">OUT OF STOCK</div>
				)}
			</div>

			<div className="product-card__info">
				<h2 className="product-card__title">{product.title}</h2>
				<p className="product-card__pricing">
					<Link href="/" className="product-card__signin-link">
						Sign in
					</Link>{" "}
					or{" "}
					<Link href="/" className="product-card__signin-link">
						Create an account
					</Link>{" "}
					to see pricing
				</p>
			</div>
		</article>
	);
}
