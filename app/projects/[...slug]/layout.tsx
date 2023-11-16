"use client";
import { Group, NavLink, ScrollArea, Stack } from "@mantine/core";
import React from "react";
import { usePathname } from "next/navigation";
import Nav from "@/components/Nav";

const Layout = ({ children }: any) => {
  const pathname = usePathname();
  return (
    <Group wrap="nowrap" h="80vh" w="100%">
      <ScrollArea h="100%" type="always" offsetScrollbars>
        <Nav
          labelProp="Portfolio Website"
          linkProp="/projects/portfolio-website"
          path={pathname}
        />
        <Nav labelProp="CopRun" linkProp="/projects/coprun" path={pathname} />
        <Nav labelProp="GopRun" linkProp="/projects/gobrun" path={pathname} />
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
      </ScrollArea>
      <Stack>{children}</Stack>
    </Group>
  );
};

export default Layout;
