import Layout from "../components/Layout";
import Status from "../components/Status";
import Profile from "../components/Profile";
import { useUser } from "../contexts/authContext";
import { SimpleGrid } from "@mantine/core";

export default function HeroBackground() {
  const { state } = useUser();

  return (
    <Layout>
      <SimpleGrid pt={25} cols={2}>
        <Profile
          avatar="/profile.jpg"
          title="Software engineer"
          name={state.user?.name || ""}
          email={state.user?.email || ""}
        />
        <Status
          data={[
            {
              label: "Calories",
              stats: state.user?.calorie.calorie || 0,
              progress: 0,
              color: "red",
              icon: "flame",
              unit: "kcal",
            },
            {
              label: "Fat",
              stats: state.user?.fat.fat || 0,
              progress: 0,
              color: "blue",
              icon: "droplet",
              unit: "g",
            },
            {
              label: "Carbs",
              stats: state.user?.carbohydrate.carbohydrate || 0,
              progress: 0,
              color: "green",
              icon: "leaf",
              unit: "g",
            },
            {
              label: "Protein",
              stats: state.user?.protein?.protein || 0,
              progress: 0,
              color: "orange",
              icon: "dna",
              unit: "g",
            },
          ]}
        />
      </SimpleGrid>
    </Layout>
  );
}
