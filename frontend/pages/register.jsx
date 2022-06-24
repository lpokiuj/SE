import React from 'react';
import {
	TextInput,
	PasswordInput,
	Anchor,
	Paper,
	Title,
	Text,
	Container,
	Button,
} from '@mantine/core';
import Link from 'next/link';

export default function Register() {
	return (
		<Container size={500} my={40}>
			<Title
				align="center"
				sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900, color: "#228BE6" })}
			>
				WELCOME TO PREPLAND!
			</Title>

			<Text color="dimmed" size="sm" align="center" mt={5}>

				Already have an account yet?{' '}

				<Link href="/login" passHref>
					<Anchor size="sm">
						Login
					</Anchor>
				</Link>

			</Text>

			<Paper withBorder shadow="md" p={30} mt={30} radius="md">
				<form>

					<TextInput
						label="Username"
						placeholder="username"
						size="md"
						required
					/>
					<Text size="sm" color="dimmed">Username must unique</Text>

					<TextInput
						label="Email"
						placeholder="username or your@email.com"
						mt="md"
						size="md"
						required
					/>
					<Text size="sm" color="dimmed">Input a valid email address</Text>

					<PasswordInput
						label="Password"
						placeholder="password"
						mt="md"
						size="md"
						required
					/>
					<Text size="sm" color="dimmed">Password must contain at least 8 characters including an uppercase letter, a symbol, and a number</Text>

					<PasswordInput
						label="Repeat password"
						placeholder="repeat password"
						mt="md"
						size="md"
						required
					/>
				</form>
				<Link href="/home" passHref>
					<Button fullWidth mt="xl">
						REGISTER
					</Button>
				</Link>
			</Paper >
		</Container >
	);
}