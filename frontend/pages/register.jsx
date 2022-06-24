import {
  TextInput,
  PasswordInput,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Button,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import Link from "next/link";
import { useRouter } from "next/router";
import { registerUser } from "../lib/user/api";

export default function Register() {
  const router = useRouter();
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      password: "",
      repeatPassword: "",
    },

    validate: {
      email: (value) => {
        if (!value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)) {
          return "Invalid email address";
        }

        return null;
      },
      password: (value, values) => {
        const regex =
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!regex.test(value)) {
          return "Password must be at least 8 characters, an uppercase, a symbol and a number";
        }

        if (value !== values.repeatPassword) {
          return "Passwords do not match";
        }

        return null;
      },
      repeatPassword: (value, values) => {
        if (value !== values.password) {
          return "Passwords do not match";
        }

        return null;
      },
    },
  });

  const handleSubmit = async (values) => {
    const user = await registerUser({
      name: values.name,
      email: values.email,
      password: values.password,
    });

    router.push("/login");
    form.reset();
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
        WELCOME TO PREPLAND!
      </Title>

      <Text color="dimmed" size="sm" align="center" mt={5}>
        Already have an account yet?{" "}
        <Link href="/login" passHref>
          <Anchor size="sm">Login</Anchor>
        </Link>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <TextInput
            label="Name"
            placeholder="name"
            size="md"
            required
            {...form.getInputProps("name")}
          />

          <TextInput
            label="Email"
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

          <PasswordInput
            label="Repeat password"
            placeholder="repeat password"
            mt="md"
            size="md"
            required
            {...form.getInputProps("repeatPassword")}
          />

          <Button type="submit" fullWidth mt="xl">
            REGISTER
          </Button>
        </form>
        {/* <Link href="/home" passHref>
          <Button fullWidth mt="xl">
            REGISTER
          </Button>
        </Link> */}
      </Paper>
    </Container>
  );
}
