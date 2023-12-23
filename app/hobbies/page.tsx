"use client";

import { ScrollArea, SimpleGrid } from "@mantine/core";
import React, { FunctionComponent } from "react";
import HobbyPageContent from "./HobbyPageContent";

interface PageProps {}

const Page: FunctionComponent<PageProps> = () => {
  return (
    <>
      <ScrollArea h="85vh" ml="xs" offsetScrollbars>
        <SimpleGrid cols={2} visibleFrom="sm" mr="sm">
          <HobbyPageContent />
        </SimpleGrid>
        <SimpleGrid cols={1} hiddenFrom="sm">
          <HobbyPageContent />
        </SimpleGrid>
      </ScrollArea>
    </>
  );
};

export default Page;
