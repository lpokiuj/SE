import { useRouter } from "next/router";
import React, { useState } from "react";
import {
  createStyles,
  Container,
  Avatar,
  UnstyledButton,
  Group,
  Text,
  Menu,
  Divider,
  Burger,
  Image,
} from "@mantine/core";
import { useBooleanToggle } from "@mantine/hooks";
import {
  Login,
  Heart,
  Star,
  Message,
  Settings,
  SwitchHorizontal,
  ChevronDown,
} from "tabler-icons-react";
import Link from "next/link";

export const HEADER_HEIGHT = 65;

const useStyles = createStyles((theme) => ({
  header: {
    height: HEADER_HEIGHT,
    paddingTop: theme.spacing.sm,
    backgroundColor: theme.colors[theme.primaryColor][6],
    borderBottom: `1px solid ${theme.colors[theme.primaryColor][6]}`,
  },

  mainSection: {
    paddingBottom: theme.spacing.sm,
  },

  userMenu: {
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },

  user: {
    color: theme.white,
    padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
    borderRadius: theme.radius.sm,
    transition: "background-color 100ms ease",

    "&:hover": {
      backgroundColor:
        theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 7 : 5],
    },
  },

  burger: {
    [theme.fn.largerThan("xs")]: {
      display: "none",
    },
  },

  userActive: {
    backgroundColor:
      theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 7 : 5],
  },

  tabs: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  tabsList: {
    borderBottom: "0 !important",
  },

  tabControl: {
    fontWeight: 500,
    height: 38,
    color: `${theme.white} !important`,

    "&:hover": {
      backgroundColor:
        theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 7 : 5],
    },
  },

  tabControlActive: {
    color: `${
      theme.colorScheme === "dark" ? theme.white : theme.black
    } !important`,
    borderColor: `${theme.colors[theme.primaryColor][6]} !important`,
  },
}));

export default function HeaderTabsUnverified({ user, tabs }) {
  const router = useRouter();
  const { classes, theme, cx } = useStyles();
  const [opened, toggleOpened] = useBooleanToggle(false);
  const [userMenuOpened, setUserMenuOpened] = useState(false);

  return (
    <div className={classes.header}>
      <Container className={classes.mainSection}>
        <Group position="apart">
          <div style={{ display: "flex" }}>
            <Image
              radius="md"
              src="/PreplandLogo.png"
              alt="Random unsplash image"
              width={25}
            />
            <Text color={"white"} weight="700">
              PREPLAND
            </Text>
          </div>
          <Burger
            opened={opened}
            onClick={() => toggleOpened()}
            className={classes.burger}
            size="sm"
            color={theme.white}
          />

          <Menu
            size={260}
            placement="end"
            transition="pop-top-right"
            className={classes.userMenu}
            onClose={() => setUserMenuOpened(false)}
            onOpen={() => setUserMenuOpened(true)}
            control={
              <UnstyledButton
                className={cx(classes.user, {
                  [classes.userActive]: userMenuOpened,
                })}
              >
                <Group spacing={7}>
                  <Avatar
                    src={user.image}
                    alt={user.name}
                    radius="xl"
                    size={20}
                  />
                  <Text
                    weight={500}
                    size="sm"
                    sx={{ lineHeight: 1, color: theme.white }}
                    mr={3}
                  >
                    {user.name}
                  </Text>
                  <ChevronDown size={12} />
                </Group>
              </UnstyledButton>
            }
          >
            <Menu.Item
              icon={<Heart size={14} color={theme.colors.red[6]} />}
              onClick={() => router.push("/register")}
            >
              Liked posts
            </Menu.Item>
            <Menu.Item
              icon={<Star size={14} color={theme.colors.yellow[6]} />}
              onClick={() => router.push("/register")}
            >
              Saved Posts
            </Menu.Item>
            <Menu.Item
              icon={<Message size={14} color={theme.colors.blue[6]} />}
              onClick={() => router.push("/register")}
            >
              Your comments
            </Menu.Item>
            <Divider />
            <Menu.Label>Settings</Menu.Label>
            <Menu.Item icon={<Settings size={14} />}>
              Account settings
            </Menu.Item>
            <Menu.Item icon={<SwitchHorizontal size={14} />}>
              Change account
            </Menu.Item>
            <Link href="/register" passHref>
              <Menu.Item icon={<Login size={14} />}>Login</Menu.Item>
            </Link>
          </Menu>
        </Group>
      </Container>
    </div>
  );
}
