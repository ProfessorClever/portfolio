import {
  Card,
  CardSection,
  Image,
  Text,
  Button,
  Title,
  Stack,
  Group,
} from "@mantine/core";
import Link from "next/link";
import React, { ReactNode } from "react";

interface Props {
  children: string;
  picture: string;
  link: string;
  title: string;
  datum: string;
}
export default function ProjectCard({
  children,
  picture,
  link,
  title,
  datum,
}: Props) {
  return (
    <Card withBorder={false} radius="lg">
      <CardSection>
        <Image src={picture} alt={title} h={200} />
      </CardSection>
      <CardSection bg={"myColor.2"} h={230}>
        <Stack justify={"space-between"} h={230}>
          <Stack justify="start">
            <Group pl={"md"} pr={"md"} pt={"xs"} justify="space-between">
              <Title order={2}>{title}</Title>
              <Text visibleFrom="xs">{datum}</Text>
            </Group>
            <Text pl={"md"} pr={"md"}>
              {children}
            </Text>
          </Stack>
          <Button component={Link} href={link} m="md" radius="lg" w={120}>
            Show me!
          </Button>
        </Stack>
      </CardSection>
    </Card>
  );
}
