import React from 'react';
import { createStyles, Avatar, Text, Group } from '@mantine/core';
import { At } from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
  icon: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
  },

  name: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}));

export default function UserInfoIcons({ avatar, name, title, email }) {
  const { classes } = useStyles();
  return (
    <div>
      <Group noWrap>
        <Avatar src={avatar} size={94} radius="md" />
        <div>
          <Text size="xs" sx={{ textTransform: 'uppercase' }} weight={700} color="dimmed">
            {title}
          </Text>

          <Text size="lg" weight={500} className={classes.name}>
            {name}
          </Text>

          <Group noWrap spacing={10} mt={3}>
            <At size={16} className={classes.icon} />
            <Text size="xs" color="dimmed">
              {email}
            </Text>
          </Group>
        </div>
      </Group>
    </div>
  );
}