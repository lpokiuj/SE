import React from "react";
import { Bookmark, Heart, Share } from "tabler-icons-react";
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
          <Image src={image} height={275} />
        </a>
      </Card.Section>

      <Badge
        className={classes.rating}
        variant="gradient"
        gradient={{ from: "indigo", to: "teal" }}
      >
        {rating}
      </Badge>

      <Group position="apart" className={classes.titleWrapper}>
        <Center>
          <Text inline weight={500} component="a" {...linkProps}>
            {title}
          </Text>
        </Center>

        <Group spacing={8} mr={0}>
          <ActionIcon
            className={classes.action}
            style={{ color: theme.colors.red[6], backgroundColor: "transparent" }}
          >
            <Heart size={16} />
          </ActionIcon>
          <ActionIcon
            className={classes.action}
            style={{ color: theme.colors.yellow[7], backgroundColor: "transparent" }}
          >
            <Bookmark size={16} />
          </ActionIcon>
        </Group>
      </Group>

      <Text size="sm" color="dimmed" lineClamp={4}>
        {description}
      </Text>

      <Group className={classes.footer}>
        <Button variant="outline" sx={{ flex: 1 }}>
          &gt;&gt; Previews
        </Button>
        <Button sx={{ flex: 1 }}>+ Add To Cart</Button>
      </Group>
    </Card>
  );
}
