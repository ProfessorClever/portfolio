"use client";

import { usePathname } from "next/navigation";
import { Text } from "@mantine/core";

interface Props {
  params: {
    slug: string[];
  };
}

const Page = ({ params: { slug } }: Props) => {
  const pathname = usePathname();

  return <Text>Test</Text>;
};

export default Page;
