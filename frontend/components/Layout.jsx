import HeaderTabs from "./AppHeader";
import Footer from "./Footer";

import { Container } from "@mantine/core";

const user = {
	name: "Martinus Andika Novanawa",
	email: "martinus.novanawa@binus.ac.id",
	image:
		"https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80",
};
const tabs = [
	{ link: "/home", label: "Home" },
	{ link: "/meal-plan", label: "Meal Plan" },
	{ link: "/grocery-list", label: "Grocery List" },
	{ link: "/price-list", label: "Price List" },
	{ link: "/article", label: "Article" },
	{ link: "/news", label: "News" },
];

export default function Layout({ children }) {
	return (
		<div>
			<HeaderTabs user={user} tabs={tabs} />
			<Container>{children}</Container>
			<Footer />
		</div>
	);
}
