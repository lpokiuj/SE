import React from 'react';
import { createStyles, Container, Group, ActionIcon, Image, Text } from '@mantine/core';
import { BrandTwitter, BrandYoutube, BrandInstagram } from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
	footer: {
		borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]}`,
		backgroundColor: theme.colors[theme.primaryColor][6],
	},

	inner: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingTop: theme.spacing.xl,
		paddingBottom: theme.spacing.xl,

		[theme.fn.smallerThan('xs')]: {
			flexDirection: 'column',
		},
	},

	links: {
		[theme.fn.smallerThan('xs')]: {
			marginTop: theme.spacing.md,
		},

	},
}));

export default function Footer() {
	const { classes } = useStyles();

	return (
		<div className={classes.footer}>
			<Container className={classes.inner}>
				<div style={{ display: 'flex' }}>
					<Image
						radius="md"
						src="/PreplandLogo.png"
						alt="Random unsplash image"
						width={25}
					/>
					<Text color={'white'} weight='700'>PREPLAND</Text>
				</div>
				<Group spacing={0} className={classes.links} position="right" noWrap>
					<ActionIcon size="lg">
						<BrandTwitter size={18} color={'#FFFFFF'} />
					</ActionIcon>
					<ActionIcon size="lg">
						<BrandYoutube size={18} color={'#FFFFFF'} />
					</ActionIcon>
					<ActionIcon size="lg">
						<BrandInstagram size={18} color={'#FFFFFF'} />
					</ActionIcon>
				</Group>
			</Container>
		</div>
	);
}