import { Container, Flex, Grid, ScaleFade, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { ProjectCard } from "./ProjectCard";
const cardsProjects = [
  {
    id: 201,
    image:
      "https://github.com/xMichaelRodriguez/images/blob/main/message-to-binary.PNG?raw=true",
    title: "Message To Binary",
    typeApp: "Web App",
    uriDemo: "https://message-to-binary.netlify.app",
    uriCode: "https://github.com/xMichaelRodriguez/message-to-binary",
  },
  {
    id: 2120,
    image:
      "https://github.com/xMichaelRodriguez/images/blob/main/uvs.PNG?raw=true",
    title: "Una Vida Segura",
    typeApp: "Web App",
    uriDemo: "https://uvs.netlify.app",
    uriCode: "https://github.com/xMichaelRodriguez/IGP_fronend",
  },

  {
    id: 2121,
    image:
      "https://raw.githubusercontent.com/xMichaelRodriguez/spotiry/main/public/spotiry%20save.png",
    title: "Mini Spotiry",
    typeApp: "Web App",
    uriDemo: "https://spotiry.netlify.app",
    uriCode: "https://github.com/xMichaelRodriguez/spotiry",
  },
];
export const ProjectScreen = () => {
  return (
    <Container maxW="container.xl" mb={200}>
      <ScaleFade initialScale={0.9} in={true}>
        <SimpleGrid
          justifyItems="center"
          minChildWidth="250px"
          columns={3}
          spacing={10}
        >
          {cardsProjects.map((card) => (
            <ProjectCard key={card.id} {...card} />
          ))}
        </SimpleGrid>
      </ScaleFade>
    </Container>
  );
};
