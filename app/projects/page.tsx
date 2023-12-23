"use client";

import React, { FunctionComponent } from "react";
import { ScrollArea, SimpleGrid } from "@mantine/core";
import ProjectsPageContent from "./ProjectsPageContent";

interface PageProps {}

const Page: FunctionComponent<PageProps> = () => {
  return (
    <>
      <ScrollArea h="85vh" ml="xs" offsetScrollbars>
        <SimpleGrid cols={2} visibleFrom="sm" mr="sm">
          <ProjectsPageContent />
        </SimpleGrid>
        <SimpleGrid cols={1} hiddenFrom="sm">
          <ProjectsPageContent />
        </SimpleGrid>
      </ScrollArea>
    </>
  );
};

export default Page;
