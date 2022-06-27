import React from "react";
import { createStyles, Avatar, Text, Group } from "@mantine/core";
import { Mail } from "tabler-icons-react";

const useStyles = createStyles((theme) => ({
  icon: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[3]
        : theme.colors.gray[5],
  },

  name: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}));

export default function UserInfoIcons({ avatar, name, title, email }) {
  const { classes } = useStyles();
  return (
    <Group noWrap>
      <Avatar src={avatar} size={180} radius="md" />
      <div>
        <Text
          size="xs"
          sx={{ textTransform: "uppercase" }}
          weight={700}
          color="dimmed"
        >
          {title}
        </Text>

        <Text size="lg" weight={500} className={classes.name}>
          {name}
        </Text>

        <Group noWrap spacing={2} mt={3}>
          <Mail size={16} className={classes.icon} />
          <Text size="xs" color="dimmed">
            {email}
          </Text>
        </Group>
        <br />
        <Text size="xs" color="dimmed">
          Calorie: 2500kcal/day, <br />
          Fat: 77g/day, <br />
          Carbs: 325g/day, <br />
          Protein: 60g/day
        </Text>
      </div>
    </Group>
  );
}
