import { useState } from "react";
import {
  RingProgress,
  Text,
  SimpleGrid,
  Paper,
  Center,
  Group,
  Dialog,
  TextInput,
  Button,
} from "@mantine/core";
import { Flame, Droplet, Leaf, Dna } from "tabler-icons-react";

const icons = {
  flame: Flame,
  droplet: Droplet,
  leaf: Leaf,
  dna: Dna,
};

const SingleStatus = ({ stat }) => {
  const [opened, setOpened] = useState(false);
  const [value, setValue] = useState("");
  const Icon = icons[stat.icon];

  const handleUpdateClick = async () => {
    if (value) {
      await stat.update(parseInt(value));
      setOpened(false);
    }
  }

  return (
    <>
      <Paper
        withBorder
        radius="md"
        p="xs"
        component="button"
        onClick={() => setOpened((o) => !o)}
      >
        <Group>
          <RingProgress
            size={80}
            roundCaps
            thickness={8}
            sections={[{ value: stat.progress, color: stat.color }]}
            label={
              <Center>
                <Icon size={22} />
              </Center>
            }
          />

          <div>
            <Text color="dimmed" size="xs" transform="uppercase" weight={700}>
              {stat.label}
            </Text>
            <Text weight={700} size="xl">
              {stat.stats} {stat.unit}
            </Text>
          </div>
        </Group>
      </Paper>

      <Dialog
        opened={opened}
        withCloseButton
        onClose={() => setOpened(false)}
        size="lg"
        radius="md"
      >
        <Text size="sm" style={{ marginBottom: 10 }} weight={500}>
          Update {stat.label}
        </Text>

        <Group align="flex-end">
          <TextInput style={{ flex: 1 }} value={value} onChange={(evt) => setValue(evt.target.value)} />
          <Button onClick={() => handleUpdateClick()}>Update</Button>
        </Group>
      </Dialog>
    </>
  );
};

export default function StatsRing({ data }) {
  const stats = data.map((stat) => {
    return <SingleStatus key={stat.label} stat={stat} />;
  });
  return (
    <SimpleGrid cols={2} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
      {stats}
    </SimpleGrid>
  );
}
