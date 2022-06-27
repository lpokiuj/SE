import React from "react";
import { Image } from "@mantine/core";
import Layout from "../components/Layout";
import { getSession } from "next-auth/react";

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

export default function MealPlanPage({ session }) {
  const { user } = session;

  return (
    <Layout user={user}>
      <Image
        py={20}
        src="/MealPlan.png"
        alt="Random image"
      />
    </Layout>
  );
}
