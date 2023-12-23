"use client";

import { usePathname } from "next/navigation";
import Warhammer from "@/components/hobbies/Warhammer";
import {
  Box,
  ScrollArea,
  Stack,
  Image,
  Title,
  Text,
  Paper,
} from "@mantine/core";

interface Props {
  params: {
    slug: string[];
  };
}

const Page = ({ params: { slug } }: Props) => {
  const pathname = usePathname();

  return (
    <>
      <ScrollArea h="85vh" w="85vw">
        <Stack m="md">
          <Image
            src={"https://media4.giphy.com/media/TfLEXiRtYoHUkaPVUk/giphy.gif"}
            alt={"Space Marine looking into the camera"}
            w="85%"
            radius="lg"
            visibleFrom="sm"
          />
          <Image
            src={"https://media4.giphy.com/media/TfLEXiRtYoHUkaPVUk/giphy.gif"}
            alt={"Space Marine looking into the camera"}
            w="100%"
            radius="lg"
            hiddenFrom="sm"
          />
          <Paper bg={"myColor.2"} radius="lg" p="md">
            <Title> Warhammer 40K</Title>
            <Text>
              It is the 41st Millennium. For more than a hundred centuries The
              Emperor has sat immobile on the Golden Throne of Earth. He is the
              Master of Mankind by the will of the gods, and master of a million
              worlds by the might of his inexhaustible armies.
            </Text>
            <Text>
              He is a rotting carcass writhing invisibly with power from the
              Dark Age of Technology. He is the Carrion Lord of the Imperium for
              whom a thousand souls are sacrificed every day, so that he may
              never truly die. Yet even in his deathless state, the Emperor
              continues his eternal vigilance. Mighty battlefleets cross the
              daemon-infested miasma of the Warp, the only route between distant
              stars, their way lit by the Astronomican, the psychic
              manifestation of the Emperor's will.
            </Text>
            <Text>
              Vast armies give battle in his name on uncounted worlds. Greatest
              amongst his soldiers are the Adeptus Astartes, the Space Marines,
              bio-engineered super-warriors. Their comrades in arms are legion:
              the Imperial Guard and countless planetary defence forces, the
              ever vigilant Inquisition and the tech-priests of the Adeptus
              Mechanicus to name only a few. But for all their multitudes, they
              are barely enough to hold off the ever-present threat from aliens,
              heretics, mutants - and worse. To be a man in such times is to be
              one amongst untold billions. It is to live in the cruelest and
              most bloody regime imaginable. These are the tales of those times.
              Forget the power of technology and science, for so much has been
              forgotten, never to be re-learned.
            </Text>
            <Text>
              Forget the promise of progress and understanding, for in the grim
              dark future there is only war. There is no peace amongst the
              stars, only an eternity of carnage and slaughter, and the laughter
              of thirsting gods.
            </Text>
          </Paper>
          <Text></Text>
        </Stack>
      </ScrollArea>
    </>
  );
};
/*  
    <Box
        hidden={pathname == "/hobbies/warhammer" ? false : true}
        p="md"
        mt="md"
    >
      <Warhammer />
    </Box>
*/
export default Page;
