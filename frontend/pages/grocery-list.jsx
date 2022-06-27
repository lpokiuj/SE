import React from "react";
import { getSession } from "next-auth/react";
import Layout from "../components/Layout";
import { Image, SimpleGrid, Container } from "@mantine/core";
import GroceryCard from "../components/GroceryCard";

const mockGroceryListCardData = [
  {
    title: "Salmon with Veggies",
    description: "Boiled egg, edamame, tomato, corn, celery, purple cabbage",
    time: "1 hours",
    weight: "400gr",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    link: "#",
  },
  {
    title: "Salmon with Veggies",
    description: "Boiled egg, edamame, tomato, corn, celery, purple cabbage",
    time: "1 hours",
    weight: "400gr",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    link: "#",
  },
  {
    title: "Salmon with Veggies",
    description: "Boiled egg, edamame, tomato, corn, celery, purple cabbage",
    time: "1 hours",
    weight: "400gr",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    link: "#",
  },
  {
    title: "Salmon with Veggies",
    description: "Boiled egg, edamame, tomato, corn, celery, purple cabbage",
    time: "1 hours",
    weight: "400gr",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    link: "#",
  },
  {
    title: "Salmon with Veggies",
    description: "Boiled egg, edamame, tomato, corn, celery, purple cabbage",
    time: "1 hours",
    weight: "400gr",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    link: "#",
  },
  {
    title: "Salmon with Veggies",
    description: "Boiled egg, edamame, tomato, corn, celery, purple cabbage",
    time: "1 hours",
    weight: "400gr",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    link: "#",
  },
  {
    title: "Salmon with Veggies",
    description: "Boiled egg, edamame, tomato, corn, celery, purple cabbage",
    time: "1 hours",
    weight: "400gr",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    link: "#",
  },
  {
    title: "Salmon with Veggies",
    description: "Boiled egg, edamame, tomato, corn, celery, purple cabbage",
    time: "1 hours",
    weight: "400gr",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    link: "#",
  },
  {
    title: "Salmon with Veggies",
    description: "Boiled egg, edamame, tomato, corn, celery, purple cabbage",
    time: "1 hours",
    weight: "400gr",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    link: "#",
  },
  {
    title: "Salmon with Veggies",
    description: "Boiled egg, edamame, tomato, corn, celery, purple cabbage",
    time: "1 hours",
    weight: "400gr",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    link: "#",
  },
  {
    title: "Salmon with Veggies",
    description: "Boiled egg, edamame, tomato, corn, celery, purple cabbage",
    time: "1 hours",
    weight: "400gr",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    link: "#",
  },
  {
    title: "Salmon with Veggies",
    description: "Boiled egg, edamame, tomato, corn, celery, purple cabbage",
    time: "1 hours",
    weight: "400gr",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    link: "#",
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
  return (
    <Layout user={session.user}>
      <Container size={1500}>
        <Image py={20} src="/MenuGrocery.png" />
        <SimpleGrid mb={20} cols={4}>
          {mockGroceryListCardData.map((item, i) => (
            <GroceryCard key={i} {...item} />
          ))}
        </SimpleGrid>
      </Container>
    </Layout>
  );
}
