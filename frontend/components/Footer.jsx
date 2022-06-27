import React from "react";
import {
  createStyles,
  Container,
  Group,
  ActionIcon,
  Image,
  Text,
} from "@mantine/core";
import { BrandTwitter, BrandYoutube, BrandInstagram } from "tabler-icons-react";

const useStyles = createStyles((theme) => ({
  footer: {
    borderTop: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
      }`,
    backgroundColor: theme.colors[theme.primaryColor][6],
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },

  links: {
    [theme.fn.smallerThan("xs")]: {
      marginTop: theme.spacing.md,
    },
  },
}));

export default function Footer() {
  const { classes } = useStyles();

  return (
    <div>
      <Image src="/promotion.png" alt="Promotion" />
      <div className={classes.footer}>
        <Container className={classes.inner}>
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
          <Group spacing={0} className={classes.links} position="right" noWrap>
            <ActionIcon component="a" href="https://twitter.com/" target="_blank" size="lg" variant="filled" color="blue">
              <BrandTwitter size={18} color={"#FFFFFF"} />
            </ActionIcon>
            <ActionIcon component="a" href="https://youtube.com/" target="_blank" size="lg" variant="filled" color="blue">
              <BrandYoutube size={18} color={"#FFFFFF"} />
            </ActionIcon>
            <ActionIcon component="a" href="https://instagram.com/" target="_blank" size="lg" variant="filled" color="blue">
              <BrandInstagram size={18} color={"#FFFFFF"} />
            </ActionIcon>
          </Group>
        </Container>
      </div>
    </div>
  );
}