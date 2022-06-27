import React from "react";
import { Bookmark, Heart, Share, Plus, Star } from "tabler-icons-react";
import {
  Button,
  Card,
  Image,
  Text,
  ActionIcon,
  Badge,
  Group,
  Center,
  Avatar,
  UnstyledButton,
  Box,
  useMantineTheme,
  createStyles,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  card: {
    position: "relative",
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  rating: {
    position: "absolute",
    top: theme.spacing.xs,
    right: theme.spacing.xs + 2,
    pointerEvents: "none",
  },

  titleWrapper: {
    marginTop: theme.spacing.md,
    marginBottom: theme.spacing.xs / 2,
  },

  title: {
    display: "block",
    marginTop: theme.spacing.md,
    marginBottom: theme.spacing.xs / 2,
  },

  action: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.gray[0],
  },

  footer: {
    marginTop: theme.spacing.md,
  },
}));

// interface ArticleCardProps {
//   image: string;
//   link: string;
//   title: string;
//   description: string;
//   rating: string;
// }

export default function ArticleCard({
  className,
  image,
  link,
  title,
  description,
  type,
  rating,
  ...others
}) {
  const { classes, cx } = useStyles();
  const theme = useMantineTheme();
  const linkProps = {
    href: link,
    target: "_blank",
    rel: "noopener noreferrer",
  };

  return (
    <Card
      withBorder
      radius="md"
      className={cx(classes.card, className)}
      {...others}
    >
      <Card.Section>
        <a {...linkProps}>
          <Image src={image} height={200} />
        </a>
      </Card.Section>

      {type && (
        <ActionIcon
          size="lg"
          color={
            type === "starred" ? "yellow" : type === "liked" ? "red" : "orange"
          }
          radius="xl"
          variant="light"
          className={classes.rating}
        >
          {type === "starred" ? "⭐" : type === "liked" ? "❤" : "🔥"}
        </ActionIcon>
      )}

      <Group position="apart" className={classes.titleWrapper}>
        <Center>
          <Text inline weight={500} component="a" {...linkProps}>
            {title}
          </Text>
        </Center>

        <Group spacing={8} mr={0}>
          <ActionIcon
            className={classes.action}
            style={{
              color: theme.colors.red[6],
              backgroundColor: "transparent",
            }}
          >
            <Heart size={16} />
          </ActionIcon>
          <ActionIcon
            className={classes.action}
            style={{
              color: theme.colors.yellow[7],
              backgroundColor: "transparent",
            }}
          >
            <Bookmark size={16} />
          </ActionIcon>
        </Group>
      </Group>

      <Text size="sm" color="dimmed" lineClamp={4}>
        {description}
      </Text>

      <Group align="center" position="apart" className={classes.footer}>
        <div>
          <Image 
            src="/star.png"
            alt=""
          />
        </div>

        <UnstyledButton>
          <Box
            sx={(theme) => ({
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 99999999,
              width: 30,
              height: 30,
              color: "white",
              backgroundColor: theme.colors.blue[6],
            })}
          >
            <Plus size={16} />
          </Box>
        </UnstyledButton>
      </Group>
    </Card>
  );
}
