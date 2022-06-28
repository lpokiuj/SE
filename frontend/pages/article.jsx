import React from 'react';
import { Image, Container } from '@mantine/core';
import Layout from '../components/Layout';
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

export default function ArticlePage({ session }) {
  const { user } = session;

  return (
    <Layout user={user}>
      <Container>
        <Image
          py={20}
          src="/article.png"
          alt="article image"
        />
      </Container>
    </Layout>
  );
}