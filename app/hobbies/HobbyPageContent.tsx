import ProjectCard from "@/components/ProjectCard";
import React from "react";

export default function HobbyPageContent() {
  return (
    <>
      <ProjectCard
        picture={
          "https://image.stern.de/33665718/t/De/v1/w1440/r1.7778/-/streaming-mikrofon.jpg"
        }
        link={"hobbies/mythenStunde"}
        title={"MythenStunde Podcast"}
        datum={"10.03.2023"}
      >
        I am running a Podcast about mythical friendchises. Here you find
        informations and the links.
      </ProjectCard>
      <ProjectCard
        picture={
          "https://d1w82usnq70pt2.cloudfront.net/wp-content/uploads/2021/10/IMG_2846-scaled.jpg"
        }
        link={"hobbies/warhammer"}
        title={"Warhammer 40k"}
        datum={"06.07.2023"}
      >
        I also like to Paint Miniatures, and read books about Warhammer 40 000.
        Here i tell you something about the hobby.
      </ProjectCard>
      <ProjectCard
        picture={
          "https://tourguidegames.com/wp-content/uploads/2021/06/Copyofzolldesignlogo1.png"
        }
        link={"hobbies/penAndPaper"}
        title={"Pen and Paper"}
        datum={"15.12.2019"}
      >
        Playing, or more precise, running Pen and Paper is a great passion of
        mine. If you dont know what that means, here i will break it down.
      </ProjectCard>
    </>
  );
}
