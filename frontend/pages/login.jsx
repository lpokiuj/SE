import React, { useState } from "react";
import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import Link from "next/link";
import { loginUser } from "../lib/user/api";
import { useRouter } from "next/router";
import { getCsrfToken, signIn } from "next-auth/react";

export async function getServerSideProps(context) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
}

export default function Login({ csrfToken }) {
  const router = useRouter();
  const [error, setError] = useState(null);
  const [isSubmiting, setIsSubmitting] = useState(false);

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  const handleSubmit = async (values) => {
    setIsSubmitting(true);
    const res = await signIn("credentials", {
      redirect: false,
      email: values.email,
      password: values.password,
      callbackUrl: "/home",
    });

    if (res?.error) {
      setError(res.error);
    } else {
      setError(null);
    }

    if (res.url) router.push(res.url);
    setIsSubmitting(false);
  };

  return (
    <Container size={500} my={40}>
      <div>{error}</div>
      <Title
        align="center"
        sx={(theme) => ({
          fontFamily: `Greycliff CF, ${theme.fontFamily}`,
          fontWeight: 900,
          color: "#228BE6",
        })}
      >
        WELCOME BACK!
      </Title>

      <Text color="dimmed" size="sm" align="center" mt={5}>
        Do not have an account yet?{" "}
        <Link href="/register" passHref>
          <Anchor href="#" size="sm">
            Create account
          </Anchor>
        </Link>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <input hidden name={csrfToken} defaultValue={csrfToken} />

          <TextInput
            label="Username / Email address"
            placeholder="username or your@email.com"
            mt="md"
            size="md"
            required
            {...form.getInputProps("email")}
          />

          <PasswordInput
            label="Password"
            placeholder="password"
            mt="md"
            size="md"
            required
            {...form.getInputProps("password")}
          />
          <Button loading={isSubmiting} type="submit" fullWidth mt="xl">
            LOGIN
          </Button>
        </form>
        <Group position="apart" mt="md">
          <Checkbox label="Remember me" />
          <Anchor href="#" size="sm">
            Forgot password?
          </Anchor>
        </Group>
      </Paper>
    </Container>
  );
}
