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
  Tabs,
  Burger,
  Image,
} from "@mantine/core";
import { useBooleanToggle } from "@mantine/hooks";
import {
  Logout,
  Heart,
  Settings,
  PlayerPause,
  Trash,
  SwitchHorizontal,
  ChevronDown,
  Bookmark,
} from "tabler-icons-react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const useStyles = createStyles((theme) => ({
  header: {
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

export default function HeaderTabs({ user, tabs }) {
  const router = useRouter(); // routing

  const { classes, theme, cx } = useStyles();
  const [opened, toggleOpened] = useBooleanToggle(false);
  const [userMenuOpened, setUserMenuOpened] = useState(false);

  const [activeTab, setActiveTab] = useState(() => {
    // liat route "/home" , terus set tab nya active
    const { pathname } = router;
    const tabIndex = tabs.findIndex((tab) => tab.link === pathname);
    return tabIndex !== -1 ? tabIndex : 0;
  });
  const onTabChange = (index) => {
    // handle kalo misal user click tab lain selain yang active
    setActiveTab(index);
    router.push(tabs[index].link);
  };

  const items = tabs.map((tab) => (
    <Tabs.Tab label={tab.label} key={tab.label} tabKey={tab.link} />
  ));

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
                    src={user?.image || "profile.jpg"}
                    alt={user?.name}
                    radius="xl"
                    size={20}
                  />
                  <Text
                    weight={500}
                    size="sm"
                    sx={{ lineHeight: 1, color: theme.white }}
                    mr={3}
                  >
                    {user?.name || ""}
                  </Text>
                  <ChevronDown size={12} />
                </Group>
              </UnstyledButton>
            }
          >
            <Menu.Item icon={<Heart size={14} color={theme.colors.red[6]} />}>
              Liked menus
            </Menu.Item>
            <Menu.Item icon={<Bookmark size={14} color={theme.colors.yellow[6]} />}>
              Saved menus
            </Menu.Item>
            <Divider />
            <Menu.Label>Settings</Menu.Label>
            <Menu.Item icon={<Settings size={14} />}>
              Account settings
            </Menu.Item>
            <Menu.Item icon={<SwitchHorizontal size={14} />}>
              Change account
            </Menu.Item>
            <Link href="/" passHref>
              <Menu.Item
                icon={<Logout size={14} />}
                onClick={() => signOut({ callbackUrl: "/" })}
              >
                Logout
              </Menu.Item>
            </Link>
            <Menu.Label>Danger zone</Menu.Label>
            <Menu.Item icon={<PlayerPause size={14} />}>
              Pause subscription
            </Menu.Item>
            <Menu.Item color="red" icon={<Trash size={14} />}>
              Delete account
            </Menu.Item>
          </Menu>
        </Group>
      </Container>
      <Container>
        <Tabs
          variant="outline"
          classNames={{
            root: classes.tabs,
            tabsListWrapper: classes.tabsList,
            tabControl: classes.tabControl,
            tabActive: classes.tabControlActive,
          }}
          active={activeTab}
          onTabChange={onTabChange}
        >
          {items}
        </Tabs>
      </Container>
    </div>
  );
}
