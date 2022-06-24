import HeaderTabs from "./AppHeader";
import Footer from "./Footer";

import { Container } from "@mantine/core";

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
      <HeaderTabs tabs={tabs} />
      <Container>{children}</Container>
      <Footer />
    </div>
  );
}
