import Link from "next/link";
import "./Footer.css";
import FooterAccordion from "./FooterAccordion";

export default function Footer() {
	return (
		<footer className="footer">
			{/* Top Section */}
			<div className="footer__top">
				<div className="footer__newsletter">
					<h2 className="footer__heading">BE THE FIRST TO KNOW</h2>
					<p className="footer__subtext">
						Sign up for updates from mettã muse.
					</p>
					<div className="footer__subscribe">
						<input
							type="email"
							placeholder="Enter your e-mail..."
							className="footer__email-input"
							aria-label="Email address for newsletter"
						/>
						<button className="footer__subscribe-btn">SUBSCRIBE</button>
					</div>
				</div>

				<div className="footer__contact">
					<h2 className="footer__heading">CONTACT US</h2>
					<p className="footer__contact-item">+44 221 133 5360</p>
					<p className="footer__contact-item">customercare@mettamuse.com</p>
					<h2 className="footer__heading footer__heading--currency">
						CURRENCY
					</h2>
					<div className="footer__currency">
						<img width={20} src="/images/payment/usflag.png" />
						<span>• USD</span>
					</div>
					<p className="footer__currency-note">
						Transactions will be completed in Euros and a currency reference is
						available on hover.
					</p>
				</div>

				{/* Mobile only contact */}
				<div className="footer__contact-mobile">
					<h2 className="footer__heading">CALL US</h2>
					<p className="footer__contact-mobile-row">
						+44 221 133 5360 • customercare@mettamuse.com
					</p>
					<div className="footer__divider"></div>
					<h2 className="footer__heading">CURRENCY</h2>
					<div className="footer__currency">
						<img width={20} src="/images/payment/usflag.png" alt="US-Flag" />
						<span>• USD</span>
					</div>
				</div>
			</div>

			<div className="footer__divider footer__divider--desktop"></div>

			{/* Middle Section - Desktop */}
			<div className="footer__middle">
				<div className="footer__links-col">
					<h3 className="footer__col-heading">mettã muse</h3>
					<ul className="footer__links-list">
						<li>
							<Link href="/" className="footer__link">
								About Us
							</Link>
						</li>
						<li>
							<Link href="/" className="footer__link">
								Stories
							</Link>
						</li>
						<li>
							<Link href="/" className="footer__link">
								Artisans
							</Link>
						</li>
						<li>
							<Link href="/" className="footer__link">
								Boutiques
							</Link>
						</li>
						<li>
							<a href="/" className="footer__link">
								Contact Us
							</a>
						</li>
						<li>
							<a href="/" className="footer__link">
								EU Collaborations Data
							</a>
						</li>
					</ul>
				</div>

				<div className="footer__links-col">
					<h3 className="footer__col-heading">Quick Links</h3>
					<ul className="footer__links-list">
						<li>
							<Link href="/" className="footer__link">
								Orders & Shipping
							</Link>
						</li>
						<li>
							<Link href="/" className="footer__link">
								Join/Login as a Seller
							</Link>
						</li>
						<li>
							<Link href="/" className="footer__link">
								Payment & Pricing
							</Link>
						</li>
						<li>
							<Link href="/" className="footer__link">
								Return & Refunds
							</Link>
						</li>
						<li>
							<Link href="/" className="footer__link">
								FAQs
							</Link>
						</li>
						<li>
							<Link href="/" className="footer__link">
								Privacy Policy
							</Link>
						</li>
						<li>
							<Link href="/" className="footer__link">
								Terms & Conditions
							</Link>
						</li>
					</ul>
				</div>

				<div className="footer__links-col">
					<h3 className="footer__col-heading">FOLLOW US</h3>
					<div className="footer__social">
						<Link
							href="https://instagram.com"
							className="footer__social-link"
							aria-label="Follow us on Instagram"
						>
							<svg
								width="18"
								height="18"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
							>
								<rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
								<circle cx="12" cy="12" r="4" />
								<circle
									cx="17.5"
									cy="6.5"
									r="1"
									fill="currentColor"
									stroke="none"
								/>
							</svg>
						</Link>
						<Link
							href="https://linkedin.com"
							className="footer__social-link"
							aria-label="Follow us on LinkedIn"
						>
							<svg
								width="18"
								height="18"
								viewBox="0 0 24 24"
								fill="currentColor"
							>
								<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
								<rect x="2" y="9" width="4" height="12" />
								<circle cx="4" cy="4" r="2" />
							</svg>
						</Link>
					</div>

					<div className="footer__payments">
						<h3 className="footer__col-heading footer__col-heading--payments">
							mettã muse ACCEPTS
						</h3>
						<div className="footer__payment-icons">
							<img
								width={50}
								src="/images/payment/gpay.png"
								alt="Google Pay accepted"
								loading="lazy"
							/>
							<img
								width={50}
								src="/images/payment/mastercard.png"
								alt="Mastercard accepted"
								loading="lazy"
							/>
							<img
								width={50}
								src="/images/payment/paypal.png"
								alt="PayPal accepted"
								loading="lazy"
							/>
							<img
								width={50}
								src="/images/payment/amex.png"
								alt="American Express accepted"
								loading="lazy"
							/>
							<img
								width={50}
								src="/images/payment/applepay.png"
								alt="Apple Pay accepted"
								loading="lazy"
							/>
							<img
								width={50}
								src="/images/payment/opay.png"
								alt="OPay accepted"
								loading="lazy"
							/>
						</div>
					</div>
				</div>
			</div>

			{/* Mobile Accordion Section */}
			<div className="footer__mobile-accordion">
				<FooterAccordion title="mettã muse">
					<ul className="footer__links-list">
						<li>
							<Link href="/" className="footer__link">
								About Us
							</Link>
						</li>
						<li>
							<Link href="/" className="footer__link">
								Stories
							</Link>
						</li>
						<li>
							<Link href="/" className="footer__link">
								Artisans
							</Link>
						</li>
						<li>
							<Link href="/" className="footer__link">
								Boutiques
							</Link>
						</li>
						<li>
							<Link href="/" className="footer__link">
								Contact Us
							</Link>
						</li>
						<li>
							<Link href="/" className="footer__link">
								EU Collaborations Data
							</Link>
						</li>
					</ul>
				</FooterAccordion>

				<div className="footer__divider"></div>

				<FooterAccordion title="Quick Links">
					<ul className="footer__links-list">
						<li>
							<Link href="/" className="footer__link">
								Orders & Shipping
							</Link>
						</li>
						<li>
							<Link href="/" className="footer__link">
								Join/Login as a Seller
							</Link>
						</li>
						<li>
							<Link href="/" className="footer__link">
								Payment & Pricing
							</Link>
						</li>
						<li>
							<Link href="/" className="footer__link">
								Return & Refunds
							</Link>
						</li>
						<li>
							<Link href="/" className="footer__link">
								FAQs
							</Link>
						</li>
						<li>
							<Link href="/" className="footer__link">
								Privacy Policy
							</Link>
						</li>
						<li>
							<Link href="/" className="footer__link">
								Terms & Conditions
							</Link>
						</li>
					</ul>
				</FooterAccordion>

				<div className="footer__divider"></div>

				<FooterAccordion title="FOLLOW US">
					<div className="footer__social">
						<Link
							href="https://instagram.com"
							className="footer__social-link"
							aria-label="Follow us on Instagram"
						>
							<svg
								width="18"
								height="18"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
							>
								<rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
								<circle cx="12" cy="12" r="4" />
								<circle
									cx="17.5"
									cy="6.5"
									r="1"
									fill="currentColor"
									stroke="none"
								/>
							</svg>
						</Link>
						<Link
							href="https://linkedin.com"
							className="footer__social-link"
							aria-label="Follow us on LinkedIn"
						>
							<svg
								width="18"
								height="18"
								viewBox="0 0 24 24"
								fill="currentColor"
							>
								<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
								<rect x="2" y="9" width="4" height="12" />
								<circle cx="4" cy="4" r="2" />
							</svg>
						</Link>
					</div>
				</FooterAccordion>

				<div className="footer__divider"></div>

				{/* Mobile payments */}
				<div className="footer__mobile-payments">
					<p className="footer__payments-label">mettã muse ACCEPTS</p>
					<div className="footer__payment-icons">
						<img
							width={50}
							src="/images/payment/gpay.png"
							alt="Google Pay accepted"
							loading="lazy"
						/>
						<img
							width={50}
							src="/images/payment/mastercard.png"
							alt="Mastercard accepted"
							loading="lazy"
						/>
						<img
							width={50}
							src="/images/payment/paypal.png"
							alt="PayPal accepted"
							loading="lazy"
						/>
						<img
							width={50}
							src="/images/payment/amex.png"
							alt="American Express accepted"
							loading="lazy"
						/>
						<img
							width={50}
							src="/images/payment/applepay.png"
							alt="Apple Pay accepted"
							loading="lazy"
						/>
						<img
							width={50}
							src="/images/payment/opay.png"
							alt="OPay accepted"
							loading="lazy"
						/>
					</div>
				</div>
			</div>

			<div className="footer__divider"></div>

			<p className="footer__copyright">
				Copyright © 2023 mettamuse. All rights reserved.
			</p>
		</footer>
	);
}
