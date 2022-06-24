import React from 'react';
import { Title, Text, Container, Button, Overlay, createStyles, Tabs } from '@mantine/core';
import Link from 'next/link';
import HeaderTabs from '../components/AppHeaderUnverified';

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    paddingTop: 323,
    paddingBottom: 320,
    backgroundImage:
      'url(https://images.unsplash.com/photo-1591189863430-ab87e120f312?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',

    '@media (max-width: 520px)': {
      paddingTop: 80,
      paddingBottom: 50,
    },
  },

  inner: {
    position: 'relative',
    zIndex: 1,
  },

  title: {
    fontWeight: 800,
    fontSize: 40,
    letterSpacing: -1,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    color: theme.white,
    marginBottom: theme.spacing.xs,
    textAlign: 'center',
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    '@media (max-width: 520px)': {
      fontSize: 28,
      textAlign: 'left',
    },
  },

  highlight: {
    color: theme.colors[theme.primaryColor][4],
  },

  description: {
    color: theme.colors.gray[0],
    textAlign: 'center',

    '@media (max-width: 520px)': {
      fontSize: theme.fontSizes.md,
      textAlign: 'left',
    },
  },

  controls: {
    marginTop: theme.spacing.xl * 1.5,
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,

    '@media (max-width: 520px)': {
      flexDirection: 'column',
    },
  },

  control: {
    height: 42,
    fontSize: theme.fontSizes.md,

    '&:not(:first-of-type)': {
      marginLeft: theme.spacing.md,
    },

    '@media (max-width: 520px)': {
      '&:not(:first-of-type)': {
        marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
  },

  secondaryControl: {
    color: theme.white,
    backgroundColor: 'rgba(255, 255, 255, .4)',

    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, .45) !important',
    },
  },
}));

const user = {
  name: 'username',
  email: '',
  image: '',
}
const tabs = ['Home', 'Meal Plan', 'Grocery List', 'Price List', 'Article', 'News'];

export default function Index() {
  const { classes, cx } = useStyles();
  return (
    <div>
      <HeaderTabs user={user}>
      <Link href="/home" passHref>
        <Tabs.Tab></Tabs.Tab>
      </Link>
      </HeaderTabs>
      <div className={classes.wrapper}>
        <Overlay color="#000" opacity={0.65} zIndex={1} />

        <div className={classes.inner}>
          <Title className={classes.title}>
          Your personal meal prepping discoveries{' '}
            <Text component="span" inherit className={classes.highlight}>
            delivery to you
            </Text>
          </Title>

          <Container size={640}>
            <Text size="lg" className={classes.description}>
            We're still on your browser for a while, but we'll get into your smartphone soon always support PREPLAND to keep us growing
            </Text>
            <Text className={classes.description}>❤️❤️❤️</Text>
          </Container>

          <div className={classes.controls}>
            <Link href="/register" passHref>
              <Button className={classes.control} variant="white" size="lg">
                Get started
              </Button>
            </Link>

            <Link href="https://youtube.com" passHref>
              <Button className={cx(classes.control, classes.secondaryControl)} size="lg">
                Live demo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}