"use client";

import { useDisclosure } from "@mantine/hooks";
import {
  AppShell,
  Burger,
  Group,
  NavLink,
  Title,
  Text,
  UnstyledButton,
} from "@mantine/core";
import { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconUser } from "@tabler/icons-react";
import Nav from "./Nav";

interface Props {
  children: ReactNode;
}

function MyAppShell({ children }: Props) {
  const [opened, { toggle }] = useDisclosure();
  const pathname = usePathname();

  return (
    <AppShell
      header={{ height: 45 }}
      padding="md"
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened, desktop: true },
      }}
    >
      <AppShell.Header withBorder={false}>
        <Group wrap="nowrap" justify="space-between" align="start">
          <UnstyledButton component={Link} href="/">
            <Title order={1} pl="sm" pt="5">
              <IconUser strokeWidth={3} /> P-Clever
            </Title>
          </UnstyledButton>
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="xl" />
          <Group
            wrap="nowrap"
            visibleFrom="sm"
            justify="center"
            align="center"
            pr="sm"
            pt="xs"
          >
            <Nav labelProp="Timeline" linkProp="/timeline" path={pathname} />
            <Nav labelProp="Projects" linkProp="/projects" path={pathname} />
            <Nav labelProp="Hobbies" linkProp="/hobbies" path={pathname} />
            <Nav labelProp="Contact" linkProp="/contact" path={pathname} />
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar>
        <NavLink
          variant="filled"
          component={Link}
          label={<Text style={{ textAlign: "center" }}>Home</Text>}
          href="/"
          active={pathname == "/"}
        />
        <NavLink
          variant="filled"
          component={Link}
          label={<Text style={{ textAlign: "center" }}>Projects</Text>}
          href="/projects"
          active={pathname == "/projects"}
        />
        <NavLink
          variant="filled"
          component={Link}
          label={<Text style={{ textAlign: "center" }}>Timeline</Text>}
          href="/timeline"
          active={pathname == "/timeline"}
        />
        <NavLink
          variant="filled"
          component={Link}
          label={<Text style={{ textAlign: "center" }}>Hobbies</Text>}
          href="/hobbies"
          active={pathname == "/hobbies"}
        />
        <NavLink
          variant="filled"
          component={Link}
          label={<Text style={{ textAlign: "center" }}>Contact</Text>}
          href="/contact"
          active={pathname == "/contact"}
        />
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}

export default MyAppShell;
