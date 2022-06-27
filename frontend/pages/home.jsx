import Layout from "../components/Layout";
import Card from "../components/Card";
import CategoryCard from "../components/CategoryCard";
import Status from "../components/Status";
import Profile from "../components/Profile";
import { useRouter } from "next/router";
import { SimpleGrid, Container, Title, Image } from "@mantine/core";
import { useSetState } from "@mantine/hooks";
import { getSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { fetcher } from "../config/fetcher";
import axios from "axios";

const mockCategoryData = [
  {
    title: "Ratatouille",
    description:
      "Eggplants, tomatoes, yellow squashes, Onion, zucchinis, pepper",
    image:
      "https://images.unsplash.com/photo-1572453800999-e8d2d1589b7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1540&q=80",
    link: "#",
    type: "starred",
  },
  {
    title: "Ratatouille",
    description:
      "Eggplants, tomatoes, yellow squashes, Onion, zucchinis, pepper",
    image:
      "https://images.unsplash.com/photo-1572453800999-e8d2d1589b7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1540&q=80",
    link: "#",
    type: "liked",
  },
  {
    title: "Ratatouille",
    description:
      "Eggplants, tomatoes, yellow squashes, Onion, zucchinis, pepper",
    image:
      "https://images.unsplash.com/photo-1572453800999-e8d2d1589b7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1540&q=80",
    link: "#",
    type: "fired",
  },
  {
    title: "Ratatouille",
    description:
      "Eggplants, tomatoes, yellow squashes, Onion, zucchinis, pepper",
    image:
      "https://images.unsplash.com/photo-1572453800999-e8d2d1589b7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1540&q=80",
    link: "#",
  },
  {
    title: "Ratatouille",
    description:
      "Eggplants, tomatoes, yellow squashes, Onion, zucchinis, pepper",
    image:
      "https://images.unsplash.com/photo-1572453800999-e8d2d1589b7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1540&q=80",
    link: "#",
  },
  {
    title: "Ratatouille",
    description:
      "Eggplants, tomatoes, yellow squashes, Onion, zucchinis, pepper",
    image:
      "https://images.unsplash.com/photo-1572453800999-e8d2d1589b7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1540&q=80",
    link: "#",
  },
];

const mockCardData = [
  {
    title: "Salmon with Veggies",
    description: "Boiled egg, edamame, tomato, corn, celery, purple cabbage",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    link: "#",
    rating: "4.5",
  },
  {
    title: "Salmon with Veggies",
    description: "Boiled egg, edamame, tomato, corn, celery, purple cabbage",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    link: "#",
    rating: "4.5",
  },
  {
    title: "Salmon with Veggies",
    description: "Boiled egg, edamame, tomato, corn, celery, purple cabbage",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    link: "#",
    rating: "4.5",
  },
  {
    title: "Salmon with Veggies",
    description: "Boiled egg, edamame, tomato, corn, celery, purple cabbage",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    link: "#",
    rating: "4.5",
  },
  {
    title: "Salmon with Veggies",
    description: "Boiled egg, edamame, tomato, corn, celery, purple cabbage",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    link: "#",
    rating: "4.5",
  },
];

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}

export default function HeroBackground({ session }) {
  const router = useRouter();
  const { user } = session;
  const [loading, setLoading] = useState(false);
  const [detail, setDetail] = useSetState({
    calorie: 0,
    carbohydrate: 0,
    fat: 0,
    protein: 0,
  });

  useEffect(() => {
    const fetchUserDetail = async () => {
      setLoading(true);

      try {
        const response = await fetcher.get(`/users/me`, {
          headers: {
            Authorization: `Bearer ${session.token}`,
          },
        });
        setDetail({
          calorie: response.data.calorie.calorie,
          fat: response.data.fat.fat,
          protein: response.data.protein.protein,
          carbohydrate: response.data.carbohydrate.carbohydrate,
        });
        setLoading(false);
      } catch (error) {
        console.log(error);
        router.push("/login");
      }
    };

    fetchUserDetail();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Layout user={user}>
      <Container>
        <SimpleGrid pt={25} cols={2}>
          <Profile
            avatar={user.image || "/profile.jpg"}
            title="Software engineer"
            name={user.name || ""}
            email={user.email || ""}
          />
          <Status
            data={[
              {
                label: "Calories",
                stats: detail?.calorie,
                progress: (detail?.calorie / 2500) * 100,
                color: "red",
                icon: "flame",
                unit: "kcal",
                update: async (calorie) => {
                  const response = await fetcher.patch(
                    `/calorie/${user.calorie.id}`,
                    {
                      calorie: calorie,
                    },
                    {
                      headers: {
                        Authorization: `Bearer ${session.token}`,
                      },
                    }
                  );

                  const calorieData = response.data;

                  setDetail({
                    calorie: calorieData.calorie,
                  });
                },
              },
              {
                label: "Fat",
                stats: detail?.fat,
                progress: (detail?.fat / 77) * 100,
                color: "blue",
                icon: "droplet",
                unit: "g",
                update: async (fat) => {
                  const response = await fetcher.patch(
                    `/fat/${user.fat.id}`,
                    {
                      fat: fat,
                    },
                    {
                      headers: {
                        Authorization: `Bearer ${session.token}`,
                      },
                    }
                  );

                  const fatData = response.data;

                  setDetail({
                    fat: fatData.fat,
                  });
                },
              },
              {
                label: "Carbs",
                stats: detail?.carbohydrate,
                progress: (detail?.carbohydrate / 325) * 100,
                color: "green",
                icon: "leaf",
                unit: "g",
                update: async (carbs) => {
                  const response = await fetcher.patch(
                    `/carbohydrate/${user.carbohydrate.id}`,
                    {
                      carbohydrate: carbs,
                    },
                    {
                      headers: {
                        Authorization: `Bearer ${session.token}`,
                      },
                    }
                  );

                  setDetail({
                    carbohydrate: response.data.carbohydrate,
                  });
                },
              },
              {
                label: "Protein",
                stats: detail?.protein,
                progress: (detail?.protein / 60) * 100,
                color: "orange",
                icon: "dna",
                unit: "g",
                update: async (protein) => {

                  const response = await fetcher.patch(
                    `/protein/${user.protein.id}`,
                    {
                      protein: protein,
                    },
                    {
                      headers: {
                        Authorization: `Bearer ${session.token}`,
                      },
                    }
                  );

                  setDetail({
                    protein: response.data.protein,
                  });
                },
              },
            ]}
          />
        </SimpleGrid>
      </Container>
      <Title pt={15} align="center">
        TODAY'S RECOMMENDATION
      </Title>
      <SimpleGrid p={20} cols={5}>
        {mockCardData.map((card, i) => (
          <Card
            key={i}
            title={card.title}
            description={card.description}
            image={card.image}
            rating={card.rating}
            link={card.link}
          />
        ))}
      </SimpleGrid>
      <Container>
        <Image src="/MenuCategory.png" />
      </Container>
      <Container>
        <SimpleGrid p={20} cols={3}>
          {mockCategoryData.map((card, i) => (
            <CategoryCard key={i} {...card} />
          ))}
        </SimpleGrid>
      </Container>
    </Layout>
  );
}
