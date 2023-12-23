"use client";
import { Group, NavLink, ScrollArea, Stack, Title } from "@mantine/core";
import React from "react";
import { usePathname } from "next/navigation";
import Nav from "@/components/Nav";

const Layout = ({ children }: any) => {
  const pathname = usePathname();
  return (
    <Group wrap="nowrap" h="85vh" w="100%">
      <Stack justify="start" visibleFrom="sm">
        <Title order={3}>Hobbies:</Title>
        <ScrollArea h="70vh" type="always" offsetScrollbars>
          <Stack mr="10" justify="start">
            <Nav
              labelProp="MythenStunde"
              linkProp="/hobbies/mythenStunde"
              path={pathname}
            />
            <Nav
              labelProp="Warhammer 40k"
              linkProp="/hobbies/warhammer"
              path={pathname}
            />
            <Nav
              labelProp="Pen and Paper"
              linkProp="/hobbies/penAndPaper"
              path={pathname}
            />
          </Stack>
        </ScrollArea>
      </Stack>
      <Stack>{children}</Stack>
    </Group>
  );
};

export default Layout;
