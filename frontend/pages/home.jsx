import Layout from "../components/Layout";
import Status from "../components/Status";
import Profile from "../components/Profile";
import { SimpleGrid } from "@mantine/core";
import { getSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { fetcher } from "../config/fetcher";

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
  const { user, token } = session;
  const [loading, setLoading] = useState(false);
  const [detail, setDetail] = useState(null);

  const getUserDetail = async (token) => {
    setLoading(true);
    const res = await fetcher.get("/users/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setDetail(res.data);
    setLoading(false);
  };

  useEffect(() => {
    getUserDetail(token);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Layout user={user}>
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
              stats: detail?.calorie?.calorie,
              progress: 0,
              color: "red",
              icon: "flame",
              unit: "kcal",
            },
            {
              label: "Fat",
              stats: detail?.fat?.fat,
              progress: 0,
              color: "blue",
              icon: "droplet",
              unit: "g",
            },
            {
              label: "Carbs",
              stats: detail?.carbohydrate?.carbohydrate,
              progress: 0,
              color: "green",
              icon: "leaf",
              unit: "g",
            },
            {
              label: "Protein",
              stats: detail?.protein?.protein,
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
