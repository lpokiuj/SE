import React from "react";
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
import { useUser } from "../contexts/authContext";
import { loginUser } from "../lib/user/api";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  const { dispatch } = useUser();
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
    const [error, response] = await loginUser({
      email: values.email,
      password: values.password,
    });

    if (error) {
      form.reset();
    } else {
      dispatch({
        type: "LOGIN",
        payload: {
          user: response.user,
          token: response.token,
        },
      });

      router.push("/home");
      form.reset();
    }
  };

  return (
    <Container size={500} my={40}>
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
          <Button type="submit" fullWidth mt="xl">
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
