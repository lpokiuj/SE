import HeaderTabs from "./AppHeader";
import Footer from "./Footer";

import { Container } from "@mantine/core";

const tabs = [
  { link: "/home", label: "Home" },
  { link: "/meal-plan", label: "Meal Plan" },
  { link: "/grocery-list", label: "Grocery List" },
  { link: "/article", label: "Article" },
  { link: "/news", label: "News" },
];

export default function Layout({ user, children }) {
  return (
    <div>
      <HeaderTabs
        user={{
          name: user.name,
          image: user.image,
          email: user.email,
        }}
        tabs={tabs}
      />
      {children}
      <Footer />
    </div>
  );
}
