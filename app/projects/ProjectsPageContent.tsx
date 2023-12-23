import ProjectCard from "@/components/ProjectCard";
import React from "react";

export default function ProjectsPageContent() {
  return (
    <>
      <ProjectCard
        picture="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvZGV8ZW58MHx8MHx8fDA%3D"
        link="/projects/portfolio-website"
        title="Portfolio Website"
        datum="13.11.2023"
      >
        Here i will tell you, how i programmed this site in TypeScript with the
        help of NextJs, React and Mantine.
      </ProjectCard>
      <ProjectCard
        picture="https://www.autozeitung.de/assets/styles/article_image/public/gallery_images/2014/08/Dodge-Charger-Pursuit-2015-Police-Car-01.jpg?itok=rVrqpJ5h"
        link="/projects/coprun"
        title="Cop Run"
        datum="15.08.2023"
      >
        A game, written in Java, made for a pixelgrid in the university. And it
        actually won a price!
      </ProjectCard>
      <ProjectCard
        picture="https://www.appgefahren.de/wp-content/uploads/2016/11/Super-Cat-Tales-1.jpg"
        link="/projects/gobrun"
        title="Gob Run"
        datum="28.10.2023"
      >
        My Jump and Run project, made in Godot. Here i tell about my first steps
        with that Engine!
      </ProjectCard>
      <ProjectCard
        picture="https://billbaud.net/wp-content/uploads/2023/03/ECA902FC-F196-40D9-A535-2D3735938425.jpeg"
        link="/projects/cyberdeck"
        title="Cyber Deck"
        datum="Q1/2 2024"
      >
        In this project i am building a portable cyberdeck out of the Pi 5.
      </ProjectCard>
    </>
  );
}
