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
        <Title order={3}>Projects:</Title>
        <ScrollArea h="70vh" type="always" offsetScrollbars>
          <Stack mr="10" justify="start">
            <Nav
              labelProp="Portfolio Website"
              linkProp="/projects/portfolio-website"
              path={pathname}
            />
            <Nav
              labelProp="CopRun"
              linkProp="/projects/coprun"
              path={pathname}
            />
            <Nav
              labelProp="GopRun"
              linkProp="/projects/gobrun"
              path={pathname}
            />
            <Nav labelProp="Radar" linkProp="/projects/radar" path={pathname} />
            <Nav labelProp="Radar" linkProp="/projects/radar" path={pathname} />
            <Nav labelProp="Radar" linkProp="/projects/radar" path={pathname} />
            <Nav labelProp="Radar" linkProp="/projects/radar" path={pathname} />
            <Nav labelProp="Radar" linkProp="/projects/radar" path={pathname} />
            <Nav labelProp="Radar" linkProp="/projects/radar" path={pathname} />
            <Nav labelProp="Radar" linkProp="/projects/radar" path={pathname} />
            <Nav labelProp="Radar" linkProp="/projects/radar" path={pathname} />
            <Nav labelProp="Radar" linkProp="/projects/radar" path={pathname} />
            <Nav labelProp="Radar" linkProp="/projects/radar" path={pathname} />
            <Nav labelProp="Radar" linkProp="/projects/radar" path={pathname} />
            <Nav labelProp="Radar" linkProp="/projects/radar" path={pathname} />
            <Nav labelProp="Radar" linkProp="/projects/radar" path={pathname} />
            <Nav labelProp="Radar" linkProp="/projects/radar" path={pathname} />
            <Nav
              labelProp="Python Web"
              linkProp="/projects/python-web"
              path={pathname}
            />
            <Nav
              labelProp="Mythen Stunde"
              linkProp="/projects/mythen-stunde"
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
