import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "./globals.css";

export const metadata = {
	title: "Metta Muse | Discover Our Products",
	description:
		"Browse our exclusive collection of handcrafted products at Metta Muse. Discover unique bags, accessories, clothing and more from independent artisans.",
	keywords:
		"metta muse, handcrafted, artisan products, bags, accessories, clothing, sustainable fashion",
	openGraph: {
		title: "Metta Muse | Discover Our Products",
		description:
			"Browse our exclusive collection of handcrafted products at Metta Muse.",
		url: "https://mettamuse.com",
		siteName: "Metta Muse",
		type: "website",
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
