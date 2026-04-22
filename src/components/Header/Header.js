import Link from "next/link";
import "./Header.css";

export default function Header() {
	return (
		<header className="header">
			{/* Announcement Bar */}
			<div className="header__announcement">
				<div className="header__announcement-item">
					<img
						src="/images/payment/announcement.png"
						className="header__icon-placeholder"
					/>
					<span className="header__announcement-text">Lorem ipsum dolor</span>
				</div>
				<div className="header__announcement-item header__announcement-item--desktop">
					<img
						src="/images/payment/announcement.png"
						className="header__icon-placeholder"
					/>
					<span className="header__announcement-text">Lorem ipsum dolor</span>
				</div>
				<div className="header__announcement-item header__announcement-item--desktop">
					<img
						src="/images/payment/announcement.png"
						className="header__icon-placeholder"
					/>
					<span className="header__announcement-text">Lorem ipsum dolor</span>
				</div>
			</div>

			{/* Main Header */}
			<div className="header__main">
				<div className="header__left">
					{/* Hamburger - mobile only */}
					<button
						className="header__hamburger-btn header__hamburger-btn--mobile"
						aria-label="Open menu"
					>
						<span className="header__hamburger-line"></span>
						<span className="header__hamburger-line"></span>
						<span className="header__hamburger-line"></span>
					</button>

					{/* Brand icon */}
					<div
						className="header__brand-icon"
						aria-label="Metta Muse brand icon"
					>
						<svg
							viewBox="0 0 50 50"
							width="44"
							height="44"
							fill="none"
							stroke="currentColor"
							strokeWidth="1.5"
						>
							<circle cx="25" cy="25" r="20" />
							<path d="M25 5 Q35 15 25 25 Q15 15 25 5" />
							<path d="M45 25 Q35 35 25 25 Q35 15 45 25" />
							<path d="M25 45 Q15 35 25 25 Q35 35 25 45" />
							<path d="M5 25 Q15 15 25 25 Q15 35 5 25" />
						</svg>
					</div>
				</div>

				<div className="header__center">
					<Link href="/" className="header__logo" aria-label="Metta Muse Home">
						LOGO
					</Link>
				</div>

				<div className="header__right">
					<button className="header__icon-btn" aria-label="Search">
						<svg
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="1.8"
						>
							<circle cx="11" cy="11" r="8" />
							<line x1="21" y1="21" x2="16.65" y2="16.65" />
						</svg>
					</button>
					<button className="header__icon-btn" aria-label="Wishlist">
						<svg
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="1.8"
						>
							<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
						</svg>
					</button>
					<button className="header__icon-btn" aria-label="Cart">
						<svg
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="1.8"
						>
							<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
							<line x1="3" y1="6" x2="21" y2="6" />
							<path d="M16 10a4 4 0 0 1-8 0" />
						</svg>
					</button>
					{/* Profile - desktop only */}
					<button
						className="header__icon-btn header__icon-btn--desktop"
						aria-label="Profile"
					>
						<svg
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="1.8"
						>
							<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
							<circle cx="12" cy="7" r="4" />
						</svg>
					</button>
					{/* ENG - desktop only */}
					<button
						className="header__lang-btn header__lang-btn--desktop"
						aria-label="Select language"
					>
						ENG
						<svg
							width="12"
							height="12"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
						>
							<polyline points="6 9 12 15 18 9" />
						</svg>
					</button>
				</div>
			</div>

			{/* Nav Bar - desktop only */}
			<nav className="header__nav" aria-label="Main navigation">
				<ul className="header__nav-list">
					<li>
						<Link href="/" className="header__nav-link">
							SHOP
						</Link>
					</li>
					<li>
						<Link href="/" className="header__nav-link">
							SKILLS
						</Link>
					</li>
					<li>
						<Link href="/" className="header__nav-link">
							STORIES
						</Link>
					</li>
					<li>
						<Link href="/" className="header__nav-link">
							ABOUT
						</Link>
					</li>
					<li>
						<Link href="/" className="header__nav-link">
							CONTACT US
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
