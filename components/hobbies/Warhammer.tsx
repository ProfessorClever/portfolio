import { ScrollArea, Stack, Title, Image } from "@mantine/core";
import React from "react";

export default function Warhammer() {
  return (
    <>
      <ScrollArea>
        <Stack>
          <Image
            src={"https://media4.giphy.com/media/TfLEXiRtYoHUkaPVUk/giphy.gif"}
            alt={"Space Marine looking into the camera"}
            h={450}
            w={500}
            radius="lg"
            m="md"
          />
          <Title> Warhammer 40K</Title>
        </Stack>
      </ScrollArea>
    </>
  );
}
